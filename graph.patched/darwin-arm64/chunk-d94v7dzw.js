// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Fa}from"./chunk-gcyvvtkw.js";import{V}from"./chunk-tnh13g2g.js";import{t}from"./chunk-b5feae42.js";import{c}from"./chunk-tdmgys2e.js";import{tw}from"./chunk-82z0ksv2.js";import{lGt,cGt,dwn}from"./chunk-nwqfvmza.js";import{u7}from"./chunk-wgy8bpka.js";import{nV}from"./chunk-11jy8ccq.js";import{tnt}from"./chunk-s3g44g7z.js";var g=3000;function $Pr(e={}){let r=e.firstFlagFetchWaitMs??g,o=!1,i;return{get ready(){return o},whenReady:()=>i??=f(r).then(()=>{o=!0,d()})}}async function f(e){let r=performance.now();try{u7()}catch(s){c(V(s))}let o=!1,[i,a,m,l]=await Promise.all([n("the plugin-hook registration pass",async()=>{await cGt()}),n("the remote managed-settings load",nV),n("the policy-limits load",tw),n("the first flag fetch",async()=>{let{timedOut:s}=await tnt({initialize:Fa,budgetMs:e});o=!s})]);t(`[remote-tools] ready to judge calls after ${Math.round(performance.now()-r)}ms: waited ${i}ms for plugin hooks, ${a}ms for remote managed settings, ${m}ms for policy limits, ${l}ms for the first flag fetch (${o?"landed":"not heard in time"})`)}async function n(e,r){let o=performance.now();try{await r()}catch(i){t(`[remote-tools] waiting for ${e} failed; serving goes on without it`,{level:"error"}),c(V(i))}return Math.round(performance.now()-o)}async function d(){try{let e=await lGt(!1)??await dwn();if(e!==void 0)t(`[remote-tools] plugin-delivered hooks are missing from the calls this machine serves, as from its own: ${e}`,{level:"error"})}catch(e){c(V(e))}}
export{$Pr};
