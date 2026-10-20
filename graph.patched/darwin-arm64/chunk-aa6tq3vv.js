// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Z}from"./chunk-kpqr86hf.js";import{d}from"./chunk-nre716m4.js";import{Y}from"./chunk-2ckwvz0j.js";import{ie,t}from"./chunk-tdxkq523.js";import{m}from"./chunk-53e7d9dh.js";import{gl}from"./chunk-96vy91sz.js";import{dUr}from"./chunk-bvn0epzr.js";import{yD}from"./chunk-xkz94qys.js";import{join as f}from"path";var p=5;class _$t extends Error{constructor(){super("OAuth refresh lock contention: another process is holding the refresh lock");this.name="OauthSlotLockContendedError"}}async function A4n(o,n){if(Z())throw m("oauth_token_refresh","oauth_slot_refresh_diskless"),Error("This hosted session (claude-code-server) cannot refresh an OAuth token");let s=yD();await ie().mkdir(s);let i=f(s,o),a=!1,r,l=0;while(!r){l++;try{r=await gl(i,{lockfilePath:i,realpath:!1,stale:60000,update:5000,onCompromised:(e)=>{a=!0,t(`OAuth refresh lock ${o} compromised: ${e.message}`,{level:"error"})}})}catch(e){if(e.code==="ELOCKED"){if(l<p){await Y(1000+Math.random()*1000);continue}throw new _$t}throw e}}let c={isCompromised:()=>a},h=dUr();try{return await n(c)}finally{try{try{await r()}catch(e){t(`OAuth refresh lock ${o} release failed: ${d(e)}`,{level:"error"})}}finally{h()}}}
export{_$t,A4n};
