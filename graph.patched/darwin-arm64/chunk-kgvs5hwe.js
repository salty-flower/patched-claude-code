// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{J}from"./chunk-ersar6wn.js";import{d}from"./chunk-36ysyspx.js";import{X}from"./chunk-3kevgx4j.js";import{ie,t}from"./chunk-d7b0m8qy.js";import{m}from"./chunk-wn8xtaqg.js";import{El}from"./chunk-w461d8x8.js";import{YKr}from"./chunk-27xjmczp.js";import{DL}from"./chunk-tvhr9rka.js";import{join as f}from"path";var p=5;class v2t extends Error{constructor(){super("OAuth refresh lock contention: another process is holding the refresh lock");this.name="OauthSlotLockContendedError"}}async function AQn(o,n){if(J())throw m("oauth_token_refresh","oauth_slot_refresh_diskless"),Error("This hosted session (claude-code-server) cannot refresh an OAuth token");let s=DL();await ie().mkdir(s);let i=f(s,o),a=!1,r,l=0;while(!r){l++;try{r=await El(i,{lockfilePath:i,realpath:!1,stale:60000,update:5000,onCompromised:(e)=>{a=!0,t(`OAuth refresh lock ${o} compromised: ${e.message}`,{level:"error"})}})}catch(e){if(e.code==="ELOCKED"){if(l<p){await X(1000+Math.random()*1000);continue}throw new v2t}throw e}}let c={isCompromised:()=>a},h=YKr();try{return await n(c)}finally{try{try{await r()}catch(e){t(`OAuth refresh lock ${o} release failed: ${d(e)}`,{level:"error"})}}finally{h()}}}
export{v2t,AQn};
