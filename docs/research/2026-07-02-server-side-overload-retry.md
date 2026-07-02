# Server-Side Capacity Retry

## Governing Split

Treat capacity errors as retryable only when the owner is the provider or a
shared service pool. Do not auto-retry entitlement, billing, hard quota, auth,
or validation failures.

| Class | Signals | Owner | Client action |
| --- | --- | --- | --- |
| Provider overload | `529`, `overloaded_error`, `503`, `ServiceUnavailable`, `high demand`, `capacity` | provider or upstream model pool | Retry with capped exponential backoff and jitter. |
| Shared-pool protective throttle | `429` with resource/capacity wording, effective limit below configured quota, pay-as-you-go resource unavailable | provider shared pool | Retry with `retry-after` backoff; optionally change model/region/provider. |
| Account/org throttle | `429` with explicit RPM/TPM/account/org language | account or org traffic shape | Back off, lower concurrency, reduce `max_tokens`, request quota increase. |
| Entitlement failure | `insufficient_quota`, billing/credit exhausted, plan/access denied, disabled org | user/account state | Do not retry automatically. Surface the fix. |
| Request failure | `400`, `401`, `403`, `413`, malformed input, invalid media, prompt too long | caller/request | Do not retry except existing request-shaping recovery paths. |

## External Signals

| Provider/system | Error shape | Non-entitlement evidence | Source |
| --- | --- | --- | --- |
| Anthropic API | `529 overloaded_error` | Temporary API overload; can happen during high traffic across all users. | [Anthropic API errors](https://platform.claude.com/docs/en/api/errors) |
| Claude Code | repeated `529` | Capacity is across all users; not a usage limit and does not count against quota. | [Claude Code error reference](https://code.claude.com/docs/en/errors) |
| Anthropic API | `429` acceleration limit | Sharp organization traffic ramp can trigger acceleration limiting even when spend entitlement is not the cause. | [Anthropic API errors](https://platform.claude.com/docs/en/api/errors) |
| Google Gemini Enterprise / Vertex-style pay-as-you-go | `429 Resource exhausted, please try again later.` | Without reserved throughput, unavailable resources can return 429; retry is allowed. | [Google Cloud 429](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/deploy/error-code-429) |
| Azure OpenAI / Foundry Standard | `429`, `System is experiencing high demand`, lower effective header limit | Standard deployments share a pool; the service can temporarily reduce effective limits for reliability while configured quota stays unchanged. | [Azure OpenAI quota](https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/quota) |
| Amazon Bedrock | `503 ServiceUnavailable` | AWS states high demand or temporary capacity constraints are not account-level quotas or rate limits. | [Bedrock API troubleshooting](https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html) |
| Amazon Bedrock | `429 ThrottlingException` | Account/model/region aggregate throttle across all callers, not one local process or user interaction. | [AWS Bedrock reliability](https://aws.amazon.com/blogs/machine-learning/optimize-your-applications-for-scale-and-reliability-on-amazon-bedrock/) |
| OpenRouter | upstream rate-limit or capacity error | Provider overload can surface after routing or streaming has begun; local key credits may be unrelated. | [OpenRouter errors](https://openrouter.ai/docs/api/reference/errors-and-debugging) |
| GitHub REST API | secondary rate limit | Secondary limits protect availability and can fire apart from the primary hourly bucket. | [GitHub REST rate limits](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api) |
| Cloudflare-fronted APIs | `429 Too Many Requests` | 429 can protect services from overload, traffic spikes, or abuse; it is not always a paid-plan boundary. | [Cloudflare 429](https://developers.cloudflare.com/support/troubleshooting/http-status-codes/4xx-client-error/error-429/) |
| Discord API | temporary Cloudflare restriction | Invalid-request threshold can restrict an IP even when the bot's normal global limit is not the issue. | [Discord rate limits](https://docs.discord.com/developers/topics/rate-limits) |

## Current Claude Code Shape

The v2.1.88 recovered source already separates several retry paths:

| Site | Behavior | Audit ref |
| --- | --- | --- |
| Foreground 529 allowlist | Main REPL, SDK, agent, compact, hook, verification, side-question, and selected classifier sources are allowed to retry 529; background sources fail closed to avoid amplification. | `reference/v2.1.88/sources/src/services/api/withRetry.ts#L57-L89` |
| Bounded retry | Default max retries is 10; 529 has a separate consecutive counter with `MAX_529_RETRIES = 3` before model fallback or repeated-overload surfacing. | `reference/v2.1.88/sources/src/services/api/withRetry.ts#L52-L55`, `#L326-L364` |
| Hidden persistent retry | `CLAUDE_CODE_UNATTENDED_RETRY` exists behind `feature('UNATTENDED_RETRY')`; it retries 429/529 with higher backoff and 30s keep-alive system messages. | `reference/v2.1.88/sources/src/services/api/withRetry.ts#L91-L109`, `#L367-L410` |
| Retry eligibility | Persistent mode bypasses subscriber gates and `x-should-retry`; overloaded streaming text is recognized even when the SDK loses the 529 status. | `reference/v2.1.88/sources/src/services/api/withRetry.ts#L696-L724` |
| Query-loop recoveries | Prompt-too-long, media-size, and max-output-token errors can be withheld, transformed, and retried inside the same query loop. | `reference/v2.1.88/sources/src/query.ts#L1178-L1265` |

Manual `continue` means the existing retry path has already yielded a visible
API error and returned control to the prompt input. A user-entered `continue`
creates a new turn; it is not the same as the original retry loop remaining
open.

## v2.1.197 Target Finding

The staged v2.1.197 bundle already contains the persistent retry branch. The
external bundle does not contain `CLAUDE_CODE_UNATTENDED_RETRY`; the reachable
gate is `CLAUDE_CODE_RETRY_WATCHDOG`.

| Item | Finding |
| --- | --- |
| Gate | `pRe()` returns `ct(process.env.CLAUDE_CODE_RETRY_WATCHDOG)`. |
| Capacity predicate | `cfc(error)` is `529 / overloaded_error OR 429`. |
| Foreground guard | 529 background-source drop is skipped when watchdog is enabled. |
| Repeated-529 guard | repeated 529 surfacing is skipped when watchdog is enabled. |
| Retry cap | `h > maxRetries` does not throw when `pRe() && cfc(error)`. |
| Backoff | persistent cap `sfc = 300000` (5 min), reset cap `jGo = 21600000` (6 hr), heartbeat chunk `Vuf = 30000` (30 sec). |
| UI path | retries yield `system/api_error`; SDK/TUI maps that to `api_retry` status rather than returning to prompt input. |

Local stub check against `staging/2.1.197/cli.patched.js`:

| Run | Env | Stub behavior | Result |
| --- | --- | --- | --- |
| Watchdog on | `CLAUDE_CODE_MAX_RETRIES=0`, `CLAUDE_CODE_RETRY_WATCHDOG=1` | first `/messages` returns 529, second succeeds | exit 0, two message requests, output `watchdog-ok`. |
| Watchdog off | `CLAUDE_CODE_MAX_RETRIES=0` | first `/messages` returns 529 | exit 1, one message request, visible `API Error: 529 ...`. |

## Automatic Retry Options

| Option | Patch surface | Good | Bad | Verdict |
| --- | --- | --- | --- | --- |
| External wrapper | Shell/TUI supervisor sends `continue` after matching `API Error: 529` | No bundle patch; can ship quickly | Brittle terminal automation; duplicates user input; hard to distinguish final errors | Diagnostic only. |
| Use existing watchdog | Set `CLAUDE_CODE_RETRY_WATCHDOG=1` | No patch; uses upstream-designed retry loop, backoff, abort handling, and keep-alive yield path | Retries 429 and 529; entitlement-like 429s can wait until reset/cap | Current practical answer. |
| Narrow watchdog patch | Add patched env gate for `529 / overloaded_error / provider 503` only | Avoids entitlement 429 retry risk | Needs locator work and provider-specific fixtures | Best patch direction if current watchdog is too broad. |
| Query-loop synthetic continue | After an API error message, append a meta user message such as `continue` and `continue` the state loop | Matches the manual workaround; can preserve visible context | Pollutes transcript; can repeat tool-result edges; easy to retry non-capacity failures | Avoid unless persistent retry cannot be patched. |
| Provider failover | On repeated 529/503/overload, switch model, route, region, or `ANTHROPIC_MODEL_BASE_URL_*` | Reduces wait during model-specific overload | Changes model behavior; requires configured alternatives | Optional supplement. |

## Preferred Patch Contract

Patch goal, if needed after using the existing watchdog: environment-gated
persistent retry for provider-capacity failures, not blanket retry for every
429.

| Requirement | Constraint |
| --- | --- |
| Opt-in | Require an env var, e.g. `PATCHED_CLAUDE_CODE_CAPACITY_RETRY=1`; default upstream behavior unchanged. |
| Error scope | Start with Anthropic 529 / `overloaded_error` and Bedrock-style 503. Add provider-specific 429 capacity patterns only after fixtures prove they are not entitlement failures. |
| Backoff | Reuse `getRetryDelay()` with jitter; honor `retry-after`; cap long waits. |
| Visibility | Yield retry countdown/attempt messages at a fixed heartbeat so the TUI does not look hung. |
| Abort | Preserve Ctrl-C / user interrupt behavior through the existing `AbortSignal`. |
| Anti-amplification | Keep the foreground-source allowlist; do not retry background summaries, titles, suggestions, or opportunistic classifiers. |
| Transcript | Do not add literal `continue` user messages. Retry in transport/query state, not conversational state. |
| Verification | Use a local stub that returns repeated 529/503 before success; run rendered PTY/TUI smoke, not only `--print`. |

## Open Patch Questions

| Question | Required check |
| --- | --- |
| Does current staged v2.1.197 compile `UNATTENDED_RETRY` out? | Answered: old env string absent; branch reachable through `CLAUDE_CODE_RETRY_WATCHDOG`. |
| Is the branch still reachable after minification? | Answered: `pRe()` + `cfc()` are present in `staging/2.1.197/cli.formatted.js`. |
| Should patched persistent mode include 429? | Start no: 429 mixes hard entitlement, org rate limit, shared-pool capacity, and subscription reset windows. Add only provider-specific capacity signatures. |
| How long should unattended waits last? | Use bounded default, e.g. 15-30 minutes; allow explicit env override for longer agent runs. |
| What should the user see? | One retry status line per heartbeat, not repeated API error blocks that force manual prompt input. |

## Decision

Automatic retry is already available in v2.1.197 through
`CLAUDE_CODE_RETRY_WATCHDOG=1`. The low-risk implementation is not to
synthesize the user's `continue` prompt. If the existing watchdog proves too
broad because it also persists through 429, add a narrower patch for
capacity-class errors only.
