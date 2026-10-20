// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Mi}from"./chunk-bvn0epzr.js";import{U}from"./chunk-nre716m4.js";import{t}from"./chunk-tdxkq523.js";import{l}from"./chunk-277zhca1.js";import{RS}from"./chunk-9v0vbgm1.js";import{UZt,BZt,a1n}from"./chunk-na9nw575.js";import{mW}from"./chunk-2j9r3w5k.js";import{sj}from"./chunk-h53kct1d.js";import{MBe}from"./chunk-v025ehcc.js";var f=3000;function t8r(e={}){let r=e.firstFlagFetchWaitMs??f,o=!1,i;return{get ready(){return o},whenReady:()=>i??=d(r).then(()=>{o=!0,c()})}}async function d(e){let r=performance.now();try{mW()}catch(s){l(U(s))}let o=!1,[i,a,m,g]=await Promise.all([n("the plugin-hook registration pass",async()=>{await BZt()}),n("the remote managed-settings load",sj),n("the policy-limits load",RS),n("the first flag fetch",async()=>{let{timedOut:s}=await MBe({initialize:Mi,budgetMs:e});o=!s})]);t(`[remote-tools] ready to judge calls after ${Math.round(performance.now()-r)}ms: waited ${i}ms for plugin hooks, ${a}ms for remote managed settings, ${m}ms for policy limits, ${g}ms for the first flag fetch (${o?"landed":"not heard in time"})`)}async function n(e,r){let o=performance.now();try{await r()}catch(i){t(`[remote-tools] waiting for ${e} failed; serving goes on without it`,{level:"error"}),l(U(i))}return Math.round(performance.now()-o)}async function c(){try{let e=await UZt(!1)??await a1n();if(e!==void 0)t(`[remote-tools] plugin-delivered hooks are missing from the calls this machine serves, as from its own: ${e}`,{level:"error"})}catch(e){l(U(e))}}
export{t8r};
