# SDD ledger — plan: docs/superpowers/plans/2026-10-25-graph-layout-interaction-sol.md

起点 d0b8bd1，分支 feature/气泡手感优化。用户已明确“开始吧”，在同一聊天直接执行。

Ruling: 使用规范目录现有功能分支，不创建其他 worktree — AGENTS.md 明确限定所有开发目录，工作树起点无产品改动 — 成本是未另建隔离 checkout。

Pre-flight: 任务 1 的共享圆形几何被任务 3/4/5 使用；偏移统一为节点左上到圆心，物理与 SVG 同源。
Pre-flight: 任务 2 保留旧单值 current 字段兼容 fixtures，新增多值优先；任务 3 布局消费全 catalog。
Pre-flight: 任务 4/5 共享 drag(mode) 和 ropeState；先统一实现物理状态，再接 UI，避免两次替换模拟器。
Pre-flight: 任务 6 的 Repository 对外保持 revision 协议；位置写入只更新运行态 revision，持久设置 revision 独立检查。

Task 0: baseline — npm test 58/58, typecheck/build PASS；交互浏览器基线运行中，日志 artifacts/layout-interaction/baseline-browser.log。

Task 1: complete — 几何测试先缺模块失败后通过；浏览器所有方向与缩放端点误差 < 0.001px，截图 artifacts/layout-interaction/ropes.png。
Task 2: complete (unit/demo) — 多 mainView、running、pending、筛选与结束回归先失败后通过；runtime-layout-browser 验证并行当前节点。原生跨窗口 mainView 不推断为全局。
Task 3: complete — 径向树重排稳定、宽树/循环/缺失父节点测试通过，投影使用全目录几何；展开从父圆周外侧开始。
Task 4/5: complete — 先新增 free 模式/快速扫掠/硬化/部分恢复失败测试，再实现；19 个原有+新增物理场景、Ctrl/flex 浏览器通过。
Task 6: complete — 运行状态和旧持久数据迁移测试先失败后通过；页面重挂载保留、刷新默认、概括保留浏览器验证通过。

Ruling: 旧内部重叠与从中心出现断言改为扩大接触体后的无穿透和圆周起点 — 对应本轮要求 2/4/5，保留旧断言会强制实现已取消行为 — 视觉展开不再从完全重叠的中心开始。
Ruling: 使用时间步进的位置弹簧而非新增刚体依赖 — 保留原有轻量模拟方式与浏览器包体 — 惯性表现通过链式跟随和曲线形变表达。
Ruling: 密集星形的不可满足绳长允许由实际碰撞扩长 — 100 节点基准复现不休眠，新增测试先失败后通过 — 极密布局会保留更长的松绳。
Ruling: 垂直 SVG 路径的 Playwright 可见性判定宽度为零，改为等待真实 path 挂载并测量端点 — 有实际圆周测量兜底 — 不以 group boundingBox 作为线条是否绘出的依据。

验证进度：主 UI 10 组、rope/ctrl/flex/runtime、视角、边缘、生命周期通过；原生基本加载/重命名/导航通过，补充原生重启进行中。10/50/100 浏览器拖动平均 6.08/6.11/9.84ms，P95 6.3/6.2/18.2ms；静止稳定、可见重叠 0、pageerror 0。当前单元 70/70。

Final review: gpt-6-astra 单次只读审查，3 Important、0 Critical、0 Minor；均以独立 Node 实验复现。
Final: fixed 隐藏节点首次展开不继承父位移 — tree-layout first expansion 与未分组用例 RED→GREEN；完整目录预初始化，新增节点按最近已移动祖先修正坐标，浏览器首次展开回归通过。
Final: fixed 另一窗口设置更新阻断运行坐标保存 — runtime-layout in-flight patch RED→GREEN；纯运行补丁不受持久设置 revision 冲突影响，持久设置仍拒绝陈旧覆盖；双窗口拖动浏览器通过。
Final: fixed Ctrl 碰撞通过其他组绳子间接带动节点 — drag-modes separate component RED→GREEN；free 交互与其碰撞恢复期间停用所有绳子牵引，实际碰撞仍逐个解算。
Final: Ruling: 不将本窗口 mainView 计数描述为其他窗口焦点 — 宿主声明保留信息是 Client 本地且不持久化，原生测试以真实会话引用证明集合读取 — 跨窗口焦点仍无全局数据来源。
Final: Ruling: 原生空会话不能 fork，报告原生分支验证限制 — 宿主返回 fork-unavailable / no completed turn，未追加真实模型请求 — 分支层级由纯模型和完整浏览器夹具验证。
Final: Ruling: 留在现有功能分支供本地审阅，不执行提交/合并/发布 — 已批准计划限定本地结果，没有请求分支集成 — 用户需自行决定后续发布。

Task 7: final verification — 单元 73/73、typecheck/build、完整主 UI 10 组、rope/ctrl/flex/runtime/hidden/hierarchy/interaction/summary/lifecycle、真实原生多 mainView/重命名/导航/Ctrl/重启验证。最终结果以 docs/verification-2026-10-25-layout-interaction.md 及 artifacts/layout-interaction 为准。
