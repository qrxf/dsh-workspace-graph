import type { BubbleNode, Point } from "./types.ts";
export interface Body {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  offset: Point;
  pin?: Point;
  opening?: { parent: string; dx: number; dy: number; elapsed: number };
}
type Link = { source: string; target: string };
type Follower = Point & { rate: number };
const LIMIT = 100000;
const SOFT_CONTACT = 0.86;
const CONTACT_RAMP = 1.2;
const CONTACT_GAP = 2;
const FOLLOW_RATE = 10;
const FOLLOW_RATE_CHILD = 7;
const clamp = (n: number) => Math.max(-LIMIT + 200, Math.min(LIMIT - 200, n));
export class PhysicsWorld {
  bodies = new Map<string, Body>();
  links: Link[] = [];
  active = false;
  reduced = false;
  contactScale = 1;
  private dragging?: string;
  private followers = new Map<string, Follower>();
  private groupIndex = new Map<string, number>();
  private quiet = 0;
  private inputs = new Map<string, Point>();
  private groups: Body[][] = [];
  private ordered: Body[] = [];
  sync(
    nodes: readonly BubbleNode[],
    links: readonly Link[],
    forcePositions = false,
  ) {
    const ids = new Set(nodes.map((n) => n.id));
    const previousIds = new Set(this.bodies.keys());
    const nodeById = new Map(nodes.map((n) => [n.id, n]));
    const parents = new Map(links.map((l) => [l.target, l.source]));
    let changed = this.bodies.size !== ids.size;
    for (const id of this.bodies.keys())
      if (!ids.has(id)) {
        this.bodies.delete(id);
        this.inputs.delete(id);
        changed = true;
      }
    for (const node of nodes) {
      const offset = { x: 72, y: node.data.kind === "workspace" ? 53 : 37 };
      const x = clamp(node.position.x) + offset.x,
        y = clamp(node.position.y) + offset.y;
      const old = this.bodies.get(node.id);
      const input = this.inputs.get(node.id);
      const externalChange =
        forcePositions ||
        !input ||
        Math.hypot(input.x - node.position.x, input.y - node.position.y) > 0.1;
      this.inputs.set(node.id, { ...node.position });
      if (!old) {
        this.bodies.set(node.id, {
          id: node.id,
          x,
          y,
          vx: 0,
          vy: 0,
          radius: node.data.kind === "workspace" ? 53 : 37,
          offset,
        });
        changed = true;
      } else if (
        externalChange &&
        !old.pin &&
        Math.hypot(old.x - x, old.y - y) > 0.1
      ) {
        old.x = x;
        old.y = y;
        old.vx = old.vy = 0;
        delete old.opening;
        changed = true;
      }
    }
    const next = links.filter((l) => ids.has(l.source) && ids.has(l.target));
    if (JSON.stringify(next) !== JSON.stringify(this.links)) changed = true;
    this.links = next;
    // Parents must update before children, including forks listed before sources.
    this.ordered = [];
    const visited = new Set<string>();
    const visit = (id: string) => {
      if (visited.has(id)) return;
      visited.add(id);
      const parentId = parents.get(id);
      if (parentId && ids.has(parentId)) visit(parentId);
      const body = this.bodies.get(id)!;
      this.ordered.push(body);
      if (
        previousIds.has(id) ||
        !previousIds.size ||
        this.reduced ||
        forcePositions
      )
        return;
      const parent = parentId ? this.bodies.get(parentId) : undefined;
      const parentNode = parentId ? nodeById.get(parentId) : undefined;
      if (!parent || !parentNode) return;
      body.opening = {
        parent: parent.id,
        dx: body.x - parentNode.position.x - parent.offset.x,
        dy: body.y - parentNode.position.y - parent.offset.y,
        elapsed: 0,
      };
      body.x = parent.x;
      body.y = parent.y;
    };
    for (const id of ids) visit(id);
    // Connected members share external contacts; internal contacts relax softly.
    const owners = new Map([...ids].map((id) => [id, id]));
    const find = (id: string): string => {
      const parent = owners.get(id)!;
      if (parent === id) return id;
      const root = find(parent);
      owners.set(id, root);
      return root;
    };
    for (const link of next) owners.set(find(link.target), find(link.source));
    const groups = new Map<string, Body[]>();
    for (const body of this.bodies.values()) {
      const id = find(body.id);
      if (!groups.has(id)) groups.set(id, []);
      groups.get(id)!.push(body);
    }
    this.groups = [...groups.values()];
    this.groupIndex = new Map();
    this.groups.forEach((group, index) => {
      for (const body of group) this.groupIndex.set(body.id, index);
    });
    if (this.dragging) {
      const dragged = this.bodies.get(this.dragging);
      if (!dragged) {
        this.dragging = undefined;
        this.followers.clear();
        this.contactScale = 1;
      } else {
        const group = this.groups[this.groupIndex.get(this.dragging) ?? -1] ?? [
          dragged,
        ];
        const members = new Set(group.map((body) => body.id));
        const descendants = this.descendantIds(this.dragging);
        for (const id of this.followers.keys())
          if (!members.has(id)) this.followers.delete(id);
        for (const member of group)
          if (
            member !== dragged &&
            !member.pin &&
            !this.followers.has(member.id)
          )
            this.followers.set(member.id, {
              x: member.x - dragged.x,
              y: member.y - dragged.y,
              rate: descendants.has(member.id)
                ? FOLLOW_RATE_CHILD
                : FOLLOW_RATE,
            });
      }
    }
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
    this.wake();
  }
  unpin(id: string) {
    const b = this.bodies.get(id);
    if (b?.pin) {
      delete b.pin;
      this.wake();
    }
  }
  beginDrag(id: string) {
    const dragged = this.bodies.get(id);
    if (!dragged) return;
    this.dragging = id;
    this.contactScale = SOFT_CONTACT;
    this.followers.clear();
    const group = this.groups[this.groupIndex.get(id) ?? -1] ?? [dragged];
    const descendants = this.descendantIds(id);
    for (const member of group) {
      if (member === dragged || member.pin) continue;
      this.followers.set(member.id, {
        x: member.x - dragged.x,
        y: member.y - dragged.y,
        rate: descendants.has(member.id) ? FOLLOW_RATE_CHILD : FOLLOW_RATE,
      });
    }
    for (const body of this.bodies.values()) body.vx = body.vy = 0;
    this.wake();
  }
  private descendantIds(id: string) {
    const children = new Map<string, string[]>();
    for (const link of this.links) {
      if (!children.has(link.source)) children.set(link.source, []);
      children.get(link.source)!.push(link.target);
    }
    const result = new Set<string>();
    const stack = [id];
    while (stack.length) {
      for (const child of children.get(stack.pop()!) ?? []) {
        if (child === id || result.has(child)) continue;
        result.add(child);
        stack.push(child);
      }
    }
    return result;
  }
  drag(id: string, point: Point) {
    const b = this.bodies.get(id);
    if (!b) return;
    if (this.dragging !== id) this.beginDrag(id);
    const x = clamp(point.x) + b.offset.x,
      y = clamp(point.y) + b.offset.y;
    b.pin = { x, y };
    b.x = x;
    b.y = y;
    b.vx = b.vy = 0;
    delete b.opening;
    this.wake();
  }
  release(id: string) {
    if (this.dragging === id) {
      this.dragging = undefined;
      this.followers.clear();
    }
    this.unpin(id);
    this.wake();
  }
  positions(): Record<string, Point> {
    return Object.fromEntries(
      [...this.bodies.values()].map((b) => [
        b.id,
        { x: b.x - b.offset.x, y: b.y - b.offset.y },
      ]),
    );
  }
  private relaxInternalContacts(h: number) {
    // During a drag the soft volume permits overlap; after release the shared
    // contact scale grows back to full size and pushes every pair apart.
    const strength = 1 - Math.exp(-14 * h);
    let penetration = 0;
    for (const group of this.groups) {
      if (group.length < 2) continue;
      const cellSize = Math.max(...group.map((b) => b.radius)) * 2;
      const cells = new Map<string, number[]>();
      const coordinates = group.map((b, index) => {
        const x = Math.floor(b.x / cellSize),
          y = Math.floor(b.y / cellSize);
        const key = x + ":" + y;
        if (!cells.has(key)) cells.set(key, []);
        cells.get(key)!.push(index);
        return { x, y };
      });
      for (let i = 0; i < group.length; i++) {
        const a = group[i],
          cell = coordinates[i];
        if (a.opening) continue;
        for (let x = cell.x - 1; x <= cell.x + 1; x++)
          for (let y = cell.y - 1; y <= cell.y + 1; y++)
            for (const j of cells.get(x + ":" + y) ?? []) {
              if (j <= i) continue;
              const b = group[j];
              if (b.opening || (a.pin && b.pin)) continue;
              const dx = b.x - a.x,
                dy = b.y - a.y;
              const min =
                (a.radius + b.radius + CONTACT_GAP) * this.contactScale;
              if (dx * dx + dy * dy >= min * min) continue;
              const distance = Math.hypot(dx, dy);
              penetration = Math.max(penetration, min - distance);
              const nx =
                distance > 1e-6 ? dx / distance : Math.cos((i + j) * 2.39996);
              const ny =
                distance > 1e-6 ? dy / distance : Math.sin((i + j) * 2.39996);
              const correction =
                (min - distance) * strength * (a.pin || b.pin ? 1 : 0.5);
              if (!a.pin) {
                a.x -= nx * correction;
                a.y -= ny * correction;
              }
              if (!b.pin) {
                b.x += nx * correction;
                b.y += ny * correction;
              }
            }
      }
    }
    return penetration;
  }
  step(seconds: number) {
    if (!this.active) return false;
    const dt = Math.min(Math.max(seconds, 0), 1 / 30),
      steps = Math.max(1, Math.ceil(dt * 120)),
      h = dt / steps;
    if (!this.dragging) {
      if (this.reduced) this.contactScale = 1;
      else if (this.contactScale < 1)
        this.contactScale = Math.min(
          1,
          this.contactScale + (dt * (1 - SOFT_CONTACT)) / CONTACT_RAMP,
        );
    }
    const bodies = this.ordered;
    let internalPenetration = 0;
    const before = new Map(bodies.map((b) => [b.id, { x: b.x, y: b.y }]));
    const degrees = new Map<string, number>();
    for (const l of this.links) {
      degrees.set(l.source, (degrees.get(l.source) ?? 0) + 1);
      degrees.set(l.target, (degrees.get(l.target) ?? 0) + 1);
    }
    for (let step = 0; step < steps; step++) {
      const dragged = this.dragging
        ? this.bodies.get(this.dragging)
        : undefined;
      if (dragged?.pin) {
        dragged.x = dragged.pin.x;
        dragged.y = dragged.pin.y;
        dragged.vx = dragged.vy = 0;
      }
      for (const b of bodies) {
        if (b.pin) {
          b.x = b.pin.x;
          b.y = b.pin.y;
          b.vx = b.vy = 0;
          continue;
        }
        if (this.dragging) {
          const follower = this.followers.get(b.id);
          if (dragged && follower) {
            const k = 1 - Math.exp(-follower.rate * h);
            b.x += (dragged.x + follower.x - b.x) * k;
            b.y += (dragged.y + follower.y - b.y) * k;
          }
          b.vx = b.vy = 0;
          continue;
        }
        if (this.reduced) b.vx = b.vy = 0;
        b.vx *= Math.exp(-10 * h);
        b.vy *= Math.exp(-10 * h);
        b.x += b.vx * h;
        b.y += b.vy * h;
      }
      if (!this.dragging) {
        for (const l of this.links) {
          const a = this.bodies.get(l.source)!,
            b = this.bodies.get(l.target)!;
          if (a.opening || b.opening) continue;
          let dx = b.x - a.x,
            dy = b.y - a.y;
          const d = Math.hypot(dx, dy),
            rest =
              280 +
              Math.max(
                0,
                Math.sqrt(
                  Math.max(degrees.get(a.id) ?? 0, degrees.get(b.id) ?? 0),
                ) - 2,
              ) *
                90;
          if (d <= rest || !d) continue;
          const pull =
            Math.min(d - rest, 1800) *
            (1 - Math.exp(-(this.reduced ? 18 : 5) * h));
          dx = (dx / d) * pull;
          dy = (dy / d) * pull;
          const factor = !a.pin && !b.pin ? 0.5 : 1;
          if (!a.pin) {
            a.x += dx * (b.pin ? 1 : factor);
            a.y += dy * (b.pin ? 1 : factor);
          }
          if (!b.pin) {
            b.x -= dx * (a.pin ? 1 : factor);
            b.y -= dy * (a.pin ? 1 : factor);
          }
        }
        for (const b of bodies) {
          const opening = b.opening;
          if (!opening) continue;
          const parent = this.bodies.get(opening.parent);
          if (!parent) {
            delete b.opening;
            continue;
          }
          opening.elapsed += h;
          const progress = this.reduced
            ? 1
            : Math.min(1, opening.elapsed / 0.24);
          const eased = 1 - (1 - progress) ** 3;
          b.x = parent.x + opening.dx * eased;
          b.y = parent.y + opening.dy * eased;
          if (progress === 1) delete b.opening;
        }
        internalPenetration = this.relaxInternalContacts(h);
      } else {
        internalPenetration = 0;
      }
      for (let pass = 0; pass < 3; pass++) {
        const bounds = this.groups.map((group) => ({
          left: Math.min(...group.map((b) => b.x - b.radius)),
          right: Math.max(...group.map((b) => b.x + b.radius)),
          top: Math.min(...group.map((b) => b.y - b.radius)),
          bottom: Math.max(...group.map((b) => b.y + b.radius)),
          pinned: group.some((b) => !!b.pin),
        }));
        for (let i = 0; i < this.groups.length; i++)
          for (let j = i + 1; j < this.groups.length; j++) {
            const a = bounds[i],
              b = bounds[j];
            if (
              (a.pinned && b.pinned) ||
              a.right + 4 < b.left ||
              b.right + 4 < a.left ||
              a.bottom + 4 < b.top ||
              b.bottom + 4 < a.top
            )
              continue;
            let overlap = 0,
              nx = 0,
              ny = 0;
            for (const first of this.groups[i])
              for (const second of this.groups[j]) {
                const dx = second.x - first.x,
                  dy = second.y - first.y;
                const min =
                  (first.radius + second.radius + 4) * this.contactScale;
                if (Math.abs(dx) >= min || Math.abs(dy) >= min) continue;
                const distance = Math.hypot(dx, dy);
                if (min - distance <= overlap) continue;
                overlap = min - distance;
                nx =
                  distance > 1e-6 ? dx / distance : Math.cos((i + j) * 2.39996);
                ny =
                  distance > 1e-6 ? dy / distance : Math.sin((i + j) * 2.39996);
              }
            if (!overlap) continue;
            const share = a.pinned || b.pinned ? 1 : 0.5;
            const impulse =
              !pass &&
              !this.reduced &&
              !this.dragging &&
              this.contactScale >= 1 &&
              overlap > 2
                ? Math.min(8, overlap * 0.15)
                : 0;
            const move = (index: number, direction: number) => {
              const box = bounds[index];
              if (box.pinned) return;
              const dx = direction * nx * overlap * share,
                dy = direction * ny * overlap * share;
              for (const member of this.groups[index]) {
                member.x += dx;
                member.y += dy;
                member.vx += direction * nx * impulse;
                member.vy += direction * ny * impulse;
              }
              box.left += dx;
              box.right += dx;
              box.top += dy;
              box.bottom += dy;
            };
            move(i, -1);
            move(j, 1);
          }
      }
      for (const b of bodies)
        if (!b.pin) {
          b.x = clamp(b.x - b.offset.x) + b.offset.x;
          b.y = clamp(b.y - b.offset.y) + b.offset.y;
        }
    }
    const displacement = Math.max(
      0,
      ...bodies.map((b) =>
        Math.hypot(b.x - before.get(b.id)!.x, b.y - before.get(b.id)!.y),
      ),
    );
    const speed = Math.max(0, ...bodies.map((b) => Math.hypot(b.vx, b.vy)));
    this.quiet =
      (this.dragging ||
        (this.contactScale >= 1 && !bodies.some((b) => b.opening))) &&
      internalPenetration < 0.1 &&
      displacement < 0.035 &&
      speed < 0.2
        ? this.quiet + dt
        : 0;
    if (this.quiet > 0.22) {
      this.active = false;
      for (const b of bodies) b.vx = b.vy = 0;
    }
    return this.active;
  }
}
