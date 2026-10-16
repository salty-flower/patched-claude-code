// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Ki}from"./chunk-1901fdh6.js";import{U}from"./chunk-wkh5syvr.js";import{t}from"./chunk-bnfhb7sj.js";import{l}from"./chunk-e666gr8q.js";import{UE}from"./chunk-qq6fq17v.js";import{bXt,wXt,HDn}from"./chunk-996thspe.js";import{Dj}from"./chunk-a649v17m.js";import{_B}from"./chunk-4pbc6qdm.js";import{XUe}from"./chunk-ccxmf0x7.js";var f=3000;function E6r(e={}){let r=e.firstFlagFetchWaitMs??f,o=!1,i;return{get ready(){return o},whenReady:()=>i??=d(r).then(()=>{o=!0,c()})}}async function d(e){let r=performance.now();try{Dj()}catch(s){l(U(s))}let o=!1,[i,a,m,g]=await Promise.all([n("the plugin-hook registration pass",async()=>{await wXt()}),n("the remote managed-settings load",_B),n("the policy-limits load",UE),n("the first flag fetch",async()=>{let{timedOut:s}=await XUe({initialize:Ki,budgetMs:e});o=!s})]);t(`[remote-tools] ready to judge calls after ${Math.round(performance.now()-r)}ms: waited ${i}ms for plugin hooks, ${a}ms for remote managed settings, ${m}ms for policy limits, ${g}ms for the first flag fetch (${o?"landed":"not heard in time"})`)}async function n(e,r){let o=performance.now();try{await r()}catch(i){t(`[remote-tools] waiting for ${e} failed; serving goes on without it`,{level:"error"}),l(U(i))}return Math.round(performance.now()-o)}async function c(){try{let e=await bXt(!1)??await HDn();if(e!==void 0)t(`[remote-tools] plugin-delivered hooks are missing from the calls this machine serves, as from its own: ${e}`,{level:"error"})}catch(e){l(U(e))}}
export{E6r};
