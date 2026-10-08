// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Na}from"./chunk-cxjvwxsa.js";import{q}from"./chunk-5g6j8x8p.js";import{t}from"./chunk-p46wpkfz.js";import{c}from"./chunk-3s94kw4m.js";import{ew}from"./chunk-vxjrz2d6.js";import{Kzt,Yzt,GSn}from"./chunk-g263vvvn.js";import{sJ}from"./chunk-kc6070xy.js";import{Vq}from"./chunk-cycmn83x.js";import{Vtt}from"./chunk-aj5fdhsh.js";var g=3000;function FPr(e={}){let r=e.firstFlagFetchWaitMs??g,o=!1,i;return{get ready(){return o},whenReady:()=>i??=f(r).then(()=>{o=!0,d()})}}async function f(e){let r=performance.now();try{sJ()}catch(s){c(q(s))}let o=!1,[i,a,m,l]=await Promise.all([n("the plugin-hook registration pass",async()=>{await Yzt()}),n("the remote managed-settings load",Vq),n("the policy-limits load",ew),n("the first flag fetch",async()=>{let{timedOut:s}=await Vtt({initialize:Na,budgetMs:e});o=!s})]);t(`[remote-tools] ready to judge calls after ${Math.round(performance.now()-r)}ms: waited ${i}ms for plugin hooks, ${a}ms for remote managed settings, ${m}ms for policy limits, ${l}ms for the first flag fetch (${o?"landed":"not heard in time"})`)}async function n(e,r){let o=performance.now();try{await r()}catch(i){t(`[remote-tools] waiting for ${e} failed; serving goes on without it`,{level:"error"}),c(q(i))}return Math.round(performance.now()-o)}async function d(){try{let e=await Kzt(!1)??await GSn();if(e!==void 0)t(`[remote-tools] plugin-delivered hooks are missing from the calls this machine serves, as from its own: ${e}`,{level:"error"})}catch(e){c(q(e))}}
export{FPr};
