// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{te}from"./chunk-6hd729pr.js";import{Gu,jB}from"./chunk-3e6pdcy8.js";import{aus,Uve,V1,WIt}from"./chunk-jwppb59z.js";function $Kt(){let n=Gu();return n?{entrypoint:n.toLowerCase().slice(0,64)}:{}}function e5r(){let n=aus();return n&&!jB()?{session_id:n}:{}}var l5o=3600000;function urr(){let n=te().sessionHintsRefusedAt;if(n!==void 0&&Date.now()-n<l5o)return{};return{...$Kt(),...e5r()}}function prr(){te().sessionHintsRefusedAt=Date.now()}var t5r=["entrypoint","session_id","request_id"],u=new Set(t5r);function frr(n,s,i){let o=t5r.filter((t)=>i[t]!==void 0);if(n!==400||o.length===0)return[];let e=V1(s);if(!Uve.test(e))return[];let r=o.filter((t)=>WIt(e,t));if(r.length>0)return r;return Object.keys(i).some((t)=>!u.has(t)&&WIt(e,t))?[]:o}function iwn(n){return n.includes("entrypoint")||n.includes("session_id")}function yii(n){let{entrypoint:s,session_id:i,request_id:o,...e}=n;return e}
export{$Kt,e5r,l5o,urr,prr,t5r,frr,iwn,yii};
