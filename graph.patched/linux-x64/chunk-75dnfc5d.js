// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Pe,ws}from"./chunk-732yb76j.js";import{tf,Jj,uEn,yhi}from"./chunk-r3adsed5.js";import{Fc,Kl,un,S,Jt,jc}from"./chunk-a5a37ds7.js";import{qp,eCe}from"./chunk-fn5hkvxe.js";import{i}from"./chunk-5g5ea6r9.js";import{t}from"./chunk-ray9kegj.js";import{Ek}from"./chunk-5z5dtbrz.js";import{qm,LYr}from"./chunk-acx2qgbr.js";import{E5r}from"./chunk-374g520d.js";import{Pni,Hse}from"./chunk-4rkc6f3s.js";import{zM}from"./chunk-qyy7cp48.js";import{Ee}from"./chunk-n61dvy9z.js";import{vRt,x0a,P0a}from"./chunk-77eek6nm.js";import{ca}from"./chunk-qgy2djbj.js";import{mw}from"./chunk-gv68wevq.js";import{FGt,mBr}from"./chunk-3w8m397f.js";import{jn}from"./chunk-25704gk3.js";var d="force";function U1r(){try{if(Ek())return!1;if(Ee()!=="firstParty")return!1;let e=Hse("ENABLE_TOOL_SEARCH");if(e===d)return!0;if(Pni()!==d)return!1;if(Pe(Hse("CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS")))return!1;return e===void 0||!g(e)}catch(e){return t(`isToolSearchForceOverride: settings read failed: ${e}`,{level:"error"}),!1}}function g(e){if(e.startsWith("auto:")){let o=qp(e.slice(5));return!isNaN(o)&&o>=100}return ws(e)}function ezs(){try{return Ek()&&!i.CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS&&!uEn()&&vRt("allow_tool_search")===!0&&x0a()&&!Kl()&&FGt()&&(mw()==="hosted_worker"?!zM()&&LYr():mw()==="none"&&!i.CLAUDE_CODE_REMOTE)}catch(e){return t(`isToolSearchAllowedUnderCompliance: ${e}`,{level:"error"}),!1}}function fDo(){let e=P0a(),o=Ek()||(uEn()||e&&!E5r())&&mBr();if(o)yhi();return o}function VKn(){return fDo()?!ezs():i.CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS&&!U1r()}var E='ToolSearch with query "select:mcp__claude-in-chrome__tabs_context_mcp,mcp__claude-in-chrome__navigate,mcp__claude-in-chrome__computer,mcp__claude-in-chrome__read_page,mcp__claude-in-chrome__tabs_create_mcp,mcp__claude-in-chrome__tabs_close_mcp"'.replace(/"$/,',mcp__claude-in-chrome__browser_batch"');function _(e){return e.replace('ToolSearch with query "select:mcp__claude-in-chrome__tabs_context_mcp,mcp__claude-in-chrome__navigate,mcp__claude-in-chrome__computer,mcp__claude-in-chrome__read_page,mcp__claude-in-chrome__tabs_create_mcp,mcp__claude-in-chrome__tabs_close_mcp"',E)}var p="Add task-specific tools to the same call when the task obviously needs them: read_console_messages / read_network_requests for debugging, form_input for forms, gif_creator for recordings, javascript_tool for page scripting.",m=`# Claude in Chrome browser automation

You have access to browser automation tools (mcp__claude-in-chrome__*) for interacting with web pages in Chrome. Follow these guidelines for effective browser automation.`,b=`## Loading deferred tools

If the mcp__claude-in-chrome__* tools are deferred (must be loaded via ToolSearch before use), load every tool you expect to need in ONE ToolSearch call \u2014 the select query accepts a comma-separated list \u2014 never one call per tool. Start with the core set:

${'ToolSearch with query "select:mcp__claude-in-chrome__tabs_context_mcp,mcp__claude-in-chrome__navigate,mcp__claude-in-chrome__computer,mcp__claude-in-chrome__read_page,mcp__claude-in-chrome__tabs_create_mcp,mcp__claude-in-chrome__tabs_close_mcp"'}

${p}`,h=`## GIF recording

When performing multi-step browser interactions that the user may want to review or share, use mcp__claude-in-chrome__gif_creator to record them.

You must ALWAYS:
* Capture extra frames before and after taking actions to ensure smooth playback
* Name the file meaningfully to help the user identify it later (e.g., "login_process.gif")

## Console log debugging

You can use mcp__claude-in-chrome__read_console_messages to read console output. Console output may be verbose. If you are looking for specific log entries, use the 'pattern' parameter with a regex-compatible pattern. This filters results efficiently and avoids overwhelming output. For example, use pattern: "[MyApp]" to filter for application-specific logs rather than reading all console output.

## Alerts and dialogs

IMPORTANT: Do not trigger JavaScript alerts, confirms, prompts, or browser modal dialogs through your actions. These browser dialogs block all further browser events and will prevent the extension from receiving any subsequent commands. Instead, when possible, use console.log for debugging and then use the mcp__claude-in-chrome__read_console_messages tool to read those log messages. If a page has dialog-triggering elements:
1. Avoid clicking buttons or links that may trigger alerts (e.g., "Delete" buttons with confirmation dialogs)
2. If you must interact with such elements, warn the user first that this may interrupt the session
3. Use mcp__claude-in-chrome__javascript_tool to check for and dismiss any existing dialogs before proceeding

If you accidentally trigger a dialog and lose responsiveness, inform the user they need to manually dismiss it in the browser.

## Avoid rabbit holes and loops

When using browser automation tools, stay focused on the specific task. If you encounter any of the following, stop and ask the user for guidance:
- Unexpected complexity or tangential browser exploration
- Browser tool calls failing or returning errors after 2-3 attempts
- No response from the browser extension
- Page elements not responding to clicks or input
- Pages not loading or timing out
- Unable to complete the browser task despite multiple approaches

Explain what you attempted, what went wrong, and ask how the user would like to proceed. Do not keep retrying the same failing browser action or explore unrelated pages without checking in first.

## Tab context and session startup

IMPORTANT: At the start of each browser automation session, call mcp__claude-in-chrome__tabs_context_mcp first to get information about the user's current browser tabs. Use this context to understand what the user might want to work with before creating new tabs.

Never reuse tab IDs from a previous/other session. Follow these guidelines:
1. Only reuse an existing tab if the user explicitly asks to work with it
2. Otherwise, create a new tab with mcp__claude-in-chrome__tabs_create_mcp
3. If a tool returns an error indicating the tab doesn't exist or is invalid, call tabs_context_mcp to get fresh tab IDs
4. When a tab is closed by the user or a navigation error occurs, call tabs_context_mcp to see what tabs are available`,T=`${m}

${b}

${h}`,O=`${m}

${h}`,Lma=`**IMPORTANT: If the Chrome browser tools are deferred (must be loaded via ToolSearch before use), load them with ToolSearch before calling them, and batch every tool you expect to need into ONE ToolSearch call (the select query accepts a comma-separated list). Do NOT load tools one at a time; each separate ToolSearch call wastes a full round-trip.**

Start a browser task whose tools are not yet loaded with a single call loading the core set:

ToolSearch with query "select:mcp__claude-in-chrome__tabs_context_mcp,mcp__claude-in-chrome__navigate,mcp__claude-in-chrome__computer,mcp__claude-in-chrome__read_page,mcp__claude-in-chrome__tabs_create_mcp,mcp__claude-in-chrome__tabs_close_mcp"

${p} Only issue a second ToolSearch if the task later needs a tool you did not anticipate.`;function Tkt(e){return e?T:O}function pDo(e,o){let r=/^claude-([a-z]+)-(\d+(?:-\d+)*)$/.exec(e),n=r?.[1],l=r?.[2];if(!n||!l)return!1;let a=o.find(([s])=>s===n)?.[1];if(!a)return!1;let u=l.split("-").map(Number);for(let s=0;s<Math.max(u.length,a.length);s++){let f=(u[s]??0)-(a[s]??0);if(f!==0)return f>0}return!0}function tzs(e){if(!e.startsWith("auto:"))return null;let o=e.slice(5),r=qp(o);if(isNaN(r))return t(`Invalid ENABLE_TOOL_SEARCH value "${e}": expected auto:N where N is a number.`),null;return Math.max(0,Math.min(100,r))}function y(e){if(!e)return!1;return e==="auto"||e.startsWith("auto:")}function zde(){if(VKn())return"standard";if(U1r())return"tst";let e=process.env.ENABLE_TOOL_SEARCH,o=e?tzs(e):null;if(o===0)return"tst";if(o===100)return"standard";if(y(e))return"tst-auto";if(Pe(e))return"tst";if(ws(e))return"standard";return"tst"}var w=["claude-3-opus","claude-3-sonnet","claude-3-haiku","claude-3-5-sonnet","claude-3-5-haiku","claude-3-7-sonnet"],A=[["opus",[4,5]],["sonnet",[4,5]],["haiku",[4,5]]];function Dke(e){if(Ee()!=="vertex")return!1;let o=jn(e).replace(/[@-]\d{8}$/,"");if(/^claude-3(-|$)/.test(o))return!0;return/^claude-(opus|sonnet|haiku)-\d/.test(o)&&!pDo(o,A)}function C(){try{let e=S("tengu_tool_search_unsupported_models",null);if(Array.isArray(e))return e}catch{}return w}var c=[];function R(e){if(e===null||Array.isArray(e)||typeof e!=="object")return e;let o=e,r=tf(),n=r!==void 0?r:Jj();if(typeof n==="string"){let l=n.toLowerCase();for(let a of Object.keys(o))if(a!=="*"&&a.length>0&&l.includes(a.toLowerCase()))return o[a]}return o["*"]}function EI(){let e=new Set;try{let o=R(S("tengu_non_deferrable_builtins",null));if(Array.isArray(o)){for(let r of o)if(typeof r==="string")e.add(r)}}catch{}try{let o=jc()?.non_deferrable_builtins;if(Array.isArray(o)){for(let r of o)if(typeof r==="string")e.add(r)}}catch{}if(e.size===0)return c;return[...e]}function Hma(){return Jt("tengu_shiny_stardust",!1)}function qKn(){let e=Jt("tengu_snug_nautilus",null);if(typeof e!=="object"||e===null||!("whenToUse"in e)||e.whenToUse!==!0)return{whenToUse:!1,defer:c};return{whenToUse:!0,defer:"defer"in e&&Array.isArray(e.defer)?e.defer.filter((o)=>typeof o==="string"):c}}var L="tengu_drifting_heron";function Nma(){return Jt(L,!0)!==!1}var x="tengu_fancy_milner";function mDo(){return Fc()&&Jt(x,!0)!==!1}function jfn(e){let o=e.toLowerCase(),r=C();for(let n of r)if(o.includes(n.toLowerCase()))return!1;return!0}function Lke(e){if(jfn(e))return!0;let o=S("tengu_swift_pelican",null);return Ee()==="firstParty"&&Array.isArray(o)&&eCe(e,o)}function dBe(e){let o=_(e);return o!==e&&Jt("tengu_tranquil_starlight",!1)?o:e}function Mh(){let e=zde();if(e==="standard"){if(ca().claim("tool_search_optimistic_decision"))t(`[ToolSearch:optimistic] mode=${e}, ENABLE_TOOL_SEARCH=${i.ENABLE_TOOL_SEARCH}, result=false`);return!1}if(ca().claim("tool_search_optimistic_decision"))t(`[ToolSearch:optimistic] mode=${e}, ENABLE_TOOL_SEARCH=${i.ENABLE_TOOL_SEARCH}, result=true`);return!0}function hDo(){return S("tengu_surface_failed_mcp_servers",!0)}function Hot(){let e=i.CLAUDE_CODE_SORTED_OTTER;if(e!==void 0)return e;return S("tengu_sorted_otter",!1)}var v="tengu_fizzy_wren";function Fma(){return S(v,!1)===!0}function $ma(){let{value:e,source:o}=un("tengu_precious_koala","off"),r=typeof e==="string"?e.trim().toLowerCase():e,n=qm();return{inForce:r==="everywhere"||r==="hosted"&&n,flagSource:o,coworkSurface:n}}function Uma(){return S("tengu_modular_marble",!1)===!0}
export{U1r,ezs,fDo,VKn,Lma,Tkt,pDo,tzs,zde,Dke,EI,Hma,qKn,Nma,mDo,jfn,Lke,dBe,Mh,hDo,Hot,Fma,$ma,Uma};
