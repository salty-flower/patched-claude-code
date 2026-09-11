# 运行与维护测试

## 版本局部证据与行为契约

Patch TOML 保存 minified locator、replacement 和当前／旧符号断言。
TypeScript 行为测试必须选择当前 target 和 platform 的 active entry；不得因找不到实现而回退到旧版本。
使用 `tools/test/helpers/patch-contract.ts` 的 `activePatch` 检查选择唯一性，
使用 `captureIdentifier` 从 repo-authored snippet 的语义位置取得依赖名称。
外部依赖可以 stub；被验证的逻辑必须执行真实 replacement 或 transform，不能在测试内复制一份实现。

| 验证内容 | 执行位置 |
| --- | --- |
| 当前 replacement 是否完整写入、旧符号是否移除 | `just patch-test <version>`，逐 entry、逐 platform 执行 TOML 断言 |
| `/later` 和 effort 的行为、边界输入、状态优先级 | 当前 active-entry TypeScript tests |
| 原生 helper 的语义和实际调用链 | rendered bundle + localhost API stub／PTY；snippet tests 不能替代此层 |
| 历史 scheduler API | `tools/test/historic/later-command-legacy.test.ts`；不作为当前版本的证据 |
| 跨版本 prompt review | 历史 catalog 使用其记录的 ruleset；当前 catalog 必须使用当前 ruleset |

一个 static test 同时声明 `assert_contains` 和 `assert_not_contains` 时，两条都必须通过。
同一个 test 的 Darwin 命中不能满足 Linux 断言。
平台中立断言必须在两个 graph 上分别通过；缺少 graph 或 active entry 没有 tests 必须失败。

## 避免反复重跑

完整 suite 仍逐文件使用独立 Bun 进程、串行执行重测试，避免 bundle 内存累积和 render 争用。
默认执行完所有文件并汇总文件名、耗时和退出码；任一文件失败，suite 返回非零。
只需定位首次失败时，显式使用 `--fail-fast`。

```sh
just tool-test
bun tools/test/run-suite.ts --fail-fast
bun tools/test/run-suite.ts tools/test/model-effort-session.test.ts tools/test/later-command-patch.test.ts
TZ=America/New_York bun test tools/test/later-command-patch.test.ts
```

指定文件的路径相对当前工作目录解析。
局部重跑用于诊断，不能代替提交前完整 suite 或 [release admission](../rules/Releases.md)。
当前 `/later` snippet tests 不再自行 render 双图；完整 patch tests 和 PTY matrix 分别验证字节应用与真实交互。

## 防止测试给出错误结论

- 环境：测试拥有凭据来源，启动子进程前清除调用者 auth variables；不要把继承环境导致的失败归因于 sandbox。
- 时间：传入固定时钟与受控 timer，保持“同一毫秒”“未来非法日期”“DST gap”等反例可重复。
- Catalog：历史版本仍须通过 schema、manifest、ruleset 自校验、内容 hash 和版本检查；不能借兼容历史数据放松当前 catalog 校验。
- 失败汇总：保留完整输出；后续成功文件不得把整个 suite 的退出状态改成成功。

本次未改造 obligation receipt 的 oracle 报告协议，也未增加共享 render cache。
逐 oracle 的实际执行回执仍需独立收敛；不能把当前文件级退出状态解释成新增的逐 oracle 执行证明。
