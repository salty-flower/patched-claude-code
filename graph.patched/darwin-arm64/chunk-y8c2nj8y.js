// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Q}from"./chunk-jj0rppvm.js";import{Ju,QTe}from"./chunk-pf8p4bsg.js";import{meo,YHe,v1,Dcr}from"./chunk-c5smvcdt.js";function wht(){let n=Ju();return n?{entrypoint:n.toLowerCase().slice(0,64)}:{}}function fXn(){let n=meo();return n&&!QTe()?{session_id:n}:{}}var u=3600000;function iyn(){let n=Q().sessionHintsRefusedAt;if(n!==void 0&&Date.now()-n<u)return{};return{...wht(),...fXn()}}function ayn(){Q().sessionHintsRefusedAt=Date.now()}var mXn=["entrypoint","session_id","request_id"],d=new Set(mXn);function lyn(n,s,i){let o=mXn.filter((t)=>i[t]!==void 0);if(n!==400||o.length===0)return[];let e=v1(s);if(!YHe.test(e))return[];let r=o.filter((t)=>Dcr(e,t));if(r.length>0)return r;return Object.keys(i).some((t)=>!d.has(t)&&Dcr(e,t))?[]:o}function VBt(n){return n.includes("entrypoint")||n.includes("session_id")}function oGo(n){let{entrypoint:s,session_id:i,request_id:o,...e}=n;return e}
export{wht,fXn,iyn,ayn,mXn,lyn,VBt,oGo};
