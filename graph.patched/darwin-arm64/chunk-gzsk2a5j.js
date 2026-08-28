// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Je,O}from"./chunk-e5bq01yj.js";import{ic}from"./chunk-rj9stqfk.js";import{Za}from"./chunk-ftx24v7m.js";function u(i,r,o,n="connection",a){let e=()=>a?.aborted?new Je(`${n} for '${o}' aborted`):new O(`${n} for '${o}' timed out connecting`,"MCP lazy dial timed out connecting");if(r.aborted)return i.catch(()=>{}),Promise.reject(a?.aborted?new Je(`${n} for '${o}' aborted before connect`):new O(`${n} for '${o}' aborted before connect`,"MCP lazy dial aborted before connect"));return new Promise((t,s)=>{let c=()=>s(e());r.addEventListener("abort",c,{once:!0}),i.then((l)=>{r.removeEventListener("abort",c),t(l)},(l)=>{r.removeEventListener("abort",c),s(l)})})}async function dme(i,r){let o=r.timeoutMs??ic(),{signal:n,cleanup:a}=Za(r.signal,{timeoutMs:o,refTimer:!0});try{return await u(i,n,r.serverName,r.context,r.signal)}finally{a()}}var yor=5000,_or=300000;function TXt(i){let r=i?.baseHoldMs??yor,o=i?.maxHoldMs??_or,n=new Map,a=(e,t)=>{let s=n.get(e);return s!==void 0&&t<s.holdUntil};return{shouldSkip(e,t=Date.now()){return a(e,t)},recordFailure(e,t=Date.now()){if(a(e,t))return;let c=(n.get(e)?.count??0)+1,l=Math.min(o,r*2**(c-1));n.set(e,{count:c,holdUntil:t+l})},recordSuccess(e){n.delete(e)},holdUntil(e){return n.get(e)?.holdUntil}}}
export{dme,yor,_or,TXt};
