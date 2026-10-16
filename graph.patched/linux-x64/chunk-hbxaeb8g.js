// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{qi}from"./chunk-k16gymf7.js";import{U}from"./chunk-w7m8nded.js";import{t}from"./chunk-cwsn6mdf.js";import{l}from"./chunk-9pt2nr7j.js";import{Fv}from"./chunk-rea1zhrb.js";import{iXt,aXt,m0n}from"./chunk-38nf1dnm.js";import{Tj}from"./chunk-s6ygxfp3.js";import{d1}from"./chunk-rs9575as.js";import{qUe}from"./chunk-mavwfp29.js";var f=3000;function $2r(e={}){let r=e.firstFlagFetchWaitMs??f,o=!1,i;return{get ready(){return o},whenReady:()=>i??=d(r).then(()=>{o=!0,c()})}}async function d(e){let r=performance.now();try{Tj()}catch(s){l(U(s))}let o=!1,[i,a,m,g]=await Promise.all([n("the plugin-hook registration pass",async()=>{await aXt()}),n("the remote managed-settings load",d1),n("the policy-limits load",Fv),n("the first flag fetch",async()=>{let{timedOut:s}=await qUe({initialize:qi,budgetMs:e});o=!s})]);t(`[remote-tools] ready to judge calls after ${Math.round(performance.now()-r)}ms: waited ${i}ms for plugin hooks, ${a}ms for remote managed settings, ${m}ms for policy limits, ${g}ms for the first flag fetch (${o?"landed":"not heard in time"})`)}async function n(e,r){let o=performance.now();try{await r()}catch(i){t(`[remote-tools] waiting for ${e} failed; serving goes on without it`,{level:"error"}),l(U(i))}return Math.round(performance.now()-o)}async function c(){try{let e=await iXt(!1)??await m0n();if(e!==void 0)t(`[remote-tools] plugin-delivered hooks are missing from the calls this machine serves, as from its own: ${e}`,{level:"error"})}catch(e){l(U(e))}}
export{$2r};
