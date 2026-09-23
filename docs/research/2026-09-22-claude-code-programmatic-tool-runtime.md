# Claude Code Programmatic Tool Runtime

## Governing Split

Anthropic moved programmatic tool calling forward at the Claude API layer.
The public Claude Code CLI also shipped a hidden local implementation in
v2.1.108 and every sampled artifact through v2.1.273, but v2.1.278 no longer
contains its executable runtime.

The hidden CLI tool was not limited to an internal binary.
The public v2.1.108 and v2.1.273 artifacts register the REPL in the normal tool
pool, and `CLAUDE_CODE_REPL=1` makes its `isEnabled()` gate return true.
Default activation remained behind an unpublicized feature flag.

| Surface | Code host | Can call harness tools | Public status on 2026-09-22 |
| --- | --- | --- | --- |
| Claude API programmatic tool calling | Anthropic code-execution container | Yes, for tools whose schema opts into code execution | Documented API feature |
| DeepSeek Harness PTC | Local Harness child runtime | Yes, through generated TypeScript bindings and a parent RPC bridge | Open-source implementation |
| Claude Code REPL, sampled v2.1.108–v2.1.273 | Local Node VM inside Claude Code | Yes, through wrappers around active built-in and MCP tools | Shipped in public artifacts; hidden env/feature gate, no release-note announcement |
| Claude Code v2.1.278 | No public code host found | Residual REPL event handling only | No reachable local PTC implementation found |
| Experimental `CSharp` tool | Fresh local `.NET` file-based app | No; separate opt-in tool alongside Bash | Repository experiment |

The safe conclusion is limited to the inspected public artifacts.
An internal Anthropic build may still inject the REPL implementation or a
successor that is absent from the public native graph.

## Finding

The answer to “did newer Claude Code go further in this direction?” is split:

- The Claude platform did: the API now has an explicit programmatic tool
  calling protocol hosted by code execution.
- Public Claude Code did ship a functional local implementation, but not as a
  documented or supported user-facing product.
- The first consecutive release boundary found is v2.1.107 absent and v2.1.108
  present.
- Between the inspected v2.1.273 and v2.1.278 public graphs, the hidden local
  REPL payload appears to have been compiled out or moved elsewhere.
- v2.1.278 preserves enough REPL-shaped data types to read old transcripts and
  report progress, but those residues are not an execution engine.

This is stronger than “the feature is undocumented,” but weaker than
“Anthropic deleted it everywhere.”

## Evidence Boundary

The comparison used official release artifacts rather than search-engine
snippets.
The latest version inspected was
[Claude Code v2.1.278](https://github.com/anthropics/claude-code/releases/tag/v2.1.278),
published on 2026-09-19.
Its release notes do not announce a REPL, code tool, or programmatic tool
calling feature.

The v2.1.278 artifact was staged with:

```sh
TARGET_SOURCE=canonical just stage 2.1.278
```

The embedded-resource audit reported two unrelated extraction gaps after the
native graphs had been extracted.
The string census below therefore applies specifically to the extracted public
`linux-x64` graph, not to a successfully certified target bump.

| Runtime marker | v2.1.273 public graph | v2.1.278 public Linux graph |
| --- | --- | --- |
| REPL tool prompt describing JavaScript plus programmatic tool access | Present | Absent |
| Persistent-variable and replay instructions | Present | Absent |
| `repl-tool-code.js` VM filename | Present | Absent |
| `repl-inner-call` execution source | Present | Absent |
| VM poison/reset handling | Present | Absent |
| Dynamic `registerTool` implementation | Present | Absent |
| `CLAUDE_CODE_REPL` | Behavioral gate | Registry declaration only |
| `repl_tool_call` progress shape | Present | Present |
| `eval_registered` label | Runtime plus telemetry | Telemetry/compatibility residue |
| API PTC markers such as `allowed_callers` and `code_execution_20260120` | Absent | Absent |

The v2.1.278 `name: "REPL"` hit belongs to serialization of
`repl_tool_call` progress as tool progress.
It does not define a tool.
Likewise, `run_code` belongs to a bundled Claude Test browser-tool deny name,
not a general code-execution tool.

## Public Artifact Lifecycle

The version census used extracted official Linux artifacts.
Presence required an executable cluster, not one generic `REPL` string:
`repl-tool-code.js`, the dynamic `registerTool` implementation, the REPL tool
prompt, and a live tool-pool reference.

| Boundary artifact | Native build time | Official Linux artifact SHA-256 |
| --- | --- | --- |
| v2.1.107 | 2026-04-14 04:25:18Z | `8abe3909c55b3afafa8939d28c2cc2fcf73ba9424a46b4f435bbadda7e0eb00d` |
| v2.1.108 | 2026-04-14 17:24:14Z | `1f641676eb086ceafd76a5f51ffb260b948fa1f6d77991d8cd6e480267dfff37` |

| Version | Public artifact finding | Interpretation |
| --- | --- | --- |
| v2.1.88 | Env gate and filtering scaffolding present; the REPL tool binding is constant `null`; VM/runtime markers absent | Public JS build cannot activate the tool |
| v2.1.100 | Runtime and gate markers absent | No public runtime |
| [v2.1.107](https://github.com/anthropics/claude-code/releases/tag/v2.1.107) | Runtime and gate markers absent | Last confirmed release before introduction |
| [v2.1.108](https://github.com/anthropics/claude-code/releases/tag/v2.1.108) | VM, tool wrappers, dynamic registration, tool-pool entry, and `CLAUDE_CODE_REPL` gate present | First confirmed public artifact with a reachable hidden runtime |
| Sampled v2.1.133 and v2.1.156 | Core runtime remains; later poison/reset diagnostics absent | Early runtime generation |
| Sampled v2.1.206–v2.1.273 | Poison/reset handling and replay diagnostics present | Hardened runtime generation |
| v2.1.278 | Executable cluster absent; compatibility/telemetry residues remain | Runtime compiled out or moved elsewhere |

v2.1.108 was published on 2026-04-14.
Its release notes describe unrelated cache, recap, UI, and reliability changes;
they do not mention REPL, programmatic tool calling, or code execution.

The v2.1.108 gate is reachable in the public artifact:

| Check | Public artifact behavior |
| --- | --- |
| Runtime capability predicate | Constant true |
| `CLAUDE_CODE_REPL=0` | Disable |
| `CLAUDE_CODE_REPL=1` | Enable |
| No explicit env value in CLI/remote | Consult hidden `tengu_slate_harbor` feature flag |
| Tool registration | REPL object appears directly in the ordinary tool array |
| REPL mode filtering | Direct Read, Glob, Grep, Bash, and notebook tools move behind the REPL facade |

The recovered v2.1.88 source map still explains the authored internal
boundary:

| Source-map evidence | Audit reference | Meaning |
| --- | --- | --- |
| Conditional import | `reference/v2.1.88/sources/src/tools.ts#L16-L20` | Source loads `REPLTool` only for `USER_TYPE === 'ant'`. |
| Conditional registration | `reference/v2.1.88/sources/src/tools.ts#L232-L232` | Source adds it only for an `ant` build. |
| Runtime gate | `reference/v2.1.88/sources/src/tools/REPLTool/constants.ts#L11-L31` | Internal interactive CLI defaults on; SDK entrypoints do not. |

That source map cannot establish public reachability by itself.
The v2.1.88 public bundle proves dead-code elimination; the v2.1.108 public
artifact proves that Anthropic later changed the shipped boundary.

## Local REPL Mechanism

The public v2.1.108 and sampled later artifacts supply the runtime detail:

```text
model emits REPL JavaScript
  -> persistent Node VM evaluates the program
  -> generated wrappers validate each inner call
  -> PreToolUse hook and permission decision run
  -> the normal tool implementation executes
  -> PostToolUse and progress events run
  -> structured results return to the JavaScript program
  -> only the program's final result returns to the model
```

Important properties included:

- wrappers for active built-in tools and MCP tools;
- bounded parallel calls through ordinary JavaScript promises;
- persistent VM state with replay/hydration after context reconstruction;
- virtual transcript messages for inner calls;
- permission and hook enforcement at the inner-call boundary;
- dynamically registered tools under an `eval_registered__*` namespace;
- separate script-time and wall-clock accounting so tool latency does not
  consume the entire evaluation budget.

This is close in spirit to PTC, but its execution host is a local Node VM and
its bridge calls Claude Code's existing dispatcher directly.

## DeepSeek Harness and Claude API

DeepSeek Harness exposes the architecture explicitly.
Its tool presentation can be native, PTC, or both; PTC presents a `run_code`
tool and generates typed bindings for callable tools.
The child program sends tool calls back to the parent runtime, which retains
permission checks, hooks, concurrency limits, parent/child identifiers, and
durable logs.

Claude API PTC uses a different host boundary.
A tool opts in with `allowed_callers`, Claude emits a code-execution program,
and the hosted container pauses when that program calls an opted-in tool.
The client executes the requested tool and returns its result so the container
can resume.
Intermediate tool results remain outside the model context unless the program
prints or returns them.

| Property | DeepSeek Harness | Claude API PTC | Claude Code local REPL |
| --- | --- | --- | --- |
| Program language | TypeScript/JavaScript | Python | JavaScript |
| Program host | Harness child runtime | Anthropic container | In-process Node VM |
| Tool bridge | Child-to-parent RPC | API pause/resume protocol | Direct wrapper into local dispatcher |
| Local built-ins | Yes | Only if the client exposes equivalents | Yes |
| Permission owner | Harness parent | Client/tool implementation | Claude Code inner wrapper |
| Context reduction | Program returns selected output | Intermediate results excluded by protocol | Program composes inner results before returning |

Primary sources:

- [DeepSeek Harness repository](https://github.com/deepseek-ai/deepseek-harness)
- [DeepSeek PTC runtime design](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/subsystems/ptc-runtime.md)
- [DeepSeek PTC tool implementation](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/core/tools/src/ptc.ts)
- [DeepSeek generated TypeScript bindings](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/core/tools/src/ts-types.ts)
- [Claude API programmatic tool calling](https://platform.claude.com/docs/en/agents-and-tools/tool-use/programmatic-tool-calling)

## Implications for the C# Experiment

The initial Bash replacement proved that Claude can author useful managed
programs, including programs with `#:package` dependencies.
The experiment now registers a separate opt-in `CSharp` tool alongside Bash;
the optional Bash-to-Nushell shell substitution remains independent.
It does not provide PTC because the C# child has no path back into Claude
Code's active tool dispatcher.

A real C# PTC experiment needs a dedicated tool and a bidirectional bridge:

```text
C# program
  -> JSON request over a dedicated pipe
  -> Claude Code parent resolves named tool
  -> schema validation, permission, hooks, and tool call
  -> JSON response over the same pipe
  -> C# program continues
```

The earlier Bash substitution was the wrong recursion boundary:
calling Bash from C# would have launched another C# program, not a shell command.
The standalone `CSharp` tool fixes that naming and recursion hazard, but still
has no dispatcher bridge; a future bridge must explicitly reject calls to itself.

| Direction | Advantage | Main risk | Assessment |
| --- | --- | --- | --- |
| Restore the removed public REPL payload | Existing dispatcher seam is proven | Latest public graph lacks the runtime; patch would be large and fragile | Poor durable base |
| Build a C# parent/child bridge at the dispatcher | Native local tools, permissions, and hooks remain authoritative | Requires a new protocol and careful cancellation/reentrancy handling | Best local POC direction |
| Use Claude API PTC | Supported protocol and context savings | Hosted Python cannot directly inherit Claude Code's local tools | Complement, not replacement |
| Keep C# as a standalone tool without a bridge | Small and entertaining | No inner tools; no context savings | Runtime-language experiment only |

The first C# bridge should expose only read-oriented tools such as Read, Glob,
and Grep.
It should preserve parent tool-use IDs, run the same permission/hook path as a
direct call, cap concurrent inner calls, stream progress, and record every
inner call as a virtual transcript event.
Write/Edit/Bash/MCP can follow only after cancellation and permission behavior
is proven in a rendered TUI run.

## Open Questions

| Question | Status |
| --- | --- |
| Which release first omitted the REPL payload after v2.1.273? | Not bisected. |
| Is the runtime still shipped in an internal `ant` graph? | Unknown; public artifacts cannot answer this. |
| Is `CLAUDE_CODE_REPL` reserved for a future public return? | Unknown; v2.1.278 registers the name but contains no consumer found by the census. |
| Can the current dispatcher be patched without copying private recovered implementation? | Likely, but it requires a separate locator and original bridge implementation. |
| Should the child SDK be generated from active tool schemas? | Yes for a durable POC; hand-written bindings would drift across MCP and version changes. |

## Decision

Treat v2.1.108 as the first confirmed public artifact of a functional hidden
Claude Code PTC product, not merely dead internal source.
Do not treat it as a supported user feature: it was unannounced, gated, and
later removed from the inspected public artifact.
Treat it as evidence that Claude Code's permissioned dispatcher can support
inner programmatic calls.

For a future experiment, add an original, environment-gated bridge to the
standalone `CSharp` tool against that dispatcher contract rather than extending
Bash or copying the removed REPL runtime.
