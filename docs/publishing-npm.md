# 发布到 npm：不弹 2FA 的方案与插件市场影响

## 现状（2026-11-04）

- npm 上 `dsh-workspace-graph` 的 `latest` 是 **0.2.0**，由 GitHub Actions 受信任发布（OIDC）发布，带 SLSA provenance，npm 上的 `npmUser` 显示为 `GitHub Actions`。
- 仓库已登记受信任发布者：工作流 [`publish.yml`](../.github/workflows/publish.yml)、仓库 `qrxf/dsh-workspace-graph`，权限为 publish + stage publish。
- 日常发版不再需要本地 token，也不会弹 OTP；账号 2FA 只用于网页登录和一次性敏感操作。

## 先澄清一个前提

npm 不会因为“关掉账号 2FA”就变成免 2FA 发布：

- npm 正在把 2FA 变成发布写操作的硬要求，并逐步收窄“绕过 2FA”的凭证。
- 直接关闭账号 2FA 不能消除发布门槛，反而会让账号和包更容易被接管。

所以“不要 2FA”实际等于下面三种之一：**受信任发布（OIDC）**、**绕过 2FA 的 Granular Token**，或 **staged publishing（仍要 2FA 审批）**。

## 方案 A（推荐）：GitHub Actions 受信任发布

发布时由 GitHub Actions 用 OIDC 向 npm 换取短期凭证，**不需要 token，也不需要 OTP**。仓库里已经加好 [`.github/workflows/publish.yml`](../.github/workflows/publish.yml)，并在发布时附带 provenance 证明。

一次性配置（本仓库已于 2026-11-04 完成，无需重复）：

```sh
npm login
npm trust github dsh-workspace-graph --file publish.yml --repo qrxf/dsh-workspace-graph --allow-publish
```

命令会打开浏览器，让你做一次 2FA 确认。也可以在 npmjs.com 包设置里手动添加同样信息（组织/用户 `qrxf`、仓库 `dsh-workspace-graph`、工作流 `publish.yml`、环境留空）。配好之后发布不再需要 token 或 OTP。

日常发布：

```sh
npm version patch        # 更新 package.json / 打 tag
git push --follow-tags
```

推 `v*` tag 后工作流会跑类型检查、单测、构建，然后 `npm publish --provenance`。发布记录和 provenance 会出现在 npm 包页面上。

两个细节：

- 工作流实际发布的是 `package.json` 里的 `version`，tag 只负责触发，所以 tag 名要和版本号一致。
- 工作流也支持在 Actions 页面手动 `Run workflow`（用于补发当前分支的版本，0.2.0 就是这样补发的）。

## 方案 B（本地发布，不弹 OTP）

在 npmjs.com 创建 **Granular Access Token**，勾选 **Bypass two-factor authentication**，权限给 `dsh-workspace-graph` 的 Read and write，然后写入用户级 `.npmrc`：

```powershell
npm config set //registry.npmjs.org/:_authToken "<新 token>"
npm publish --access public
```

注意：

- 当前这个失效 token 可以先清掉：`npm config delete //registry.npmjs.org/:_authToken`。
- 按 npm 的公告，绕过 2FA 的 token 会逐步失去直发能力（官方目标是 2027 年 1 月），之后要改用 **stage-only token + `npm stage publish`**，由维护者用 2FA 审批，或者转到方案 A。
- token 只放在本机或 GitHub Secrets，不要提交进仓库。

## 方案 C：staged publishing

`npm stage publish` 把 tarball 放进待审队列，维护者在 npmjs.com 上点一次 2FA 批准后才对外可见。适合“不想给 CI 直发权限，但能接受每次发版点一下”的场景。npm 11.15.0+ 支持。

## 对插件市场有没有影响？

**没有影响。** 插件市场（dsh.so、awesome-dsh-plugin、Plugin Hub 等）都只读取**公开的 npm tarball 和 GitHub 仓库元数据**：

- dsh.so 的提交说明写明“检查对象恒为已发布的 tarball”，收录标准看的是 `dsh` 字段、README、许可证、包名规范和源码安全扫描。
- awesome-dsh-plugin 的条目直接链接 npm 包页和 GitHub README。
- 它们看不到也不关心你的发布凭证类型、是否开了 2FA。发布方式属于账号私有配置。

真正会影响市场的只有两件事：

1. **新版本有没有发到 npm。** 现在 npm 停在 0.1.2，市场展示的也是 0.1.2；如果改用“每次发版等 2FA 审批”的方案 C，新版本会晚一点出现在市场里，但不会消失。
2. **包的可见性和元数据。** 保持 public、保留 `repository` 字段和 `dsh` 字段，市场就能继续索引。

改用 OIDC 还有一个正向作用：`--provenance` 会给 npm 包生成构建来源证明，属于加分项。
