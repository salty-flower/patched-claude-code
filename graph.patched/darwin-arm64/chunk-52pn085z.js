// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{nr}from"./chunk-t1vp4e73.js";var Zb="SubagentHandback";var yt="Agent",fls="Launch a new agent to handle complex, multi-step tasks",mls="The task for the agent to perform",gls="A short (3-5 word) description of the task",Goo="Name for the spawned agent.",hls=`${Goo} Makes it addressable via ${nr}({to: name}) while running.`,zN="fork",yls=`agent:builtin:${zN}`,Gf="Task",$rt=1e5,SCt=new Set(["Explore","Plan"]),wCe="NOTE: this agent stopped at its ",Wpr=`; ${nr} to task-id to continue`,ZOn=` Send the agent a message (${nr}) to let it continue from where it stopped.`,e0n=`The subagent ended without delivering a report through ${Zb}, so no report was delivered.`,t0n=` Send the agent a message (${nr}) to ask it to deliver its report.`,n0n="subagent_type is required: the general-purpose agent is not available in this session";
export{Zb,yt,fls,mls,gls,Goo,hls,zN,yls,Gf,$rt,SCt,wCe,Wpr,ZOn,e0n,t0n,n0n};
