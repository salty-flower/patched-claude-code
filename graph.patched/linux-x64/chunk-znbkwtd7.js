// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{J}from"./chunk-ad49p3yb.js";import{zu,MTe}from"./chunk-zyrx67ap.js";import{UYr,OOe,yF,Inr}from"./chunk-1ftpb47p.js";function F$t(){let n=zu();return n?{entrypoint:n.toLowerCase().slice(0,64)}:{}}function q4n(){let n=UYr();return n&&!MTe()?{session_id:n}:{}}var u=3600000;function bpn(){let n=J().sessionHintsRefusedAt;if(n!==void 0&&Date.now()-n<u)return{};return{...F$t(),...q4n()}}function Spn(){J().sessionHintsRefusedAt=Date.now()}var V4n=["entrypoint","session_id","request_id"],d=new Set(V4n);function wpn(n,s,i){let o=V4n.filter((t)=>i[t]!==void 0);if(n!==400||o.length===0)return[];let e=yF(s);if(!OOe.test(e))return[];let r=o.filter((t)=>Inr(e,t));if(r.length>0)return r;return Object.keys(i).some((t)=>!d.has(t)&&Inr(e,t))?[]:o}function U$t(n){return n.includes("entrypoint")||n.includes("session_id")}function TLo(n){let{entrypoint:s,session_id:i,request_id:o,...e}=n;return e}
export{F$t,q4n,bpn,Spn,V4n,wpn,U$t,TLo};
