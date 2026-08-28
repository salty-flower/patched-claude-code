// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{bad as _}from"./_797.js";import{xad as p}from"./_798.js";import{Eed as v,Red as u,Xed as R,wed as d}from"./_806.js";import{Ofd as c,Tfd as L}from"./_808.js";import{Jid as g,Thd as a,Uhd as h,krd as y}from"./_812.js";import{Exd as D}from"./_839.js";import{dirname as k}from"path";function f(){}async function P(n,t){let i=u();try{await i.appendFile(n,t)}catch{await i.mkdir(k(n)).catch(f),await i.appendFile(n,t)}}class l{pendingWrite=Promise.resolve();cleanupRegistered=!1;append(n,t){if(this.pendingWrite=this.pendingWrite.then(P.bind(null,n,t)).catch(f),!this.cleanupRegistered)this.cleanupRegistered=!0,c(()=>this.flush())}flush(){return this.pendingWrite}}function m(){return I.of(g().host)}function e(n,t,i){let r=T();if(!r)return;let o;try{o=s(n,t,S(i))}catch{o=s(n,t,{diagnostics_payload_failed:!0})}m().append(r,o)}function S(n){try{return(typeof n==="function"?n():n)??{}}catch{return{diagnostics_payload_failed:!0}}}function s(n,t,i){let r={timestamp:new Date().toISOString(),level:n,event:t,data:i};return d(r)+`
`}function N(){return m().flush()}function T(){return p.CLAUDE_CODE_DIAGNOSTICS_FILE}async function j(n,t,i){let r=Date.now();e("info",`${n}_started`);try{let o=await t(),w=i?i(o):{};return e("info",`${n}_completed`,{duration_ms:Date.now()-r,...w}),o}catch(o){throw e("error",`${n}_failed`,{duration_ms:Date.now()-r}),o}}var I;var x=D(()=>{y();h();L();_();R();v();I=new a(()=>new l)});
export{e as I_c,N as J_c,j as K_c,x as L_c};
