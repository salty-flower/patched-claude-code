// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{ee}from"./chunk-m9wmj1k9.js";import{Op,rM}from"./chunk-gg7nabmz.js";import{I4s,WIe,N4,_Gt}from"./chunk-4c1v3m2n.js";function qpn(){let n=Op();return n?{entrypoint:n.toLowerCase().slice(0,64)}:{}}function uHo(){let n=I4s();return n&&!rM()?{session_id:n}:{}}var S4s=3600000;function S2r(){let n=ee().sessionHintsRefusedAt;if(n!==void 0&&Date.now()-n<S4s)return{};return{...qpn(),...uHo()}}function b2r(){ee().sessionHintsRefusedAt=Date.now()}var fHo=["entrypoint","session_id","request_id"],u=new Set(fHo);function w2r(n,s,i){let o=fHo.filter((t)=>i[t]!==void 0);if(n!==400||o.length===0)return[];let e=N4(s);if(!WIe.test(e))return[];let r=o.filter((t)=>_Gt(e,t));if(r.length>0)return r;return Object.keys(i).some((t)=>!u.has(t)&&_Gt(e,t))?[]:o}function Oqn(n){return n.includes("entrypoint")||n.includes("session_id")}function Z_a(n){let{entrypoint:s,session_id:i,request_id:o,...e}=n;return e}
export{qpn,uHo,S4s,S2r,b2r,fHo,w2r,Oqn,Z_a};
