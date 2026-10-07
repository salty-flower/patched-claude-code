// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{xa}from"./chunk-m0sj7y8g.js";import{V}from"./chunk-fdatg9ax.js";import{t}from"./chunk-gvn18sr5.js";import{c}from"./chunk-z9b8syjk.js";import{Tw}from"./chunk-bpw92mrj.js";import{YBt,XBt,phn}from"./chunk-9wqh5j7s.js";import{F9}from"./chunk-ab4khrmp.js";import{RQ}from"./chunk-xbt8ktes.js";import{U7e}from"./chunk-dsmnbp4a.js";var g=3000;function mEr(e={}){let r=e.firstFlagFetchWaitMs??g,o=!1,i;return{get ready(){return o},whenReady:()=>i??=f(r).then(()=>{o=!0,d()})}}async function f(e){let r=performance.now();try{F9()}catch(s){c(V(s))}let o=!1,[i,a,m,l]=await Promise.all([n("the plugin-hook registration pass",async()=>{await XBt()}),n("the remote managed-settings load",RQ),n("the policy-limits load",Tw),n("the first flag fetch",async()=>{let{timedOut:s}=await U7e({initialize:xa,budgetMs:e});o=!s})]);t(`[remote-tools] ready to judge calls after ${Math.round(performance.now()-r)}ms: waited ${i}ms for plugin hooks, ${a}ms for remote managed settings, ${m}ms for policy limits, ${l}ms for the first flag fetch (${o?"landed":"not heard in time"})`)}async function n(e,r){let o=performance.now();try{await r()}catch(i){t(`[remote-tools] waiting for ${e} failed; serving goes on without it`,{level:"error"}),c(V(i))}return Math.round(performance.now()-o)}async function d(){try{let e=await YBt(!1)??await phn();if(e!==void 0)t(`[remote-tools] plugin-delivered hooks are missing from the calls this machine serves, as from its own: ${e}`,{level:"error"})}catch(e){c(V(e))}}
export{mEr};
