// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{pA,a}from"./chunk-bn8q5mbz.js";import{Fve}from"./chunk-nrtq2k0h.js";import{wt,ac,Y0,x,tYn}from"./chunk-ghnc2x4f.js";import{Iu,Cl}from"./chunk-v64cgp57.js";import{Ds,Xo}from"./chunk-yym5v35g.js";import{Xt}from"./chunk-p24f2xe3.js";import{Ks}from"./chunk-2126j1xj.js";import{E0}from"./chunk-bgagm8w5.js";import{C8n}from"./chunk-tg48dmnw.js";import{ft}from"./chunk-4ww39vfb.js";import{Xe,Nt}from"./chunk-cgpv4wh0.js";var Yo="Grep";function scn(e){if(Iu(e))return`Content search built on ripgrep. Prefer this over \`grep\`/\`rg\` via ${Xe} \u2014 results integrate with the permission UI and file links.

- Full regex syntax (e.g. "log.*Error", "function\\s+\\w+"). Ripgrep, not grep \u2014 escape literal braces (\`interface\\{\\}\`).
- Filter with \`glob\` (e.g. "**/*.tsx") or \`type\` (e.g. "js", "py", "rust").
- \`output_mode\`: "content" (matching lines), "files_with_matches" (paths only, default), or "count".
- \`multiline: true\` for patterns that span lines.`;return`A powerful search tool built on ripgrep

  Usage:
  - ALWAYS use ${Yo} for search tasks. NEVER invoke \`grep\` or \`rg\` as a ${Xe} command. The ${Yo} tool has been optimized for correct permissions and access.
  - Supports full regex syntax (e.g., "log.*Error", "function\\s+\\w+")
  - Filter files with glob parameter (e.g., "*.js", "**/*.tsx") or type parameter (e.g., "js", "py", "rust")
  - Output modes: "content" shows matching lines, "files_with_matches" shows only file paths (default), "count" shows match counts
${Y0()==="default"?`  - Use ${ft} tool (if available) for open-ended searches requiring multiple rounds
`:""}  - Pattern syntax: Uses ripgrep (not grep) - literal braces need escaping (use \`interface\\{\\}\` to find \`interface{}\` in Go code)
  - Multiline matching: By default patterns match within single lines only. For cross-line patterns like \`struct \\{[\\s\\S]*?field\`, use \`multiline: true\`
`}class YD{#e=new Map;get(e){return this.#e.get(e)}has(e){return this.#e.has(e)}set(e,t){this.#e.set(e,t)}release(e){let t=this.#e.get(e);if(t===void 0)return!1;return t.clearAllTimers(),this.#e.delete(e),!0}}var Bpt="repl-registered";function Tzn(){return a.CLAUDE_REPL_VARIANT}var z2="main";function Upt(e,t){return e.get(YD).has(t??z2)}function hy(){if(!pA())return!1;if(a.CLAUDE_CODE_REPL===!1)return!1;if(a.CLAUDE_CODE_REPL===!0)return!0;let e=a.CLAUDE_CODE_ENTRYPOINT;if(e==="cli"||e==="remote")return x("tengu_slate_harbor",!1);return!1}function acn(){return!1}function KZ(){return!1}function LW(e){if(!uI(e))return e;let t=e.filter((r)=>r.isMcp!==!0||r.mcpInfo?.isAuthStub===!0);return t.length===e.length?e:t}function uI(e){return KZ()&&e.some((t)=>t.isMcp!==!0&&Xt(t,Ds))}var FWe=new Set([wt,Xo,Yo,Xe,Nt,ac]);var dI="EnterWorktree";var o=import.meta.require("./chunk-e8mfh0de.js").BRIEF_TOOL_NAME,n=`Fetches full schema definitions for deferred tools so they can be called.

Deferred tools appear by name in <system-reminder> messages.`,i=" Until fetched, only the name is known \u2014 there is no parameter schema, so the tool cannot be invoked.",s=` Until fetched, only the name is known \u2014 there is no parameter schema, so calling the tool fails with InputValidationError. When any instruction, system reminder, or other tool's description names a deferred tool, fetch it with query "select:<name>" before calling it.`,l=` This tool takes a query, matches it against the deferred tool list, and returns the matched tools' complete JSONSchema definitions inside a <functions> block. Once a tool's schema appears in that result, it is callable exactly like any tool defined at the top of the prompt.

Result format: each matched tool appears as one <function>{"description": "...", "name": "...", "parameters": {...}}</function> line inside the <functions> block \u2014 the same encoding as the tool list at the top of this prompt.

Query forms:
- "select:Read,Edit,Grep" \u2014 fetch these exact tools by name
- "notebook jupyter" \u2014 keyword search, up to max_results best matches
- "+slack send" \u2014 require "slack" in the name, rank by remaining terms`;function XD(e){if(e.alwaysLoad===!0)return!1;if(C8n().includes(e.name))return!1;if(e.isMcp===!0)return!KZ();if(e.name===Cl)return!1;if(e.name===ft){if(import.meta.require("./chunk-nnbvkq2x.js").isForkSubagentEnabled())return!1}if(e.name===o)return!1;if(e.name===E0&&Fve())return!1;if(e.name===Ks)return!1;if(e.name===dI&&a.CLAUDE_CODE_SESSION_KIND==="bg")return!1;return e.shouldDefer===!0}function lcn(e){return e.name}function DFt(){return n+(tYn()?s:i)+l}
export{Yo,scn,YD,Bpt,Tzn,z2,Upt,hy,acn,KZ,LW,uI,FWe,dI,XD,lcn,DFt};
