// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Cn}from"./chunk-kpcfpydw.js";var Xv="SubagentHandback";var ht="Agent",pYn="Launch a new agent to handle complex, multi-step tasks",bjs="The task for the agent to perform",Sjs="A short (3-5 word) description of the task",WMo="Name for the spawned agent.",wjs=`${WMo} Makes it addressable via ${Cn}({to: name}) while running.`,MI="fork",vjs=`agent:builtin:${MI}`,Wp="Task",Hgt=1e5,j$t=new Set(["Explore","Plan"]),eMe="NOTE: this agent stopped at its ",IDr=`; ${Cn} to task-id to continue`,fYn=` Send the agent a message (${Cn}) to let it continue from where it stopped.`,mYn=`The subagent ended without delivering a report through ${Xv}, so no report was delivered.`,gYn=` Send the agent a message (${Cn}) to ask it to deliver its report.`,GMo=` Once its requests are accepted again, send the agent a message (${Cn}) to let it continue from where it stopped instead of starting a new agent.`,hYn="subagent_type is required: the general-purpose agent is not available in this session";
export{Xv,ht,pYn,bjs,Sjs,WMo,wjs,MI,vjs,Wp,Hgt,j$t,eMe,IDr,fYn,mYn,gYn,GMo,hYn};
