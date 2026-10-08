// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{nr}from"./chunk-yc7bn1pd.js";var QS="SubagentHandback";var yt="Agent",xas="Launch a new agent to handle complex, multi-step tasks",Pas="The task for the agent to perform",Ias="A short (3-5 word) description of the task",hoo="Name for the spawned agent.",Oas=`${hoo} Makes it addressable via ${nr}({to: name}) while running.`,FN="fork",Mas=`agent:builtin:${FN}`,zf="Task",Irt=1e5,lTt=new Set(["Explore","Plan"]),mTe="NOTE: this agent stopped at its ",vpr=`; ${nr} to task-id to continue`,DOn=` Send the agent a message (${nr}) to let it continue from where it stopped.`,LOn=`The subagent ended without delivering a report through ${QS}, so no report was delivered.`,NOn=` Send the agent a message (${nr}) to ask it to deliver its report.`,$On="subagent_type is required: the general-purpose agent is not available in this session";
export{QS,yt,xas,Pas,Ias,hoo,Oas,FN,Mas,zf,Irt,lTt,mTe,vpr,DOn,LOn,NOn,$On};
