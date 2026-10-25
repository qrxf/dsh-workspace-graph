# 气泡布局与柔性拖动修正 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.
> 执行者：sol。实现及本地构建已完成。用户随后授权在本聊天实施；完成情况见 [验证报告](../../verification-2026-10-25-layout-interaction.md)，未验证项目保留未勾选。

**Goal:** 修正连线、树状网状布局、向外展开、并行工作可见性、Ctrl 自由拖动、碰撞尺寸、柔性回位和启动布局重置。

**Architecture:** 沿用原生 DSH 数据和 React Flow；统一圆形几何，使用确定性的径向树布局生成初始位置，再用弹簧、阻尼和碰撞维持交互。当前会话改为集合；位置与视角改为本次应用运行内的状态，主题和内容设置继续持久保存。

**Tech Stack:** TypeScript、React 18、@xyflow/react 12.12.0、现有 PhysicsWorld、Node test、Playwright、原生 DSH 隔离测试。

**Spec:** 本文“需求与实施默认值”，来源为用户本轮七项要求。标为“建议”的数值与语义是计划假设，不代表用户已经指定。

## Global Constraints

- 唯一开发、测试、构建和打包目录：`D:\Project\dsh-workspace-graph`。旧目录仅是备份。
- 拖动仅改变展示位置；不得改变目录、工作区、会话归属或分支关系。
- 保留现有原生 hooks 的显式 selector 和原生导航入口。
- 保留主题、手动概括、置顶、使用记录、筛选和减少动态设置。
- 不恢复已移除的环绕摘要，不在普通拖动、展开、收起、分页时自动移动视角。
- 此计划覆盖旧文档中相冲突的“跨重启保存坐标”“仅一个当前会话”“拖动暂停内部碰撞”“固定向上生成分支”的规则。
- 实施时检查当前 checkout 与用户改动，保留无关更改；本轮需求没有要求发布、部署或改动真实用户 profile。

## 需求与实施默认值

| 用户要求 | 实施定义与验收 |
| --- | --- |
| 1. 连线与气泡正确连接 | 端点落在 `.wg-orb` 圆周，不落在含标题的节点盒边界。拖动、缩放、展开时连续跟随；父子关系不变。 |
| 2.1 树结构、网状分布 | 保留真实工作区目录树、会话归属、会话分支；使用径向树/扇区布局让枝条向四周分散，多棵树留有间隔。不人为添加网格边或跨工作区关联。 |
| 2.2 小气泡优先向外弹出 | 根据父节点相对其祖先/树中心的外向方向分配扇区；空位不足再扩大半径。会话从父圆周向外出现，避免先穿过父气泡或向树中心堆积。 |
| 3. 并行工作全部显示 | 默认图谱同时保留所有宿主 mainView 当前会话，以及所有 running 或 pending 的会话及祖先连接链；工作区标识聚合所有成员。运行中与当前是不同状态。建议上述活动集合越过折叠、分页、近期、搜索、类型和范围筛选，并以“活动会话保留显示”解释例外。 |
| 4. Ctrl 自由拖动，保留碰撞 | 普通拖动继续柔性牵引相连节点；Ctrl 拖动解除被抓节点的绳长/形状限制，其他节点仅因实际碰撞避让，不因该拖动整簇跟随。支持拖动中按下/松开 Ctrl，转换不跳位；松手后保留新布局。 |
| 5. 拖动碰撞体增加 0.25 倍 | 按现有有效接触距离乘 1.25 解释，不放大画面圆球。当前拖动态系数 0.86，调整为 1.075。建议静止系数也乘 1.25，达到 1.25，避免松手后碰撞体反而缩小。同组、跨组和空间索引使用同一尺寸规则。 |
| 6. 拖动柔软，停止后渐硬并大致恢复 | 建议恢复拖动前的相对树形，保留整体拖到的新位置；不是把整个工作区拉回屏幕旧坐标。“停止”包含按住鼠标不再移动及松手。柔软→渐硬约 1.2 秒；建议保留约 20% 的局部变形，碰撞优先于形状恢复。Ctrl 的自由重排不强制回旧形状。 |
| 7. 每次开启应用恢复默认位置 | 建议把浏览器刷新/新页面启动、插件重新初始化作为新一轮启动；同一次运行切换图谱面板不重置。所有工作区及其会话重新生成默认位置，视角首次适配；旧位置和视角不自动恢复，其他设置保留。 |

第 3 项宿主数据限制：当前代码只取 `retainedBy.mainView > 0` 的第一条；应收集全部。该字段能否覆盖“其他窗口中的当前会话”必须在原生宿主核实，不得用 demo 推断跨窗口能力。空工作区若没有会话，仍显示工作区锚点；不能据此编造当前状态。

方案取舍：建议“径向树初始布局 + 有结构约束的柔性物理”。纯自由力导向容易让层级混乱，固定网格无法满足外向树形和软绳拖动；不引入新的图布局或物理依赖。

## 当前代码依据（2026-10-25 只读检查）

- 起点提交：`d0b8bd1`；检查时 `git status --short` 为空。执行前重新检查，不能假定未发生变化。
- `src/GraphPage.tsx`：Bubble 的 Handle 固定在上下；边使用 `type: "straight"`；拖动事件没有读取 Ctrl。
- `src/physics.ts`：圆心偏移为 `(72,53)` / `(72,37)`，半径 53 / 37；拖动将同组成员追向固定偏移，暂停内部碰撞，且没有绳子硬度渐变和形状恢复目标。
- `src/model.ts`：根工作区三列网格、子工作区右下排布、普通会话黄金角环绕、分支固定向上，四种规则没有统一树空间规划。
- `src/adapter.ts`：用 `.find()` 获取唯一 `currentSessionId`；`src/model.ts` 只强制保留该条，其他运行会话可能被折叠、分页或筛选隐藏。
- `src/layout.ts` 与 GraphPage：位置/视角保存在 localStorage，进入图谱会恢复；`src/client.tsx` 在插件 apply 时创建 Repository，可作为本次运行状态的持有者。
- 上述是源码证据和风险定位；本轮没有复现用户画面，不把候选原因当成全部根因。

## 文件与接口分工

| 文件 | 责任 |
| --- | --- |
| 新建 `src/geometry.ts` | `bubbleGeometry(kind): { offset: Point; radius: number }`；`circleEndpoints(a: Circle, b: Circle): { source: Point; target: Point }`，`Circle = Point & { radius: number }`。几何唯一来源。 |
| 新建 `src/treeLayout.ts` | `defaultTreePositions(catalog: GraphCatalog): Record<string, Point>`；完整目录上确定默认位置，不依赖可见列表顺序；返回 React Flow 左上坐标。 |
| 新建 `src/RopeEdge.tsx` | 自定义圆周端点与柔性曲线；消费实时节点坐标与物理 link 状态，避免渲染坐标滞后。 |
| `src/types.ts`、`src/adapter.ts` | 增加 `currentSessionIds: string[]`；迁移内部调用，必要时短期保留旧字段用于兼容 fixtures，不用单值决定可见性。 |
| `src/model.ts` | 全量默认布局、活动保留集合、祖先链和真实边投影。 |
| `src/physics.ts` | 共享几何、弹簧、恢复目标、两种拖动模式、持续碰撞与休眠。 |
| `src/useGraphPhysics.ts`、`src/GraphPage.tsx` | 输入状态、Ctrl 切换、实时绳子绘制、生命周期收尾、视角与文案。 |
| `src/layout.ts`、`src/client.tsx`、`src/demo.tsx` | 持久设置与运行内布局分离；demo 与 native 使用同一重置语义。 |
| `tests/*`、`README.md`、新验证报告 | 回归、原生证据与用户说明。 |

## Review Focus

1. 当前会话只在 byId、不在 ids；多个并行会话被不同筛选或分页隐藏 → 任务 2。
2. 多层工作区和分支、异常 parentId、输入数组重排 → 任务 3。
3. 高速拖动穿透、Ctrl 中途切换、窗口失焦/取消输入 → 任务 4。
4. 元数据刷新与展开收起打断回弹、减少动态效果、静止仍持续 RAF → 任务 5。
5. 旧持久坐标、多窗口设置更新、页面重挂载与真正重启的区别 → 任务 6。

## 执行清单（按顺序）

### 任务 0：建立可比较基线

- [x] 在规范目录读取 AGENTS.md、检查 `git status --short` 和当前版本；保存本轮新增改动范围。
- [x] 执行 `npm test`、`npm run typecheck`、`npm run build`，记录真实结果；历史报告中的测试数量不当成本轮结果。
- [ ] 旧版同机浏览器/帧时间基线未取得：沙箱 Edge 启动失败；当前版全部相关回归已在隔离浏览器执行。旧行为的源码与 58 项单元基线有记录。
- [x] 后续每个任务先写对应失败测试、确认失败原因，再实现和复测；不要删除旧测试以掩盖非预期回归。

### 任务 1：统一几何并修正连线（需求 1）

**文件：** 新建 geometry.ts、RopeEdge.tsx、tests/geometry.test.ts、tests/rope-edge-browser.mjs；修改 GraphPage.tsx、physics.ts、styles.css。

- [x] 编写几何失败测试：横向、纵向、斜向、不同圆半径、同心和近重合；端点到各圆心距离等于半径，误差 `< 1e-6`，所有数值有限。
- [x] 建立共享几何；核对 `.wg-orb` 实际尺寸、边框和 hover 缩放，不把标题高度计入物理半径。处理重合时方向退化，不产生 NaN。
- [x] 自定义 edge 使用同一帧两个节点的圆心和圆半径裁切端点。保留 React Flow 必需的句柄注册，移除对固定上下 Handle 坐标的视觉依赖；不得因缺失 Handle 导致整条边不渲染。
- [x] 浏览器检查：工作区边、会话边、分支边在多方向拖动和 0.5/1/2 倍缩放时，SVG 路径端点到可见圆周的屏幕误差 `≤ 2px`。使用 SVG 坐标变换测量，不能只检查 edge DOM 存在。
- [x] 执行 `node --test tests/geometry.test.ts`、`node tests/rope-edge-browser.mjs`、类型检查；保存截图与断言结果。

### 任务 2：保留全部并行活动节点（需求 3）

**文件：** types.ts、adapter.ts、model.ts、demo.tsx、tests/adapter.test.ts、tests/visibility.test.ts、tests/native.mjs。

- [x] 添加失败测试：至少 3 个工作区、2 个 mainView 会话（其中一个只在 byId）、另一个后台 running、一个 pending；全部活动会话可见，且只有 mainView 成员标记“当前”。
- [x] 收集全部 `currentSessionIds`，从 ids 与当前保留 ID 并集读取会话；不把所有未列出的 byId 缓存项都作为有效会话加入。
- [x] 在 projectGraph 中计算活动必显集合，合并普通候选并稳定去重；补齐工作区和分支祖先。全部工作区锚点保留；计数不得重复，筛选匹配数与例外显示数分清。
- [x] 测试折叠、分页超额、近期/搜索/状态/范围/类型筛选、活动结束、归档、断线未知。活动结束且不再 current 后恢复普通筛选；不要将 pending 转成 running，断线不要保留过期运行事实。
- [x] 在真实隔离 DSH 核对并行宿主快照、current 来源及节点展示；分别报告同窗口和跨窗口能力，无法提供快照的情形写明限制。
- [x] 执行 `node --test tests/adapter.test.ts tests/visibility.test.ts` 和原生对应回归，记录与 demo 验证的区别。

### 任务 3：径向树布局与向外展开（需求 2.1、2.2）

**文件：** 新建 treeLayout.ts、tests/tree-layout.test.ts；修改 model.ts、physics.ts、tests/hierarchy.test.ts、tests/hierarchy-browser.mjs。

- [x] 添加失败测试：多根、三级嵌套工作区、多级 fork、宽分支、空工作区、未分组、缺失父节点及循环父节点。相同 ID/拓扑即使输入重排也生成相同默认位置。
- [x] 复用 hierarchy.ts 的真实 parent 解析，将每个连通树按子树占用大小分配角扇区和半径；按稳定 ID 排序。多根按子树边界留出间隔，不再固定每组三列/每个分支朝上。
- [x] 使用完整 catalog 计算默认位置，再投影可见集，防止筛选、分页和状态刷新改变已有节点位置；新增节点只分配缺失位置，手动重置或新应用启动才全量重排。
- [x] 新子气泡优先在父节点外侧的空闲方向出现；以圆周附近为动画起点，目标优先满足 `(child-parent)·(parent-ancestor) > 0`。根节点使用稳定扇区方向，空间不足扩大半径。
- [x] 约 240ms 的展开动画沿外向目标推进；参与碰撞，避免直接禁用全部内部碰撞。减少动态效果直接进入无明显重叠的终态。
- [x] 执行 `node --test tests/tree-layout.test.ts tests/hierarchy.test.ts`、`node tests/hierarchy-browser.mjs`；更新旧“分支必须在上方”的测试为真实来源连接及外向分布断言。

### 任务 4：Ctrl 自由拖动与扩大碰撞（需求 4、5）

**文件：** physics.ts、useGraphPhysics.ts、GraphPage.tsx、tests/physics.test.ts；新建 tests/ctrl-drag-browser.mjs。

**接口：** 导出 `DragMode = "elastic" | "free"`；`PhysicsWorld.drag(id: string, point: Point, mode: DragMode = "elastic"): void`；hook 对外 drag 使用同一参数，release 继续接收 id。

- [x] 添加失败测试：普通拖动可以传递牵引；free 模式无接触时其他节点不跟随，有接触时同组与跨组都避让；被抓节点跟随指针。
- [x] 用事件 ctrlKey 与拖动期间键盘状态驱动模式；支持指针不动时按键切换。清理 keyup、blur、pointercancel、卸载状态；禁止 Ctrl 拖动误触点击展开、导航或多选。
- [x] 移除“拖动时暂停内部碰撞”逻辑。free 模式对被抓节点断开牵引和组刚性约束，保留碰撞及真实拓扑；切换回 elastic 时以切换瞬间姿态重新建立基准，避免跳回。
- [x] 统一有效接触距离：当前拖动阈值乘 `1.25`，即系数 `1.075`；建议静止目标 `1.25`。保留组内 2px、组间 4px 基础间距并一起按原公式缩放。网格大小、AABB 粗筛和精细检测同步使用扩大后的半径，避免漏检。
- [x] 高速指针移动采用扫掠检测或按位移细分碰撞路径，限制单步穿透；建议碰撞解算后残余穿透 `≤ 1px`，同时检查可见球体没有明显重叠。
- [x] 执行 `node --test tests/physics.test.ts`、`node tests/ctrl-drag-browser.mjs`；覆盖两种球尺寸、组内/组外、嵌套组、来回切 Ctrl、按键松开与窗口失焦。

### 任务 5：软绳牵引、停止渐硬与部分恢复（需求 6）

**文件：** physics.ts、useGraphPhysics.ts、RopeEdge.tsx、tests/physics.test.ts、tests/flex-drag-browser.mjs、tests/physics-benchmark.ts。

**状态契约：** 每条真实边维护 restLength、restVector、stiffness；每次拖动记录局部基准。提供 `ropeState(source: string, target: string): { softness: number; stretch: number }` 给边渲染；softness 范围 0..1。渲染状态随物理帧更新，不使用持久布局坐标。

- [x] 添加失败测试：链式树末端比近端滞后；快速转向能产生形变；停止后硬度单调升高、误差下降；碰撞阻挡时不强行恢复到重叠位置；最终能够休眠。
- [x] 替换“整簇追向被拖节点固定偏移”为沿真实父子边传递的弹簧和阻尼；按时间步计算，参数集中定义，限制极端时间步和位移，避免帧率影响手感。
- [x] 建议指针停止输入约 120ms 后启动 1.2s 的平滑硬化；松手立即进入该过程，重新移动则平滑变软。不要只在 release 才检测停止。
- [x] 普通拖动结束后保留整体平移，以 `0.8 * 拖动前相对向量 + 0.2 * 停止时相对向量` 建议值形成恢复目标；从当前姿态渐进收敛，碰撞优先。free 拖动的终态作为新局部基准，之后普通拖动不跳回旧形状。
- [x] 绳子渲染使用圆周端点、有限弯曲和软硬状态：拖动时有柔和弯曲/滞后，停止后逐渐趋稳，端点始终贴圆；不对端点单独做延迟插值。
- [x] 对齐休眠判定：硬化完成、没有展开动画、速度/位移及穿透达标后停止 RAF；减少动态模式直接收敛，不保留持续抖动。元数据刷新不覆盖运行坐标；节点删除或收起清理旧约束。
- [x] 执行 `npm run test:flex`、`node --test tests/physics.test.ts`、`node tests/physics-benchmark.ts`；在 30/60/120Hz 模拟时间步验证无发散，报告恢复比例、稳定耗时和残余穿透，不能只凭截图宣称“柔软”。

### 任务 6：应用启动重置位置，运行内保留布局（需求 7）

**文件：** layout.ts、client.tsx、demo.tsx、GraphPage.tsx、tests/layout.test.ts、tests/lifecycle-browser.mjs、tests/bubbles-browser.mjs。

**接口：** LayoutRepository 继续提供 `load()` / `savePatch()` / `initializePositions()`；内部新增实例级运行状态保存 positions 和各 scope viewport。同一插件 apply 创建的 repository 实例跨 GraphPage 重挂载复用，新实例清空运行布局。

- [x] 添加失败测试：预置旧持久坐标及视角，创建新 Repository 后不恢复它们；同一实例保存/重读仍得到刚拖动的位置；新实例恢复确定性默认；设置值不丢失。
- [x] 将 positions 与 viewport 写入本次运行状态；持久存储继续保留修订号与设置/筛选，迁移时忽略旧位置和视角，禁止调用会清空全部设置的 reset 作为启动方案。
- [x] 保持设置的修订号、写入队列与冲突保护；运行内位置修改不引发其他窗口的布局覆盖或“保存冲突”。storage 事件合并持久设置时保留本窗口运行坐标。
- [x] 首次 ready 且节点尺寸可用时执行一次适配视野；普通面板切换继续使用当前运行内位置和视角。清理旧 defaultViewport 恢复路径，避免启动后旧视角把默认树移到屏幕外。
- [x] 手动重置、撤销、隐藏子节点随父移动、导出功能使用当前运行状态；更新“已保存”等提示，明确位置只在本次运行保留。
- [x] 执行 `node --test tests/layout.test.ts`、`node tests/lifecycle-browser.mjs`；浏览器覆盖刷新、关闭重新打开、面板重挂载、双窗口设置变更、坏存储、不可用存储，验证主题/概括/置顶不丢失。

### 任务 7：整体验收与交付给用户

- [x] 更新 README 的拖动、Ctrl、布局恢复和活动节点可见性说明；创建 `docs/verification-2026-10-25-layout-interaction.md`，逐项记录七个问题的证据。
- [x] 执行完整单元测试、类型检查和构建，然后按以下 PowerShell 命令验证；命令各占一行，不把缺失录屏依赖误判为功能失败。

```powershell
Set-Location 'D:\Project\dsh-workspace-graph'
npm test
npm run typecheck
npm run build
$env:BROWSER_CHANNEL = 'msedge'
$env:WG_SKIP_VIDEO = '1'
npm run test:browser
npm run test:flex
node tests/rope-edge-browser.mjs
node tests/ctrl-drag-browser.mjs
node tests/hierarchy-browser.mjs
node tests/interaction-regressions.mjs
node tests/summary-edge-browser.mjs
node tests/lifecycle-browser.mjs
npm run test:performance
npm run test:native
git diff --check
```

- [x] 浏览器产物保存到 `artifacts/layout-interaction/`（按需让各测试支持同一输出目录）；记录原始状态、Ctrl 模式、停止后约 120/600/1200ms、最终静止、应用重启的截图/测量。无视频时用连续截图与数值，不宣称已经录屏验证。
- [x] 10/50/100 可见节点测量真实拖动帧时间、展开时间、静止后 RAF/写入停止情况，与任务 0 同机基线比较；不能把纯物理计算耗时当整体 UI 性能。
- [ ] 原生动态加载、工作区层级、双 mainView 引用、导航、重启已验证；空会话不能原生 fork，未发起真实模型并行运行。分支 UI 在浏览器夹具验证，跨窗口焦点完整性未验证，详见报告边界。
- [x] 最终汇报逐项列出完成状态、测试结果和限制；检查差异仅覆盖必要文件。代码留在规范目录供审阅，不自动发布或覆盖用户实际安装。

## 完成判定

所有任务勾选且七项用户验收都有对应证据，才能称实现完成。文档已写、单元通过、demo 通过、原生通过是四种不同状态。当前实现、独立审查修复和本地验证已完成；未勾选条目是明确记录的验证边界，不代表已取得其证据。
