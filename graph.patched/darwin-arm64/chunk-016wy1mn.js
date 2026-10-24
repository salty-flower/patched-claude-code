// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{Ti}from"./chunk-27xjmczp.js";import{N}from"./chunk-36ysyspx.js";import{t}from"./chunk-d7b0m8qy.js";import{l}from"./chunk-thm21ca7.js";import{Ly}from"./chunk-cb7h4bvt.js";import{Jsn,Qsn,U6n}from"./chunk-31gxg38t.js";import{cG}from"./chunk-5fzvzdp1.js";import{t2}from"./chunk-19jv4x74.js";import{tGe}from"./chunk-2bpkfx0q.js";var f=3000;function aoo(e={}){let r=e.firstFlagFetchWaitMs??f,o=!1,i;return{get ready(){return o},whenReady:()=>i??=d(r).then(()=>{o=!0,c()})}}async function d(e){let r=performance.now();try{cG()}catch(s){l(N(s))}let o=!1,[i,a,m,g]=await Promise.all([n("the plugin-hook registration pass",async()=>{await Qsn()}),n("the remote managed-settings load",t2),n("the policy-limits load",Ly),n("the first flag fetch",async()=>{let{timedOut:s}=await tGe({initialize:Ti,budgetMs:e});o=!s})]);t(`[remote-tools] ready to judge calls after ${Math.round(performance.now()-r)}ms: waited ${i}ms for plugin hooks, ${a}ms for remote managed settings, ${m}ms for policy limits, ${g}ms for the first flag fetch (${o?"landed":"not heard in time"})`)}async function n(e,r){let o=performance.now();try{await r()}catch(i){t(`[remote-tools] waiting for ${e} failed; serving goes on without it`,{level:"error"}),l(N(i))}return Math.round(performance.now()-o)}async function c(){try{let e=await Jsn(!1)??await U6n();if(e!==void 0)t(`[remote-tools] plugin-delivered hooks are missing from the calls this machine serves, as from its own: ${e}`,{level:"error"})}catch(e){l(N(e))}}
export{aoo};
