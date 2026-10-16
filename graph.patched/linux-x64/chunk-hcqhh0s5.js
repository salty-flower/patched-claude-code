// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Rn}from"./chunk-24qp6q4p.js";var Hv="SubagentHandback";var ht="Agent",w2n="Launch a new agent to handle complex, multi-step tasks",dHs="The task for the agent to perform",cHs="A short (3-5 word) description of the task",PTo="Name for the spawned agent.",uHs=`${PTo} Makes it addressable via ${Rn}({to: name}) while running.`,PU="fork",pHs=`agent:builtin:${PU}`,Cp="Task",nft=1e5,L0t=new Set(["Explore","Plan"]),CIe="NOTE: this agent stopped at its ",Cxr=`; ${Rn} to task-id to continue`,v2n=` Send the agent a message (${Rn}) to let it continue from where it stopped.`,E2n=`The subagent ended without delivering a report through ${Hv}, so no report was delivered.`,k2n=` Send the agent a message (${Rn}) to ask it to deliver its report.`,ITo=` Once its requests are accepted again, send the agent a message (${Rn}) to let it continue from where it stopped instead of starting a new agent.`,T2n="subagent_type is required: the general-purpose agent is not available in this session";
export{Hv,ht,w2n,dHs,cHs,PTo,uHs,PU,pHs,Cp,nft,L0t,CIe,Cxr,v2n,E2n,k2n,ITo,T2n};
