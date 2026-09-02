// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{on,FC}from"./chunk-aqwdkmxp.js";import{yT,a}from"./chunk-m9gbfvns.js";import{LAe}from"./chunk-7r196x4z.js";import{Qe,yt,mc,Ut,YC,x,Lnr}from"./chunk-1e5y3pjf.js";import{ed,Kl}from"./chunk-5x6q7pkz.js";import{ti,Fs}from"./chunk-7vg4ympq.js";import{fa}from"./chunk-hfcaj05m.js";import{TC}from"./chunk-3hp42qjv.js";import{NQn}from"./chunk-0fwe5049.js";import{_t}from"./chunk-b9f47e9z.js";var Yo="Grep";function $mn(e){if(ed(e))return`Content search built on ripgrep. Prefer this over \`grep\`/\`rg\` via ${Qe} \u2014 results integrate with the permission UI and file links.

- Full regex syntax (e.g. "log.*Error", "function\\s+\\w+"). Ripgrep, not grep \u2014 escape literal braces (\`interface\\{\\}\`).
- Filter with \`glob\` (e.g. "**/*.tsx") or \`type\` (e.g. "js", "py", "rust").
- \`output_mode\`: "content" (matching lines), "files_with_matches" (paths only, default), or "count".
- \`multiline: true\` for patterns that span lines.`;return`A powerful search tool built on ripgrep

  Usage:
  - ALWAYS use ${Yo} for search tasks. NEVER invoke \`grep\` or \`rg\` as a ${Qe} command. The ${Yo} tool has been optimized for correct permissions and access.
  - Supports full regex syntax (e.g., "log.*Error", "function\\s+\\w+")
  - Filter files with glob parameter (e.g., "*.js", "**/*.tsx") or type parameter (e.g., "js", "py", "rust")
  - Output modes: "content" shows matching lines, "files_with_matches" shows only file paths (default), "count" shows match counts
${YC()==="default"?`  - Use ${_t} tool (if available) for open-ended searches requiring multiple rounds
`:""}  - Pattern syntax: Uses ripgrep (not grep) - literal braces need escaping (use \`interface\\{\\}\` to find \`interface{}\` in Go code)
  - Multiline matching: By default patterns match within single lines only. For cross-line patterns like \`struct \\{[\\s\\S]*?field\`, use \`multiline: true\`
`}class EM{#e=new Map;get(e){return this.#e.get(e)}has(e){return this.#e.has(e)}set(e,t){this.#e.set(e,t)}release(e){let t=this.#e.get(e);if(t===void 0)return!1;return t.clearAllTimers(),this.#e.delete(e),!0}}var Aht="repl-registered";function sJn(){return a.CLAUDE_REPL_VARIANT}var Nj="main";function vht(e,t){return e.get(EM).has(t??Nj)}function e_(){if(!yT())return!1;if(a.CLAUDE_CODE_REPL===!1)return!1;if(a.CLAUDE_CODE_REPL===!0)return!0;let e=a.CLAUDE_CODE_ENTRYPOINT;if(e==="cli"||e==="remote")return x("tengu_slate_harbor",!1);return!1}function Mmn(){return!1}function pne(){return!1}function M9(e){if(!vL(e))return e;let t=e.filter((r)=>r.isMcp!==!0||r.mcpInfo?.isAuthStub===!0);return t.length===e.length?e:t}function vL(e){return pne()&&e.some((t)=>t.isMcp!==!0&&on(t,Fs))}var J5e=new Set([yt,ti,Yo,Qe,Ut,mc]);var nv="EnterWorktree";var o=import.meta.require("./chunk-gxz1dh1m.js").BRIEF_TOOL_NAME,n=`Fetches full schema definitions for deferred tools so they can be called.

Deferred tools appear by name in <system-reminder> messages.`,i=" Until fetched, only the name is known \u2014 there is no parameter schema, so the tool cannot be invoked.",s=` Until fetched, only the name is known \u2014 there is no parameter schema, so calling the tool fails with InputValidationError. When any instruction, system reminder, or other tool's description names a deferred tool, fetch it with query "select:<name>" before calling it.`,l=` This tool takes a query, matches it against the deferred tool list, and returns the matched tools' complete JSONSchema definitions inside a <functions> block. Once a tool's schema appears in that result, it is callable exactly like any tool defined at the top of the prompt.

Result format: each matched tool appears as one <function>{"description": "...", "name": "...", "parameters": {...}}</function> line inside the <functions> block \u2014 the same encoding as the tool list at the top of this prompt.

Query forms:
- "select:Read,Edit,Grep" \u2014 fetch these exact tools by name
- "notebook jupyter" \u2014 keyword search, up to max_results best matches
- "+slack send" \u2014 require "slack" in the name, rank by remaining terms`;function AM(e){if(e.alwaysLoad===!0)return!1;if(FC(e,NQn()))return!1;if(e.isMcp===!0)return!pne();if(e.name===Kl)return!1;if(e.name===_t){if(import.meta.require("./chunk-d19x7m24.js").isForkSubagentEnabled())return!1}if(e.name===o)return!1;if(e.name===TC&&LAe())return!1;if(e.name===fa)return!1;if(e.name===nv&&a.CLAUDE_CODE_SESSION_KIND==="bg")return!1;return e.shouldDefer===!0}function Omn(e){return e.name}function Q2t(){return n+(Lnr()?s:i)+l}
export{Yo,$mn,EM,Aht,sJn,Nj,vht,e_,Mmn,pne,M9,vL,J5e,nv,AM,Omn,Q2t};
