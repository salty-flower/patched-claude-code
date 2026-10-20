// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Z}from"./chunk-dxktn51d.js";import{d}from"./chunk-ekgz6skk.js";import{Y}from"./chunk-wk0rbc8w.js";import{ie,t}from"./chunk-n5v91jc3.js";import{m}from"./chunk-yzndvntb.js";import{ml}from"./chunk-r7aw7m5s.js";import{BFr}from"./chunk-7p6jp6kj.js";import{mL}from"./chunk-8hpk64pd.js";import{join as f}from"path";var p=5;class q$t extends Error{constructor(){super("OAuth refresh lock contention: another process is holding the refresh lock");this.name="OauthSlotLockContendedError"}}async function LYn(o,n){if(Z())throw m("oauth_token_refresh","oauth_slot_refresh_diskless"),Error("This hosted session (claude-code-server) cannot refresh an OAuth token");let s=mL();await ie().mkdir(s);let i=f(s,o),a=!1,r,l=0;while(!r){l++;try{r=await ml(i,{lockfilePath:i,realpath:!1,stale:60000,update:5000,onCompromised:(e)=>{a=!0,t(`OAuth refresh lock ${o} compromised: ${e.message}`,{level:"error"})}})}catch(e){if(e.code==="ELOCKED"){if(l<p){await Y(1000+Math.random()*1000);continue}throw new q$t}throw e}}let c={isCompromised:()=>a},h=BFr();try{return await n(c)}finally{try{try{await r()}catch(e){t(`OAuth refresh lock ${o} release failed: ${d(e)}`,{level:"error"})}}finally{h()}}}
export{q$t,LYn};
