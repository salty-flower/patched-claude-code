// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Mi}from"./chunk-7p6jp6kj.js";import{U}from"./chunk-ekgz6skk.js";import{t}from"./chunk-n5v91jc3.js";import{l}from"./chunk-jkcb7qdd.js";import{Cb}from"./chunk-sc32p4wa.js";import{AZt,CZt,jUn}from"./chunk-rncrmfyt.js";import{oW}from"./chunk-zjry9n9d.js";import{X1}from"./chunk-tzjf7evb.js";import{k1e}from"./chunk-v6p45dpa.js";var f=3000;function n8r(e={}){let r=e.firstFlagFetchWaitMs??f,o=!1,i;return{get ready(){return o},whenReady:()=>i??=d(r).then(()=>{o=!0,c()})}}async function d(e){let r=performance.now();try{oW()}catch(s){l(U(s))}let o=!1,[i,a,m,g]=await Promise.all([n("the plugin-hook registration pass",async()=>{await CZt()}),n("the remote managed-settings load",X1),n("the policy-limits load",Cb),n("the first flag fetch",async()=>{let{timedOut:s}=await k1e({initialize:Mi,budgetMs:e});o=!s})]);t(`[remote-tools] ready to judge calls after ${Math.round(performance.now()-r)}ms: waited ${i}ms for plugin hooks, ${a}ms for remote managed settings, ${m}ms for policy limits, ${g}ms for the first flag fetch (${o?"landed":"not heard in time"})`)}async function n(e,r){let o=performance.now();try{await r()}catch(i){t(`[remote-tools] waiting for ${e} failed; serving goes on without it`,{level:"error"}),l(U(i))}return Math.round(performance.now()-o)}async function c(){try{let e=await AZt(!1)??await jUn();if(e!==void 0)t(`[remote-tools] plugin-delivered hooks are missing from the calls this machine serves, as from its own: ${e}`,{level:"error"})}catch(e){l(U(e))}}
export{n8r};
