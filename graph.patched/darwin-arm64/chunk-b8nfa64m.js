// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Rn}from"./chunk-w6agpjsf.js";var DE="SubagentHandback";var ht="Agent",$zn="Launch a new agent to handle complex, multi-step tasks",KHs="The task for the agent to perform",YHs="A short (3-5 word) description of the task",sAo="Name for the spawned agent.",XHs=`${sAo} Makes it addressable via ${Rn}({to: name}) while running.`,NU="fork",JHs=`agent:builtin:${NU}`,Ap="Task",cft=1e5,qDt=new Set(["Explore","Plan"]),MIe="NOTE: this agent stopped at its ",Yxr=`; ${Rn} to task-id to continue`,Uzn=` Send the agent a message (${Rn}) to let it continue from where it stopped.`,Bzn=`The subagent ended without delivering a report through ${DE}, so no report was delivered.`,jzn=` Send the agent a message (${Rn}) to ask it to deliver its report.`,iAo=` Once its requests are accepted again, send the agent a message (${Rn}) to let it continue from where it stopped instead of starting a new agent.`,Wzn="subagent_type is required: the general-purpose agent is not available in this session";
export{DE,ht,$zn,KHs,YHs,sAo,XHs,NU,JHs,Ap,cft,qDt,MIe,Yxr,Uzn,Bzn,jzn,iAo,Wzn};
