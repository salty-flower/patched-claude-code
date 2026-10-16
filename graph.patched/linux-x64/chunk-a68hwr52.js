// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{ce}from"./chunk-eqmywwjn.js";import{d}from"./chunk-w7m8nded.js";import{J}from"./chunk-r2xfgg0x.js";import{se,t}from"./chunk-cwsn6mdf.js";import{m}from"./chunk-rhe3yjtx.js";import{sl}from"./chunk-e6akwa1s.js";import{IHr}from"./chunk-k16gymf7.js";import{Dx}from"./chunk-4zax65nq.js";import{join as f}from"path";var p=5;class F0t extends Error{constructor(){super("OAuth refresh lock contention: another process is holding the refresh lock");this.name="OauthSlotLockContendedError"}}async function C2n(o,n){if(ce())throw m("oauth_token_refresh","oauth_slot_refresh_diskless"),Error("This hosted session (claude-code-server) cannot refresh an OAuth token");let s=Dx();await se().mkdir(s);let i=f(s,o),a=!1,r,l=0;while(!r){l++;try{r=await sl(i,{lockfilePath:i,realpath:!1,stale:60000,update:5000,onCompromised:(e)=>{a=!0,t(`OAuth refresh lock ${o} compromised: ${e.message}`,{level:"error"})}})}catch(e){if(e.code==="ELOCKED"){if(l<p){await J(1000+Math.random()*1000);continue}throw new F0t}throw e}}let c={isCompromised:()=>a},h=IHr();try{return await n(c)}finally{try{try{await r()}catch(e){t(`OAuth refresh lock ${o} release failed: ${d(e)}`,{level:"error"})}}finally{h()}}}
export{F0t,C2n};
