// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{Z}from"./chunk-bxg8d6dd.js";import{Uu,hX}from"./chunk-we9anmwe.js";import{D$o,Sye,hF,G_t}from"./chunk-z4jb9fnd.js";function XHt(){let n=Uu();return n?{entrypoint:n.toLowerCase().slice(0,64)}:{}}function _Ar(){let n=D$o();return n&&!hX()?{session_id:n}:{}}var Gwo=3600000;function JBn(){let n=Z().sessionHintsRefusedAt;if(n!==void 0&&Date.now()-n<Gwo)return{};return{...XHt(),..._Ar()}}function QBn(){Z().sessionHintsRefusedAt=Date.now()}var SAr=["entrypoint","session_id","request_id"],u=new Set(SAr);function ZBn(n,s,i){let o=SAr.filter((t)=>i[t]!==void 0);if(n!==400||o.length===0)return[];let e=hF(s);if(!Sye.test(e))return[];let r=o.filter((t)=>G_t(e,t));if(r.length>0)return r;return Object.keys(i).some((t)=>!u.has(t)&&G_t(e,t))?[]:o}function ann(n){return n.includes("entrypoint")||n.includes("session_id")}function gPs(n){let{entrypoint:s,session_id:i,request_id:o,...e}=n;return e}
export{XHt,_Ar,Gwo,JBn,QBn,SAr,ZBn,ann,gPs};
