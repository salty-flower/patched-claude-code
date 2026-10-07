// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Pa}from"./chunk-s46qgfx7.js";import{q}from"./chunk-fqsygynq.js";import{t}from"./chunk-f8eqwxpt.js";import{c}from"./chunk-qfs4y3ww.js";import{Aw}from"./chunk-bby3a211.js";import{cBt,dBt,Ihn}from"./chunk-y0b3kvx1.js";import{VY}from"./chunk-7ewj4b02.js";import{DJ}from"./chunk-mcfyw853.js";import{KQe}from"./chunk-vjymfz95.js";var g=3000;function iCr(e={}){let r=e.firstFlagFetchWaitMs??g,o=!1,i;return{get ready(){return o},whenReady:()=>i??=f(r).then(()=>{o=!0,d()})}}async function f(e){let r=performance.now();try{VY()}catch(s){c(q(s))}let o=!1,[i,a,m,l]=await Promise.all([n("the plugin-hook registration pass",async()=>{await dBt()}),n("the remote managed-settings load",DJ),n("the policy-limits load",Aw),n("the first flag fetch",async()=>{let{timedOut:s}=await KQe({initialize:Pa,budgetMs:e});o=!s})]);t(`[remote-tools] ready to judge calls after ${Math.round(performance.now()-r)}ms: waited ${i}ms for plugin hooks, ${a}ms for remote managed settings, ${m}ms for policy limits, ${l}ms for the first flag fetch (${o?"landed":"not heard in time"})`)}async function n(e,r){let o=performance.now();try{await r()}catch(i){t(`[remote-tools] waiting for ${e} failed; serving goes on without it`,{level:"error"}),c(q(i))}return Math.round(performance.now()-o)}async function d(){try{let e=await cBt(!1)??await Ihn();if(e!==void 0)t(`[remote-tools] plugin-delivered hooks are missing from the calls this machine serves, as from its own: ${e}`,{level:"error"})}catch(e){c(q(e))}}
export{iCr};
