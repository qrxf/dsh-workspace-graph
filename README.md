# 工作区图谱 · Workspace Atlas

DeepSeek Harness 原生插件，用可拖动的气泡管理工作区与会话。左下角选择工作区和筛选条件，右侧查看详情并执行原生操作。

![工作区图谱演示](docs/screenshots/workspace-atlas.png)

## 安装

已验证的目标版本：DeepSeek Harness **0.2.1-rc.2**，Web 界面。Harness 仍处于预览阶段，其他版本可能需要适配。安装到实际使用的 profile；以下示例使用 web：

~~~powershell
npx @deepseek-ai/dsh plugin --profile web add github:qrxf/dsh-workspace-graph
~~~

安装后，在 Harness 侧栏点击 **工作区图谱**。如果当前配置未开启插件热重载，重启对应的 Harness 实例。

仓库包含构建产物，安装不需要自行编译。插件本身没有运行时 npm 依赖，也不需要额外的 API 密钥。

## 使用

- 大气泡为工作区，小气泡为会话，线条表示真实所属关系。
- 拖动气泡调整位置；拖动背景平移，滚轮缩放；顶部可适应画布、重排并撤销。
- 左下角选择工作区，按状态、类型和归档情况筛选；顶部搜索工作区名称、路径或会话标题。
- 单击查看详情，双击打开；详情提供新建会话、工作区重命名、会话归档和恢复。
- 默认隐藏空白会话、子代理会话和归档会话。每个工作区先显示 20 个会话，可在详情中继续展开。
- 运行中会话的归档遵循 Harness 限制；本插件不自动停止正在进行的工作。

拖拽只改变图谱位置，不移动文件、不改变工作目录或会话所属。插件不读取会话正文，不调用模型。

## 布局保存

位置、折叠状态、筛选及视角保存于当前浏览器的本地存储；使用稳定的原生对象 ID 区分同名对象。

布局不会自动同步至其他浏览器或设备。同一浏览器来源使用独立命名空间；不同 profile 的工作区 ID 保持各自身份，但“全部”视角和筛选可能共用浏览器偏好。

现代浏览器使用 Web Locks 协调写入，并以修订号拒绝旧窗口覆盖新布局。另一个窗口更新后会同步位置，检测到冲突时提示重新载入。存储被禁用、已满或损坏时显示未保存提示；可以导出当前布局或保存原文，并显式重置本地布局。导出用于备份，首版暂未提供导入功能。

## 开发与验证

Node.js 22.19+（项目实际验证使用 Node 24）。

~~~sh
npm ci
npm test
npm run typecheck
npm run build
npm run demo
~~~

独立演示使用清楚标注的示例数据，与插件共用同一个界面。浏览器测试自行启动临时演示服务：

~~~sh
npx playwright install chromium
npm run test:browser
~~~

真实宿主集成测试使用临时 DSH_HOME、合成工作区及独立端口，不使用真实用户的会话或密钥。先设置 DSH_CLI 为已安装 dsh 的 lib/bin.js，再执行：

~~~sh
npm run test:native
~~~

测试覆盖：所属关系、状态优先级、过滤后的坐标保留、归档显示、分批展开、损坏存储、保存冲突、拖拽后刷新、筛选、搜索和恢复会话。完整验证记录见 [docs/verification.md](docs/verification.md)。

## 结构

~~~text
src/client.tsx       Harness 原生页面与侧栏入口
src/adapter.ts       原生工作区/会话快照转换
src/model.ts         图谱投影、所属关系与筛选
src/layout.ts        浏览器布局存储、校验与冲突处理
src/GraphPage.tsx    画布、筛选面板与详情
src/styles.css      深蓝气泡界面
src/host.ts          无 Host 侧行为的入口
scripts/build.mjs   ModuleLoader 客户端打包
~~~

React、ReactDOM 使用宿主提供的实例；React Flow 随客户端打包。没有增加模型工具、自动任务或文件系统操作。禁用插件时注册项与样式随生命周期移除。

## License

MIT。随客户端打包的第三方许可见 dist/THIRD_PARTY_LICENSES.txt。

A native draggable workspace/session graph for DeepSeek Harness. Browser-local layout persistence, bottom-left filters, search, and native navigation. Tested target: DSH 0.2.1-rc.2. No extra model calls or API key required.
