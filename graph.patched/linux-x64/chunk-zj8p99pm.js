// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{ee}from"./chunk-wswyff5p.js";import{Op,t0}from"./chunk-acx2qgbr.js";import{Zqs,$Oe,OK,lzt}from"./chunk-w90jarjb.js";function Ipn(){let n=Op();return n?{entrypoint:n.toLowerCase().slice(0,64)}:{}}function $Lo(){let n=Zqs();return n&&!t0()?{session_id:n}:{}}var Uqs=3600000;function KBr(){let n=ee().sessionHintsRefusedAt;if(n!==void 0&&Date.now()-n<Uqs)return{};return{...Ipn(),...$Lo()}}function YBr(){ee().sessionHintsRefusedAt=Date.now()}var ULo=["entrypoint","session_id","request_id"],u=new Set(ULo);function XBr(n,s,i){let o=ULo.filter((t)=>i[t]!==void 0);if(n!==400||o.length===0)return[];let e=OK(s);if(!$Oe.test(e))return[];let r=o.filter((t)=>lzt(e,t));if(r.length>0)return r;return Object.keys(i).some((t)=>!u.has(t)&&lzt(e,t))?[]:o}function d6n(n){return n.includes("entrypoint")||n.includes("session_id")}function c_a(n){let{entrypoint:s,session_id:i,request_id:o,...e}=n;return e}
export{Ipn,$Lo,Uqs,KBr,YBr,ULo,XBr,d6n,c_a};
