// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{on,Bk}from"./chunk-vb9my8xr.js";import{SR,a}from"./chunk-w3k8bej2.js";import{LAe}from"./chunk-seset5dr.js";import{Qe,_t,mc,Bt,Jk,I,Mnr}from"./chunk-bsdtxcdc.js";import{td,Kl}from"./chunk-p33zayst.js";import{ti,$s}from"./chunk-y30v0ja7.js";import{pa}from"./chunk-7f6rqxc5.js";import{vk}from"./chunk-973nayqb.js";import{JQn}from"./chunk-1f0sbqbn.js";import{yt}from"./chunk-k8vt31j7.js";var Xo="Grep";function gmn(e){if(td(e))return`Content search built on ripgrep. Prefer this over \`grep\`/\`rg\` via ${Qe} \u2014 results integrate with the permission UI and file links.

- Full regex syntax (e.g. "log.*Error", "function\\s+\\w+"). Ripgrep, not grep \u2014 escape literal braces (\`interface\\{\\}\`).
- Filter with \`glob\` (e.g. "**/*.tsx") or \`type\` (e.g. "js", "py", "rust").
- \`output_mode\`: "content" (matching lines), "files_with_matches" (paths only, default), or "count".
- \`multiline: true\` for patterns that span lines.`;return`A powerful search tool built on ripgrep

  Usage:
  - ALWAYS use ${Xo} for search tasks. NEVER invoke \`grep\` or \`rg\` as a ${Qe} command. The ${Xo} tool has been optimized for correct permissions and access.
  - Supports full regex syntax (e.g., "log.*Error", "function\\s+\\w+")
  - Filter files with glob parameter (e.g., "*.js", "**/*.tsx") or type parameter (e.g., "js", "py", "rust")
  - Output modes: "content" shows matching lines, "files_with_matches" shows only file paths (default), "count" shows match counts
${Jk()==="default"?`  - Use ${yt} tool (if available) for open-ended searches requiring multiple rounds
`:""}  - Pattern syntax: Uses ripgrep (not grep) - literal braces need escaping (use \`interface\\{\\}\` to find \`interface{}\` in Go code)
  - Multiline matching: By default patterns match within single lines only. For cross-line patterns like \`struct \\{[\\s\\S]*?field\`, use \`multiline: true\`
`}class wM{#e=new Map;get(e){return this.#e.get(e)}has(e){return this.#e.has(e)}set(e,t){this.#e.set(e,t)}release(e){let t=this.#e.get(e);if(t===void 0)return!1;return t.clearAllTimers(),this.#e.delete(e),!0}}var lht="repl-registered";function PXn(){return a.CLAUDE_REPL_VARIANT}var $2="main";function cht(e,t){return e.get(wM).has(t??$2)}function ty(){if(!SR())return!1;if(a.CLAUDE_CODE_REPL===!1)return!1;if(a.CLAUDE_CODE_REPL===!0)return!0;let e=a.CLAUDE_CODE_ENTRYPOINT;if(e==="cli"||e==="remote")return I("tengu_slate_harbor",!1);return!1}function hmn(){return!1}function mne(){return!1}function Dz(e){if(!CI(e))return e;let t=e.filter((r)=>r.isMcp!==!0||r.mcpInfo?.isAuthStub===!0);return t.length===e.length?e:t}function CI(e){return mne()&&e.some((t)=>t.isMcp!==!0&&on(t,$s))}var OVe=new Set([_t,ti,Xo,Qe,Bt,mc]);var rC="EnterWorktree";var o=import.meta.require("./chunk-9pk6ggp8.js").BRIEF_TOOL_NAME,n=`Fetches full schema definitions for deferred tools so they can be called.

Deferred tools appear by name in <system-reminder> messages.`,i=" Until fetched, only the name is known \u2014 there is no parameter schema, so the tool cannot be invoked.",s=` Until fetched, only the name is known \u2014 there is no parameter schema, so calling the tool fails with InputValidationError. When any instruction, system reminder, or other tool's description names a deferred tool, fetch it with query "select:<name>" before calling it.`,l=` This tool takes a query, matches it against the deferred tool list, and returns the matched tools' complete JSONSchema definitions inside a <functions> block. Once a tool's schema appears in that result, it is callable exactly like any tool defined at the top of the prompt.

Result format: each matched tool appears as one <function>{"description": "...", "name": "...", "parameters": {...}}</function> line inside the <functions> block \u2014 the same encoding as the tool list at the top of this prompt.

Query forms:
- "select:Read,Edit,Grep" \u2014 fetch these exact tools by name
- "notebook jupyter" \u2014 keyword search, up to max_results best matches
- "+slack send" \u2014 require "slack" in the name, rank by remaining terms`;function TM(e){if(e.alwaysLoad===!0)return!1;if(Bk(e,JQn()))return!1;if(e.isMcp===!0)return!mne();if(e.name===Kl)return!1;if(e.name===yt){if(import.meta.require("./chunk-sg92hft4.js").isForkSubagentEnabled())return!1}if(e.name===o)return!1;if(e.name===vk&&LAe())return!1;if(e.name===pa)return!1;if(e.name===rC&&a.CLAUDE_CODE_SESSION_KIND==="bg")return!1;return e.shouldDefer===!0}function _mn(e){return e.name}function L6t(){return n+(Mnr()?s:i)+l}
export{Xo,gmn,wM,lht,PXn,$2,cht,ty,hmn,mne,Dz,CI,OVe,rC,TM,_mn,L6t};
