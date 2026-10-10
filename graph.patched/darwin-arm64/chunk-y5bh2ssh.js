// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{ee}from"./chunk-dcbjzzq8.js";import{cp,vPe}from"./chunk-tadwrn0a.js";import{iao,OLe,x1,mgr}from"./chunk-9f9hx2aq.js";function ybt(){let n=cp();return n?{entrypoint:n.toLowerCase().slice(0,64)}:{}}function etr(){let n=iao();return n&&!vPe()?{session_id:n}:{}}var u=3600000;function LEn(){let n=ee().sessionHintsRefusedAt;if(n!==void 0&&Date.now()-n<u)return{};return{...ybt(),...etr()}}function NEn(){ee().sessionHintsRefusedAt=Date.now()}var ttr=["entrypoint","session_id","request_id"],d=new Set(ttr);function FEn(n,s,i){let o=ttr.filter((t)=>i[t]!==void 0);if(n!==400||o.length===0)return[];let e=x1(s);if(!OLe.test(e))return[];let r=o.filter((t)=>mgr(e,t));if(r.length>0)return r;return Object.keys(i).some((t)=>!d.has(t)&&mgr(e,t))?[]:o}function Izt(n){return n.includes("entrypoint")||n.includes("session_id")}function E9o(n){let{entrypoint:s,session_id:i,request_id:o,...e}=n;return e}
export{ybt,etr,LEn,NEn,ttr,FEn,Izt,E9o};
