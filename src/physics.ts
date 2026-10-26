import type { BubbleNode, Point } from "./types.ts";
import { bubbleGeometry } from "./geometry.ts";
export type DragMode = "elastic" | "free";
export interface Body {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  offset: Point;
  pin?: Point;
  opening?: {
    parent: string;
    dx: number;
    dy: number;
    elapsed: number;
    start: number;
  };
}
type Link = {
  source: string;
  target: string;
  restLength: number;
  restVector: Point;
  stiffness: number;
};
type LinkInput = { source: string; target: string };
const DRAG_CONTACT = 0.86 * 1.25,
  FULL_CONTACT = 1.25,
  HARDEN_TIME = 1.2;
const clamp = (n: number) => Math.max(-99800, Math.min(99800, n));
const key = (a: string, b: string) => JSON.stringify([a, b]);
export class PhysicsWorld {
  bodies = new Map<string, Body>();
  links: Link[] = [];
  active = false;
  reduced = false;
  contactScale = FULL_CONTACT;
  private dragging?: string;
  private mode: DragMode = "elastic";
  private idle = 0;
  private hardening = HARDEN_TIME;
  private quiet = 0;
  private recovery?: { id: string; point: Point; elapsed: number };
  private inputs = new Map<string, Point>();
  private groups: Body[][] = [];
  private groupIndex = new Map<string, number>();
  private ordered: {
    link: Link;
    from: string;
    to: string;
    sign: number;
    rate: number;
  }[] = [];
  private originals = new Map<string, Point>();
  sync(
    nodes: readonly BubbleNode[],
    links: readonly LinkInput[],
    forcePositions = false,
    savedPositions?: WeakSet<Point>,
  ) {
    const previous = new Set(this.bodies.keys()),
      ids = new Set(nodes.map((n) => n.id));
    const byId = new Map(nodes.map((n) => [n.id, n]));
    const parent = new Map(links.map((l) => [l.target, l.source]));
    let changed = previous.size !== ids.size;
    for (const id of previous)
      if (!ids.has(id)) {
        this.bodies.delete(id);
        this.inputs.delete(id);
        changed = true;
      }
    const externallyChanged = new Set<string>();
    for (const node of nodes) {
      const { offset, radius } = bubbleGeometry(node.data.kind);
      const x = clamp(node.position.x) + offset.x,
        y = clamp(node.position.y) + offset.y;
      const old = this.bodies.get(node.id),
        input = this.inputs.get(node.id);
      const external =
        forcePositions ||
        (!savedPositions?.has(node.position) &&
          (!input ||
            Math.hypot(input.x - node.position.x, input.y - node.position.y) >
              0.1));
      this.inputs.set(node.id, { ...node.position });
      if (!old) {
        this.bodies.set(node.id, {
          id: node.id,
          x,
          y,
          vx: 0,
          vy: 0,
          radius,
          offset,
        });
        changed = true;
      } else if (
        external &&
        !old.pin &&
        Math.hypot(old.x - x, old.y - y) > 0.1
      ) {
        Object.assign(old, { x, y, vx: 0, vy: 0 });
        delete old.opening;
        changed = true;
        externallyChanged.add(node.id);
      }
    }
    const oldLinks = new Map(
      this.links.map((l) => [key(l.source, l.target), l]),
    );
    this.links = links
      .filter((l) => ids.has(l.source) && ids.has(l.target))
      .map((l) => {
        const old = oldLinks.get(key(l.source, l.target));
        if (
          old &&
          !forcePositions &&
          !externallyChanged.has(l.source) &&
          !externallyChanged.has(l.target)
        )
          return old;
        const a = this.bodies.get(l.source)!,
          b = this.bodies.get(l.target)!;
        return {
          ...l,
          restLength: Math.hypot(b.x - a.x, b.y - a.y),
          restVector: { x: b.x - a.x, y: b.y - a.y },
          stiffness: 1,
        };
      });
    if (
      this.links.length !== oldLinks.size ||
      this.links.some((l) => !oldLinks.has(key(l.source, l.target)))
    )
      changed = true;
    // Opening starts outside the parent's visible circle, ordered parent before child.
    const visited = new Set<string>();
    const open = (id: string) => {
      if (visited.has(id)) return;
      visited.add(id);
      const pid = parent.get(id);
      if (pid && ids.has(pid)) open(pid);
      if (previous.has(id) || !previous.size || this.reduced || forcePositions)
        return;
      const body = this.bodies.get(id)!,
        p = pid ? this.bodies.get(pid) : undefined,
        pn = pid ? byId.get(pid) : undefined;
      if (!p || !pn) return;
      const dx = body.x - pn.position.x - p.offset.x,
        dy = body.y - pn.position.y - p.offset.y;
      const distance = Math.hypot(dx, dy),
        start = Math.min(
          1,
          ((p.radius + body.radius + 2) * FULL_CONTACT) / (distance || 1),
        );
      body.opening = { parent: p.id, dx, dy, elapsed: 0, start };
      body.x = p.x + dx * start;
      body.y = p.y + dy * start;
    };
    for (const id of ids) open(id);
    const neighbours = new Map<string, string[]>();
    for (const l of this.links) {
      for (const [a, b] of [
        [l.source, l.target],
        [l.target, l.source],
      ]) {
        if (!neighbours.has(a)) neighbours.set(a, []);
        neighbours.get(a)!.push(b);
      }
    }
    this.groups = [];
    this.groupIndex.clear();
    for (const id of ids)
      if (!this.groupIndex.has(id)) {
        const index = this.groups.length,
          group: Body[] = [],
          queue = [id];
        this.groupIndex.set(id, index);
        for (let i = 0; i < queue.length; i++) {
          const at = queue[i];
          group.push(this.bodies.get(at)!);
          for (const other of neighbours.get(at) ?? [])
            if (!this.groupIndex.has(other)) {
              this.groupIndex.set(other, index);
              queue.push(other);
            }
        }
        this.groups.push(group);
      }
    if (this.dragging && !ids.has(this.dragging)) {
      this.dragging = undefined;
      this.mode = "elastic";
      this.hardening = 0;
    }
    if (this.recovery && !ids.has(this.recovery.id)) this.recovery = undefined;
    if (forcePositions) {
      this.recovery = undefined;
      this.hardening = HARDEN_TIME;
      this.originals.clear();
    }
    this.orderLinks();
    if (changed) this.wake();
    return changed;
  }
  wake() {
    this.active = true;
    this.quiet = 0;
  }
  pin(id: string, point: Point) {
    const b = this.bodies.get(id);
    if (!b) return;
    b.pin = { x: clamp(point.x) + b.offset.x, y: clamp(point.y) + b.offset.y };
    b.x = b.pin.x;
    b.y = b.pin.y;
    b.vx = b.vy = 0;
    delete b.opening;
    this.orderLinks();
    this.wake();
  }
  unpin(id: string) {
    const b = this.bodies.get(id);
    if (b?.pin) {
      delete b.pin;
      this.orderLinks();
      this.wake();
    }
  }
  private capture() {
    this.originals.clear();
    for (const l of this.links) {
      const a = this.bodies.get(l.source)!,
        b = this.bodies.get(l.target)!;
      l.restVector = { x: b.x - a.x, y: b.y - a.y };
      l.restLength = Math.hypot(l.restVector.x, l.restVector.y);
      this.originals.set(key(l.source, l.target), { ...l.restVector });
    }
  }
  beginDrag(id: string, mode: DragMode = "elastic") {
    if (!this.bodies.has(id)) return;
    this.dragging = id;
    this.mode = mode;
    this.recovery = undefined;
    this.idle = 0;
    this.hardening = 0;
    this.contactScale = DRAG_CONTACT;
    this.capture();
    this.orderLinks();
    for (const b of this.bodies.values()) b.vx = b.vy = 0;
    this.wake();
  }
  drag(id: string, point: Point, mode: DragMode = "elastic") {
    const b = this.bodies.get(id);
    if (!b) return;
    if (this.dragging !== id) this.beginDrag(id, mode);
    else if (this.mode !== mode) {
      this.mode = mode;
      this.capture();
      this.orderLinks();
    }
    const x = clamp(point.x) + b.offset.x,
      y = clamp(point.y) + b.offset.y,
      dx = x - b.x,
      dy = y - b.y;
    if (Math.hypot(dx, dy) > 0.05) {
      this.idle = 0;
      this.hardening = 0;
      this.contactScale = DRAG_CONTACT;
    }
    delete b.opening;
    // Subdivide the input path, resolving contacts even when the final pointer has passed a neighbour.
    const steps = Math.max(1, Math.ceil(Math.hypot(dx, dy) / 18)),
      start = { x: b.x, y: b.y };
    for (let i = 1; i <= steps; i++) {
      b.x = start.x + (dx * i) / steps;
      b.y = start.y + (dy * i) / steps;
      b.pin = { x: b.x, y: b.y };
      this.contacts(true);
    }
    b.vx = b.vy = 0;
    this.wake();
  }
  release(id: string) {
    if (this.dragging === id) {
      const b = this.bodies.get(id);
      if (b && this.mode === "elastic") {
        this.recovery = { id, point: { x: b.x, y: b.y }, elapsed: 0 };
        const group = this.groupIndex.get(id);
        for (const l of this.links)
          if (this.groupIndex.get(l.source) === group) {
            const a = this.bodies.get(l.source)!,
              child = this.bodies.get(l.target)!,
              old = this.originals.get(key(l.source, l.target)) ?? l.restVector;
            l.restVector = {
              x: old.x * 0.8 + (child.x - a.x) * 0.2,
              y: old.y * 0.8 + (child.y - a.y) * 0.2,
            };
            l.restLength = Math.hypot(l.restVector.x, l.restVector.y);
          }
      } else {
        this.capture();
        if (b) this.recovery = { id, point: { x: b.x, y: b.y }, elapsed: 0 };
      }
      this.dragging = undefined;
      this.idle = 0;
    }
    this.unpin(id);
    this.orderLinks();
    this.wake();
  }
  ropeState(source: string, target: string) {
    const l = this.links.find(
        (l) => l.source === source && l.target === target,
      ),
      a = this.bodies.get(source),
      b = this.bodies.get(target);
    return {
      softness: 1 - this.hardening / HARDEN_TIME,
      stretch:
        l && a && b
          ? Math.max(0, Math.hypot(b.x - a.x, b.y - a.y) - l.restLength)
          : 0,
    };
  }
  positions(): Record<string, Point> {
    return Object.fromEntries(
      [...this.bodies.values()].map((b) => [
        b.id,
        { x: b.x - b.offset.x, y: b.y - b.offset.y },
      ]),
    );
  }
  private orderLinks() {
    this.ordered = [];
    const visited = new Set<string>(),
      start =
        this.dragging ??
        this.recovery?.id ??
        [...this.bodies.values()].find((b) => b.pin)?.id;
    const roots = [...(start ? [start] : []), ...this.bodies.keys()];
    const adj = new Map<string, Link[]>();
    for (const l of this.links)
      for (const id of [l.source, l.target]) {
        if (!adj.has(id)) adj.set(id, []);
        adj.get(id)!.push(l);
      }
    for (const root of roots)
      if (!visited.has(root)) {
        const queue = [root];
        visited.add(root);
        for (let i = 0; i < queue.length; i++)
          for (const link of adj.get(queue[i]) ?? []) {
            const from = queue[i],
              to = link.source === from ? link.target : link.source;
            if (visited.has(to)) continue;
            visited.add(to);
            queue.push(to);
            this.ordered.push({
              link,
              from,
              to,
              sign: link.source === from ? 1 : -1,
              rate: link.source === from ? 7 : 10,
            });
          }
      }
  }
  private contacts(duringDrag = false) {
    const bodies = [...this.bodies.values()],
      size = 2 * 53 * FULL_CONTACT + 8,
      cells = new Map<string, Body[]>();
    for (const b of bodies) {
      const k = Math.floor(b.x / size) + ":" + Math.floor(b.y / size);
      if (!cells.has(k)) cells.set(k, []);
      cells.get(k)!.push(b);
    }
    const pinnedGroups = new Set<number>();
    if (this.mode !== "free")
      for (const b of bodies)
        if (b.pin || b.id === this.recovery?.id)
          pinnedGroups.add(this.groupIndex.get(b.id)!);
    let penetration = 0;
    for (let i = 0; i < bodies.length; i++) {
      const a = bodies[i],
        cx = Math.floor(a.x / size),
        cy = Math.floor(a.y / size);
      for (let x = cx - 1; x <= cx + 1; x++)
        for (let y = cy - 1; y <= cy + 1; y++)
          for (const b of cells.get(x + ":" + y) ?? []) {
            if (a.id >= b.id || (a.pin && b.pin)) continue;
            const ga = this.groupIndex.get(a.id)!,
              gb = this.groupIndex.get(b.id)!;
            const dx = b.x - a.x,
              dy = b.y - a.y,
              d = Math.hypot(dx, dy),
              min =
                (a.radius + b.radius + (ga === gb ? 2 : 4)) * this.contactScale;
            if (d >= min) continue;
            const overlap = min - d;
            penetration = Math.max(penetration, overlap);
            const nx = d > 1e-6 ? dx / d : Math.cos(i * 2.39996),
              ny = d > 1e-6 ? dy / d : Math.sin(i * 2.39996);
            const grouped = ga !== gb && this.mode !== "free";
            const fixedA = grouped
              ? pinnedGroups.has(ga)
              : !!a.pin || a.id === this.recovery?.id;
            const fixedB = grouped
              ? pinnedGroups.has(gb)
              : !!b.pin || b.id === this.recovery?.id;
            if (fixedA && fixedB) continue;
            const share = fixedA || fixedB ? 1 : 0.5;
            const move = (body: Body, group: number, sign: number) => {
              for (const m of grouped ? this.groups[group] : [body]) {
                m.x += nx * overlap * share * sign;
                m.y += ny * overlap * share * sign;
                if (
                  !duringDrag &&
                  !this.reduced &&
                  !this.dragging &&
                  overlap > 2
                ) {
                  m.vx += nx * sign * Math.min(8, overlap * 0.1);
                  m.vy += ny * sign * Math.min(8, overlap * 0.1);
                }
              }
            };
            if (!fixedA) move(a, ga, -1);
            if (!fixedB) move(b, gb, 1);
          }
    }
    return penetration;
  }
  step(seconds: number) {
    if (!this.active) return false;
    const dt = Math.min(Math.max(seconds, 0), 1 / 30),
      steps = Math.max(1, Math.ceil(dt * 120)),
      h = dt / steps;
    const before = this.positions();
    this.idle += dt;
    if (this.reduced) this.hardening = HARDEN_TIME;
    else if (!this.dragging || this.idle > 0.12)
      this.hardening = Math.min(HARDEN_TIME, this.hardening + dt);
    this.contactScale =
      DRAG_CONTACT +
      (FULL_CONTACT - DRAG_CONTACT) * (this.hardening / HARDEN_TIME);
    if (this.recovery) this.recovery.elapsed += dt;
    for (let step = 0; step < steps; step++) {
      for (const b of this.bodies.values()) {
        if (b.pin) {
          b.x = b.pin.x;
          b.y = b.pin.y;
          b.vx = b.vy = 0;
          continue;
        }
        if (this.reduced) b.vx = b.vy = 0;
        b.vx *= Math.exp(-12 * h);
        b.vy *= Math.exp(-12 * h);
        b.x += b.vx * h;
        b.y += b.vy * h;
        if (b.id === this.recovery?.id) {
          b.x = this.recovery.point.x;
          b.y = this.recovery.point.y;
          b.vx = b.vy = 0;
        }
      }
      const shaping =
        this.mode !== "free" && (!!this.dragging || !!this.recovery);
      for (const row of this.ordered) {
        const { link, from, to, sign, rate } = row,
          a = this.bodies.get(from)!,
          b = this.bodies.get(to)!;
        if (this.mode === "free" && (this.dragging || this.recovery)) continue;
        if (a.opening || b.opening) continue;
        const d = Math.hypot(b.x - a.x, b.y - a.y);
        if (!shaping) {
          // Slack at rest: only very stretched ropes pull. No invisible attraction to old screen coordinates.
          const rest = Math.max(280, link.restLength);
          if (d <= rest || !d) continue;
          const k = ((d - rest) / d) * (1 - Math.exp(-5 * h)),
            dx = (b.x - a.x) * k,
            dy = (b.y - a.y) * k;
          if (!a.pin) {
            a.x += dx * 0.5;
            a.y += dy * 0.5;
          }
          if (!b.pin) {
            b.x -= dx * 0.5;
            b.y -= dy * 0.5;
          }
          continue;
        }
        if (
          this.dragging &&
          this.groupIndex.get(from) !== this.groupIndex.get(this.dragging)
        )
          continue;
        if (b.pin || b.id === this.recovery?.id) continue;
        link.stiffness = 0.3 + (0.7 * this.hardening) / HARDEN_TIME;
        const k =
          1 -
          Math.exp(-(this.reduced ? 35 : rate * (0.55 + link.stiffness)) * h);
        b.x += (a.x + link.restVector.x * sign - b.x) * k;
        b.y += (a.y + link.restVector.y * sign - b.y) * k;
      }
      for (const b of this.bodies.values())
        if (b.opening) {
          const o = b.opening,
            p = this.bodies.get(o.parent);
          if (!p) {
            delete b.opening;
            continue;
          }
          o.elapsed += h;
          const t = Math.min(1, o.elapsed / 0.24),
            e = o.start + (1 - o.start) * (1 - (1 - t) ** 3);
          b.x = p.x + o.dx * e;
          b.y = p.y + o.dy * e;
          if (t === 1) delete b.opening;
        }
      let penetration = 0;
      for (let pass = 0; pass < 4; pass++)
        penetration = Math.max(penetration, this.contacts());
      // A crowded star may require more room than its initial rope lengths allow.
      // Let contacts establish a feasible slack length instead of pulling forever.
      if (!shaping && !this.dragging && penetration > 0.1)
        for (const l of this.links) {
          const a = this.bodies.get(l.source)!,
            b = this.bodies.get(l.target)!;
          l.restLength = Math.max(
            l.restLength,
            Math.hypot(b.x - a.x, b.y - a.y),
          );
        }
      for (const b of this.bodies.values())
        if (!b.pin) {
          b.x = clamp(b.x - b.offset.x) + b.offset.x;
          b.y = clamp(b.y - b.offset.y) + b.offset.y;
        }
    }
    if (this.recovery && (this.reduced || this.recovery.elapsed > 2.4)) {
      this.capture();
      this.recovery = undefined;
      this.mode = "elastic";
      this.orderLinks();
    }
    const displacement = Math.max(
      0,
      ...[...this.bodies.values()].map((b) =>
        Math.hypot(
          b.x - b.offset.x - before[b.id].x,
          b.y - b.offset.y - before[b.id].y,
        ),
      ),
    );
    const speed = Math.max(
      0,
      ...[...this.bodies.values()].map((b) => Math.hypot(b.vx, b.vy)),
    );
    this.quiet =
      this.hardening >= HARDEN_TIME &&
      !this.recovery &&
      ![...this.bodies.values()].some((b) => b.opening) &&
      displacement < 0.035 &&
      speed < 0.2
        ? this.quiet + dt
        : 0;
    if (this.quiet > 0.22) {
      this.active = false;
      for (const b of this.bodies.values()) b.vx = b.vy = 0;
    }
    return this.active;
  }
}
