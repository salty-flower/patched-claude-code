// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Pe,ws}from"./chunk-5p4f0tx0.js";import{nf,ej,vkn,Yhi}from"./chunk-m8nhymg4.js";import{Fc,Kl,un,b,Jt,jc}from"./chunk-e44qnbvj.js";import{qp,mAe}from"./chunk-15kz2sd4.js";import{i}from"./chunk-428zme0n.js";import{t}from"./chunk-bdfv2ky4.js";import{Tv}from"./chunk-29cd2nzs.js";import{qm,rYr}from"./chunk-gg7nabmz.js";import{q5r}from"./chunk-gywtf5sd.js";import{dri,Gse}from"./chunk-x4r54n7x.js";import{K0}from"./chunk-yzwcdz1k.js";import{ke}from"./chunk-tbvds061.js";import{RRt,yDa,SDa}from"./chunk-yyx3r3ec.js";import{ca}from"./chunk-qgq3te1p.js";import{hw}from"./chunk-taqg08p7.js";import{q6t,$Br}from"./chunk-kvn7ghhr.js";import{jn}from"./chunk-tt6pz9dt.js";var d="force";function uBr(){try{if(Tv())return!1;if(ke()!=="firstParty")return!1;let e=Gse("ENABLE_TOOL_SEARCH");if(e===d)return!0;if(dri()!==d)return!1;if(Pe(Gse("CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS")))return!1;return e===void 0||!g(e)}catch(e){return t(`isToolSearchForceOverride: settings read failed: ${e}`,{level:"error"}),!1}}function g(e){if(e.startsWith("auto:")){let o=qp(e.slice(5));return!isNaN(o)&&o>=100}return ws(e)}function LGs(){try{return Tv()&&!i.CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS&&!vkn()&&RRt("allow_tool_search")===!0&&yDa()&&!Kl()&&q6t()&&(hw()==="hosted_worker"?!K0()&&rYr():hw()==="none"&&!i.CLAUDE_CODE_REMOTE)}catch(e){return t(`isToolSearchAllowedUnderCompliance: ${e}`,{level:"error"}),!1}}function FDo(){let e=SDa(),o=Tv()||(vkn()||e&&!q5r())&&$Br();if(o)Yhi();return o}function m3n(){return FDo()?!LGs():i.CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS&&!uBr()}var E='ToolSearch with query "select:mcp__claude-in-chrome__tabs_context_mcp,mcp__claude-in-chrome__navigate,mcp__claude-in-chrome__computer,mcp__claude-in-chrome__read_page,mcp__claude-in-chrome__tabs_create_mcp,mcp__claude-in-chrome__tabs_close_mcp"'.replace(/"$/,',mcp__claude-in-chrome__browser_batch"');function _(e){return e.replace('ToolSearch with query "select:mcp__claude-in-chrome__tabs_context_mcp,mcp__claude-in-chrome__navigate,mcp__claude-in-chrome__computer,mcp__claude-in-chrome__read_page,mcp__claude-in-chrome__tabs_create_mcp,mcp__claude-in-chrome__tabs_close_mcp"',E)}var p="Add task-specific tools to the same call when the task obviously needs them: read_console_messages / read_network_requests for debugging, form_input for forms, gif_creator for recordings, javascript_tool for page scripting.",m=`# Claude in Chrome browser automation

You have access to browser automation tools (mcp__claude-in-chrome__*) for interacting with web pages in Chrome. Follow these guidelines for effective browser automation.`,T=`## Loading deferred tools

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
4. When a tab is closed by the user or a navigation error occurs, call tabs_context_mcp to see what tabs are available`,S=`${m}

${T}

${h}`,O=`${m}

${h}`,kha=`**IMPORTANT: If the Chrome browser tools are deferred (must be loaded via ToolSearch before use), load them with ToolSearch before calling them, and batch every tool you expect to need into ONE ToolSearch call (the select query accepts a comma-separated list). Do NOT load tools one at a time; each separate ToolSearch call wastes a full round-trip.**

Start a browser task whose tools are not yet loaded with a single call loading the core set:

ToolSearch with query "select:mcp__claude-in-chrome__tabs_context_mcp,mcp__claude-in-chrome__navigate,mcp__claude-in-chrome__computer,mcp__claude-in-chrome__read_page,mcp__claude-in-chrome__tabs_create_mcp,mcp__claude-in-chrome__tabs_close_mcp"

${p} Only issue a second ToolSearch if the task later needs a tool you did not anticipate.`;function Pvt(e){return e?S:O}function $Do(e,o){let r=/^claude-([a-z]+)-(\d+(?:-\d+)*)$/.exec(e),n=r?.[1],l=r?.[2];if(!n||!l)return!1;let a=o.find(([s])=>s===n)?.[1];if(!a)return!1;let u=l.split("-").map(Number);for(let s=0;s<Math.max(u.length,a.length);s++){let f=(u[s]??0)-(a[s]??0);if(f!==0)return f>0}return!0}function HGs(e){if(!e.startsWith("auto:"))return null;let o=e.slice(5),r=qp(o);if(isNaN(r))return t(`Invalid ENABLE_TOOL_SEARCH value "${e}": expected auto:N where N is a number.`),null;return Math.max(0,Math.min(100,r))}function y(e){if(!e)return!1;return e==="auto"||e.startsWith("auto:")}function Zde(){if(m3n())return"standard";if(uBr())return"tst";let e=process.env.ENABLE_TOOL_SEARCH,o=e?HGs(e):null;if(o===0)return"tst";if(o===100)return"standard";if(y(e))return"tst-auto";if(Pe(e))return"tst";if(ws(e))return"standard";return"tst"}var w=["claude-3-opus","claude-3-sonnet","claude-3-haiku","claude-3-5-sonnet","claude-3-5-haiku","claude-3-7-sonnet"],A=[["opus",[4,5]],["sonnet",[4,5]],["haiku",[4,5]]];function jve(e){if(ke()!=="vertex")return!1;let o=jn(e).replace(/[@-]\d{8}$/,"");if(/^claude-3(-|$)/.test(o))return!0;return/^claude-(opus|sonnet|haiku)-\d/.test(o)&&!$Do(o,A)}function C(){try{let e=b("tengu_tool_search_unsupported_models",null);if(Array.isArray(e))return e}catch{}return w}var c=[];function R(e){if(e===null||Array.isArray(e)||typeof e!=="object")return e;let o=e,r=nf(),n=r!==void 0?r:ej();if(typeof n==="string"){let l=n.toLowerCase();for(let a of Object.keys(o))if(a!=="*"&&a.length>0&&l.includes(a.toLowerCase()))return o[a]}return o["*"]}function AO(){let e=new Set;try{let o=R(b("tengu_non_deferrable_builtins",null));if(Array.isArray(o)){for(let r of o)if(typeof r==="string")e.add(r)}}catch{}try{let o=jc()?.non_deferrable_builtins;if(Array.isArray(o)){for(let r of o)if(typeof r==="string")e.add(r)}}catch{}if(e.size===0)return c;return[...e]}function Tha(){return Jt("tengu_shiny_stardust",!1)}function h3n(){let e=Jt("tengu_snug_nautilus",null);if(typeof e!=="object"||e===null||!("whenToUse"in e)||e.whenToUse!==!0)return{whenToUse:!1,defer:c};return{whenToUse:!0,defer:"defer"in e&&Array.isArray(e.defer)?e.defer.filter((o)=>typeof o==="string"):c}}var L="tengu_drifting_heron";function Cha(){return Jt(L,!0)!==!1}var x="tengu_fancy_milner";function UDo(){return Fc()&&Jt(x,!0)!==!1}function spn(e){let o=e.toLowerCase(),r=C();for(let n of r)if(o.includes(n.toLowerCase()))return!1;return!0}function Wve(e){if(spn(e))return!0;let o=b("tengu_swift_pelican",null);return ke()==="firstParty"&&Array.isArray(o)&&mAe(e,o)}function fBe(e){let o=_(e);return o!==e&&Jt("tengu_tranquil_starlight",!1)?o:e}function Dh(){let e=Zde();if(e==="standard"){if(ca().claim("tool_search_optimistic_decision"))t(`[ToolSearch:optimistic] mode=${e}, ENABLE_TOOL_SEARCH=${i.ENABLE_TOOL_SEARCH}, result=false`);return!1}if(ca().claim("tool_search_optimistic_decision"))t(`[ToolSearch:optimistic] mode=${e}, ENABLE_TOOL_SEARCH=${i.ENABLE_TOOL_SEARCH}, result=true`);return!0}function BDo(){return b("tengu_surface_failed_mcp_servers",!0)}function Vot(){let e=i.CLAUDE_CODE_SORTED_OTTER;if(e!==void 0)return e;return b("tengu_sorted_otter",!1)}var v="tengu_fizzy_wren";function Aha(){return b(v,!1)===!0}function Rha(){let{value:e,source:o}=un("tengu_precious_koala","off"),r=typeof e==="string"?e.trim().toLowerCase():e,n=qm();return{inForce:r==="everywhere"||r==="hosted"&&n,flagSource:o,coworkSurface:n}}function xha(){return b("tengu_modular_marble",!1)===!0}
export{uBr,LGs,FDo,m3n,kha,Pvt,$Do,HGs,Zde,jve,AO,Tha,h3n,Cha,UDo,spn,Wve,fBe,Dh,BDo,Vot,Aha,Rha,xha};
