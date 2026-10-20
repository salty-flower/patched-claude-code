// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{An}from"./chunk-s2asvjpd.js";var JE="SubagentHandback";var ht="Agent",I3n="Launch a new agent to handle complex, multi-step tasks",sWs="The task for the agent to perform",iWs="A short (3-5 word) description of the task",w0o="Name for the spawned agent.",aWs=`${w0o} Makes it addressable via ${An}({to: name}) while running.`,FI="fork",lWs=`agent:builtin:${FI}`,jp="Task",Wgt=1e5,e$t=new Set(["Explore","Plan"]),aMe="NOTE: this agent stopped at its ",rDr=`; ${An} to task-id to continue`,O3n=` Send the agent a message (${An}) to let it continue from where it stopped.`,M3n=`The subagent ended without delivering a report through ${JE}, so no report was delivered.`,H3n=` Send the agent a message (${An}) to ask it to deliver its report.`,E0o=` Once its requests are accepted again, send the agent a message (${An}) to let it continue from where it stopped instead of starting a new agent.`,D3n="subagent_type is required: the general-purpose agent is not available in this session";
export{JE,ht,I3n,sWs,iWs,w0o,aWs,FI,lWs,jp,Wgt,e$t,aMe,rDr,O3n,M3n,H3n,E0o,D3n};
