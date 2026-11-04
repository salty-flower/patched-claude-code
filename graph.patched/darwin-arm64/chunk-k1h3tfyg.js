// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{dt}from"./chunk-qf6jrnqc.js";import{ae}from"./chunk-6y108fxb.js";import{$P}from"./chunk-wv7b91vf.js";import{Ace}from"./chunk-848kmhkn.js";import{Cae}from"./chunk-snn1ce1x.js";import{SDe}from"./chunk-menttgam.js";var Kfn=48;function pia(n){if(!SDe())return null;let e=n.get(Ace);return{subscribe:(r)=>e.onRunningScriptsChange(r),getSnapshot:()=>e.runningScripts($P)}}function NNo(n,e){if(!ae())return null;let r=[...n.values()].sort((t,u)=>i(t)-i(u)||t.evalId-u.evalId),a=r[0]===void 0?0:i(r[0]),o=r.map((t)=>({phase:i(t),text:Cae(t.description,e)})).filter(({text:t})=>t!==""),s=o[0];if(s===void 0||s.phase!==a)return null;let l=dt(s.text,Kfn);return o.length===1?l:`${l} +${o.length-1} more`}function FNo(n){if(!ae())return!1;return[...n.values()].some((e)=>i(e)===0)}function i(n){return n.late?2:n.startedAt===void 0?1:0}
export{Kfn,pia,NNo,FNo};
