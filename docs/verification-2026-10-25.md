# 本地实施与验证 — 2026-10-25

项目 `dsh-workspace-graph`，分支 `feat/workspace-graph`，基点 `f98932f`。复用原 React/React Flow、宿主数据事件和带修订号的本地存储，没有增加运行依赖。初始只有 `.vs/` 未跟踪，原样保留；未提交、合并、推送、安装到实际 profile、发布或部署。

实际修改根目录：`C:\Users\zengfeng\Documents\Codex\2026-10-24\deepseek-2\outputs\dsh-workspace-graph`。本轮聊天目录为 `C:\Users\zengfeng\Documents\Codex\2026-10-25\new-chat-3`；原始源码/测试备份在本轮 `work/baseline`。

## 已实现与实际文件

| 内容 | 实际位置 |
| --- | --- |
| 初始折叠、独立展开集合、当前常驻、去重、状态多选并集、锚点 | src/types.ts、src/model.ts、src/GraphPage.tsx |
| 实际当前会话与运行事实（包括 byId 中的当前子代理） | src/adapter.ts，现有 src/client.tsx 的 useSessions/useSessionStatus |
| 主题派生、合法 HEX、预设、恢复、深浅层级、工作中/当前独立标识 | src/theme.ts、src/ThemeControls.tsx、src/styles.css |
| 绳长松弛、连接牵引、尺寸碰撞、有限回弹、阻尼休眠、边界、静止/退出清理 | src/physics.ts、src/useGraphPhysics.ts |
| 7 天活动、30 天使用窗口、30 分钟去重、观察不足、置顶 | src/activity.ts、src/model.ts、src/layout.ts、src/GraphPage.tsx |
| Unicode 字符簇、顶部起点、45 秒顺时针、文字正立、静态全文、焦点、减少动态 | src/ring.ts、src/SummaryRing.tsx、src/styles.css |
| 手动概括、提供方契约、来源、缓存/合并/超时/版本失效/乱序保护 | src/summary.ts、src/SummaryEditor.tsx、src/GraphPage.tsx |
| 现有设置、旧数据迁移与损坏回退 | src/layout.ts |
| 演示、密度样本、退出/重入控制；本地客户端构建 | src/demo.tsx、dist/client.js、dist/build-meta.json |
| 执行清单、过程、插件调查 | docs/superpowers/plans/、docs/summary-provider-research.md |

## 验证结果

基线为 15/15 单元、类型和构建通过；默认 Playwright Chromium 缺失、受限启动 Edge 退出，随后以已安装系统 Edge 完成实测。这两项是环境启动问题，未算作新功能失败。

最终检查：

- `npm test`：40/40。
- `npm run typecheck`、`npm run build`：通过；本地生成约 257 KiB 客户端，不发布。
- `npm run test:browser`：11 组真实 UI 回归通过，包括层级/切换、多状态、绳子牵引、主题、概括与转环、长摘要边缘、分类/去重、重启恢复、键盘/小窗口、归档恢复和损坏存储；页面错误 0。
- `node tests/summary-edge-browser.mjs`：长摘要原来 x=-33、bottom=1048，修正后 x=12、bottom=988，画布底边 1000，完整卡片可见。
- `node tests/lifecycle-browser.mjs`：键盘 Enter/Space 展开收起；活动物理循环退出前 RAF/timeout/interval 各 1，卸载后各 0，重新进入为折叠态，无页面错误。
- `npm run test:native`：隔离 DSH_HOME 的真实宿主加载、工作区快照、重命名、新建会话导航通过，无页面错误。未使用真实用户会话或模型凭据。
- `git diff --check`：通过。
- 一次独立只读审查的 3 项重要问题均已由失败回归复现后修正；另两项因违反版本失效和频率分类要求而升级处理。无剩余审查 Minor。

## 性能（本机实测）

Windows x64，Intel i7-13650HX，20 逻辑核心，Node24.21.0，Edge156.0.4314.42，无头 1440×1000。浏览器测量在实际展开、拖动和布局运动中取约 2 秒 rAF 帧间隔；不能作为其他设备、宿主负载或前台显示刷新率的保证。

| 可见节点 | 浏览器平均帧间隔 | 浏览器 P95 | 物理平均每步 | 物理 P95 |
| --- | ---: | ---: | ---: | ---: |
| 10 | 6.10 ms | 6.20 ms | 0.110 ms | 0.414 ms |
| 50 | 8.50 ms | 17.70 ms | 0.327 ms | 0.770 ms |
| 100 | 11.73 ms | 30.10 ms | 1.285 ms | 2.498 ms |

三种规模均在样本中发生真实运动，停止后布局稳定且不再写入，气泡圆形最大重叠 0，页面错误 0；物理基准的 active 状态全部变为 false。原始 JSON 在 artifacts/physics-performance.json、artifacts/browser-performance.json。

## 决策和剩余限制

1. 当前聊天目录为空，经搜索确认唯一匹配项目后复用上述 checkout；保留原分支和 `.vs/`。风险是若用户原意为另一个未提供路径的副本，仍需在该副本应用；本报告明确实际修改位置。
2. 按已给清单和本次明确实施要求执行，没有重建项目或另开设计审批。展开仅在本次页面生命周期保留；重新进入折叠。工作区筛选只筛会话，锚点始终存在；异常重复归属按第一个真实工作区去重。
3. 频率从本版本观察开始，且只统计图谱主动打开。悬停/刷新/自动恢复不计数；未满 30 天且不足常用门槛为“积累中”，充分观察后零访问可成为“不常用”。无法补出此前历史或原生侧栏人工打开次数。
4. 真实工作中来自宿主 running，完成/失败/取消清除工作中；宿主公开列表未提供三种终态原因，图谱不伪造原因标签。取消、失败、断线/重连的适配器与聚合逻辑有合成输入回归，尚未执行带真实模型运行的完整生命周期检查。
5. 自动摘要社区插件仍待接入。已经调查候选作者仓库，但未证明目标版本的兼容读取通道、权限与具体费用；当前交付为手动概括、标题回退和可替换提供方。没有额外模型调用或外发正文。详情见 [调查](summary-provider-research.md)。
6. 自动调整摘要边缘视野时给予 600 ms 指针迁移宽限，其余默认 200 ms 显示/150 ms 隐藏、45 秒旋转集中于 ring.ts。普通实现参数依据实际界面选择；运行、当前、展开状态独立。
7. 跨窗口修订号/冲突和旧数据保护的既有单元回归仍通过，但没有穷举所有多窗口并发输入时序；只对目标 0.2.1-rc.2 Web 宿主作实测。

本地截图与录屏在 artifacts/bubbles/。交付副本放在本轮聊天 outputs/，报告外链指向作者仓库只用于调查证据。

## 追加验证：柔性拖动与碰撞恢复

按用户要求把拖动改为柔性跟随，并在松手后扩大碰撞体直到完全分开；实现说明见 [气泡交互修正](bubble-fixes-2026-10-25.md#柔性拖动与碰撞体积恢复)。

- `npm test`：58/58，新增弹性跟随、子气泡更软、松手后碰撞比例恢复、完全分离和静止休眠回归。
- `npm run typecheck`、`npm run build`、`git diff --check`：通过；本地客户端构建已更新。
- `npm run test:browser`：10 组真实 UI 回归通过；拖动后立即保存位置。
- `npm run test:flex`：拖动中最大重叠约 7.2 px；松手后 120 ms 约 6 px、600 ms 约 2 px、静止后 0 px；子气泡使用更软的跟随并带滞后，页面错误 0。截图在 artifacts/flex-drag/。
- `node tests/hierarchy-browser.mjs`、`node tests/interaction-regressions.mjs`、`node tests/lifecycle-browser.mjs`：通过。
- `npm run test:performance`：10/50/100 节点均发生真实拖动、无页面错误；100 节点拖动采样平均帧间隔约 8.8 ms、P95 18.1 ms（同机无头 Edge，非通用保证）。
- `node tests/physics-benchmark.ts`：10/50/100 节点全部休眠，最大重叠 0。

本轮同机无头 Edge 156 环境与上文相同。未发布、未提交、未修改真实用户 profile。
