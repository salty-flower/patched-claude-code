// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{E5a as T,p5a as c,q5a as l}from"./_467.js";import{Hxc as I,sxc as u}from"./_674.js";import{Qcd as g,Ycd as C}from"./_802.js";import{tfd as o,yfd as p}from"./_806.js";import{Nvd as x,Vud as f}from"./_834.js";p();x();C();I();T();async function h(r){let t=u();if(!t?.teamName||!t?.agentName){o("[Reconnection] computeInitialTeamContext: No teammate context set (not a teammate)");return}let{teamName:e,agentId:i,agentName:n}=t,a=await l(e,r);if(!a){g(f(Error(`[computeInitialTeamContext] Could not read team file for ${e}`),"[computeInitialTeamContext] Could not read team file"));return}let s=c(e),m=!i;return o(`[Reconnection] Computed initial team context for ${m?"leader":`teammate ${n}`} in team ${e}`),{teamName:e,teamFilePath:s,leadAgentId:a.leadAgentId,selfAgentId:i,selfAgentName:n,isLeader:m,teammates:{}}}async function v(r,t,e,i){let n=await l(t,i);if(!n){o(`[initializeTeammateContextFromSession] Could not read team file for ${t} (agent: ${e}) \u2014 team may have been disbanded`,{level:"error"});return}let a=n.members.find((d)=>d.name===e);if(!a)o(`[Reconnection] Member ${e} not found in team ${t} - may have been removed`);let s=a?.agentId,m=c(t);r((d)=>({...d,teamContext:{teamName:t,teamFilePath:m,leadAgentId:n.leadAgentId,selfAgentId:s,selfAgentName:e,isLeader:!1,teammates:{}}})),o(`[Reconnection] Initialized agent context from session for ${e} in team ${t}`)}
export{h as gc,v as hc};
