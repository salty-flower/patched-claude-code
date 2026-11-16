// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{pt}from"./chunk-1f8jcja6.js";import{le}from"./chunk-gwh19369.js";import{qx}from"./chunk-xjqp3eha.js";import{vge}from"./chunk-gcw6cvys.js";import{kpe}from"./chunk-aay5maza.js";import{NUe}from"./chunk-7cqv1j64.js";var sOn=48;function n5a(n){if(!NUe())return null;let e=n.get(vge);return{subscribe:(r)=>e.onRunningScriptsChange(r),getSnapshot:()=>e.runningScripts(qx)}}function ros(n,e){if(!le())return null;let r=[...n.values()].sort((t,u)=>i(t)-i(u)||t.evalId-u.evalId),a=r[0]===void 0?0:i(r[0]),o=r.map((t)=>({phase:i(t),text:kpe(t.description,e)})).filter(({text:t})=>t!==""),s=o[0];if(s===void 0||s.phase!==a)return null;let l=pt(s.text,sOn);return o.length===1?l:`${l} +${o.length-1} more`}function oos(n){if(!le())return!1;return[...n.values()].some((e)=>i(e)===0)}function i(n){return n.late?2:n.startedAt===void 0?1:0}
export{sOn,n5a,ros,oos};
