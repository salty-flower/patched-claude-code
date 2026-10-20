// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{te}from"./chunk-0vmvv2wk.js";import{lu,hLe}from"./chunk-zjcj7ams.js";import{gRo,hme,U0,Lft}from"./chunk-4ramhrg4.js";function qxt(){let n=lu();return n?{entrypoint:n.toLowerCase().slice(0,64)}:{}}function myr(){let n=gRo();return n&&!hLe()?{session_id:n}:{}}var nco=3600000;function nLn(){let n=te().sessionHintsRefusedAt;if(n!==void 0&&Date.now()-n<nco)return{};return{...qxt(),...myr()}}function rLn(){te().sessionHintsRefusedAt=Date.now()}var gyr=["entrypoint","session_id","request_id"],u=new Set(gyr);function oLn(n,s,i){let o=gyr.filter((t)=>i[t]!==void 0);if(n!==400||o.length===0)return[];let e=U0(s);if(!hme.test(e))return[];let r=o.filter((t)=>Lft(e,t));if(r.length>0)return r;return Object.keys(i).some((t)=>!u.has(t)&&Lft(e,t))?[]:o}function TXt(n){return n.includes("entrypoint")||n.includes("session_id")}function Ggs(n){let{entrypoint:s,session_id:i,request_id:o,...e}=n;return e}
export{qxt,myr,nco,nLn,rLn,gyr,oLn,TXt,Ggs};
