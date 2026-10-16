// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{us}from"./chunk-xzypj06m.js";import{z}from"./chunk-r0a9v21k.js";import{St,_,se}from"./chunk-bnfhb7sj.js";import{a}from"./chunk-k4g6y57j.js";import{dirname as u}from"path";function c(){}async function p(n,t){let i=se();try{await i.appendFile(n,t)}catch{await i.mkdir(u(n)).catch(c),await i.appendFile(n,t)}}class g{pendingWrite=Promise.resolve();cleanupRegistered=!1;append(n,t){if(this.pendingWrite=this.pendingWrite.then(p.bind(null,n,t)).catch(c),!this.cleanupRegistered)this.cleanupRegistered=!0,St(()=>this.flush())}flush(){return this.pendingWrite}}var f=new z(()=>new g);function d(){return us(f)}function X(n,t,i,r="queued"){let o=m();if(!o)return;let e;try{e=s(n,t,l(i))}catch{e=s(n,t,{diagnostics_payload_failed:!0})}if(r==="now")try{se().appendFileSync(o,e)}catch{}else d().append(o,e)}function l(n){try{return(typeof n==="function"?n():n)??{}}catch{return{diagnostics_payload_failed:!0}}}function s(n,t,i){let r={timestamp:new Date().toISOString(),level:n,event:t,data:i};return _(r)+`
`}function AHe(){return d().flush()}function m(){return a.CLAUDE_CODE_DIAGNOSTICS_FILE}async function I_t(n,t,i){let r=Date.now();X("info",`${n}_started`);try{let o=await t(),e=i?i(o):{};return X("info",`${n}_completed`,{duration_ms:Date.now()-r,...e}),o}catch(o){throw X("error",`${n}_failed`,{duration_ms:Date.now()-r}),o}}
export{X,AHe,I_t};
