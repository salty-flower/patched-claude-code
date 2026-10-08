// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Q}from"./chunk-zq84ct3s.js";import{Qu,zCe}from"./chunk-cjpd2k0t.js";import{UZr,UHe,fU,mcr}from"./chunk-zx3kz5f6.js";function pht(){let n=Qu();return n?{entrypoint:n.toLowerCase().slice(0,64)}:{}}function K9n(){let n=UZr();return n&&!zCe()?{session_id:n}:{}}var u=3600000;function zhn(){let n=Q().sessionHintsRefusedAt;if(n!==void 0&&Date.now()-n<u)return{};return{...pht(),...K9n()}}function Ghn(){Q().sessionHintsRefusedAt=Date.now()}var Y9n=["entrypoint","session_id","request_id"],d=new Set(Y9n);function qhn(n,s,i){let o=Y9n.filter((t)=>i[t]!==void 0);if(n!==400||o.length===0)return[];let e=fU(s);if(!UHe.test(e))return[];let r=o.filter((t)=>mcr(e,t));if(r.length>0)return r;return Object.keys(i).some((t)=>!d.has(t)&&mcr(e,t))?[]:o}function H1t(n){return n.includes("entrypoint")||n.includes("session_id")}function Tzo(n){let{entrypoint:s,session_id:i,request_id:o,...e}=n;return e}
export{pht,K9n,zhn,Ghn,Y9n,qhn,H1t,Tzo};
