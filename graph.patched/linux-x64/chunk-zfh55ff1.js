// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{mt}from"./chunk-hzf7t49x.js";import{le}from"./chunk-pw3ekzpq.js";import{zx}from"./chunk-nbw6q6ev.js";import{hge}from"./chunk-rmmdbnjp.js";import{_pe}from"./chunk-hf1k28h8.js";import{D1e}from"./chunk-pxxdwfjx.js";var WPn=48;function p3a(n){if(!D1e())return null;let e=n.get(hge);return{subscribe:(r)=>e.onRunningScriptsChange(r),getSnapshot:()=>e.runningScripts(zx)}}function Ors(n,e){if(!le())return null;let r=[...n.values()].sort((t,u)=>i(t)-i(u)||t.evalId-u.evalId),a=r[0]===void 0?0:i(r[0]),o=r.map((t)=>({phase:i(t),text:_pe(t.description,e)})).filter(({text:t})=>t!==""),s=o[0];if(s===void 0||s.phase!==a)return null;let l=mt(s.text,WPn);return o.length===1?l:`${l} +${o.length-1} more`}function Mrs(n){if(!le())return!1;return[...n.values()].some((e)=>i(e)===0)}function i(n){return n.late?2:n.startedAt===void 0?1:0}
export{WPn,p3a,Ors,Mrs};
