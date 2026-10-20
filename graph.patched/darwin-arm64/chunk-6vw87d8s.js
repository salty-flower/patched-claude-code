// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{te}from"./chunk-eb6svdsk.js";import{du,wDe}from"./chunk-pvfq0951.js";import{VRo,Eme,GL,zft}from"./chunk-0cb6x9h5.js";function sPt(){let n=du();return n?{entrypoint:n.toLowerCase().slice(0,64)}:{}}function Dyr(){let n=VRo();return n&&!wDe()?{session_id:n}:{}}var Ico=3600000;function wDn(){let n=te().sessionHintsRefusedAt;if(n!==void 0&&Date.now()-n<Ico)return{};return{...sPt(),...Dyr()}}function EDn(){te().sessionHintsRefusedAt=Date.now()}var Lyr=["entrypoint","session_id","request_id"],u=new Set(Lyr);function vDn(n,s,i){let o=Lyr.filter((t)=>i[t]!==void 0);if(n!==400||o.length===0)return[];let e=GL(s);if(!Eme.test(e))return[];let r=o.filter((t)=>zft(e,t));if(r.length>0)return r;return Object.keys(i).some((t)=>!u.has(t)&&zft(e,t))?[]:o}function $Xt(n){return n.includes("entrypoint")||n.includes("session_id")}function xhs(n){let{entrypoint:s,session_id:i,request_id:o,...e}=n;return e}
export{sPt,Dyr,Ico,wDn,EDn,Lyr,vDn,$Xt,xhs};
