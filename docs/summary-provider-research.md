# 短概括提供方调查 — 2026-10-25

目标为 DeepSeek Harness 0.2.1-rc.2；本次只调查和建立替换接口，没有安装社区插件、读取真实会话正文、输入凭据或调用模型。

本项目已有的 SessionSummary 是标题、活动时间和运行状态等列表元数据，不是自然语言内容概括。宿主公开的 SessionProjectionMap 可扩展，但目前依赖里没有已声明的短概括字段。不能把未知 projection key 当成接口。

| 候选 | 作者仓库中可核实的用途 | 数据与成本 | 当前结论 |
| --- | --- | --- | --- |
| [haitang1/dsh-memory](https://github.com/haitang1/dsh-memory) | 自动生成每会话 rollout 文件并汇总持久记忆；README 记录 0.2.0-rc.2 验证 | 会话文本交给所配置模型；按模型产生费用，无已核实固定价格 | 尚未核实目标 0.2.1-rc.2 上可按会话 ID/version 读取短概括的客户端接口；不自动安装 |
| [yindf/taskfold](https://github.com/yindf/taskfold) | 为具名任务折叠完成片段，保留原文召回 | 会话内上下文工具；不等同于工作区导航摘要 | 没有核实能读取完整会话短概括的兼容接口，不能直接接入 |
| [clouwer/dsh-memsearch](https://github.com/clouwer/dsh-memsearch) | 每轮写本地日志并建立语义索引 | 默认不必调用模型；可选 summarizePlugin 依赖模型配置 | 本地日志/检索不能直接冒充每会话短概括服务；兼容性与读接口仍待核实 |

实现位于 src/summary.ts，GraphPage 接受可选 SummaryProvider。read 只接收 sessionId、内容版本和 AbortSignal；未来适配器必须返回匹配的 sessionId/version/text。没有提供方时不发请求。UI 不提供随意输入外部端点的入口。

优先级为手动概括 > 有效提供方摘要 > 原标题 > 未命名对话；标题明确显示“原标题”。仅把文本交给 React 渲染。缓存按会话与可靠活动版本；未知活动版本不请求；同一请求合并，删除/版本更换取消旧请求，2.5 秒超时回退，组件离开后结果不更新界面。没有后台批量模型任务。

真实接入剩余条件：确定用户已有的兼容插件与版本，证明授权的读取通道、内容版本语义及权限；确认是否使用既有摘要还是额外调用模型，以及实际模型费用。在这些事实成立前，交付的是适配器契约与回退，不宣称完成自动概括。
