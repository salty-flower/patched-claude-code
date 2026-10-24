// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{Mn}from"./chunk-z8jd3qze.js";var zv="SubagentHandback";var ht="Agent",rQn="Launch a new agent to handle complex, multi-step tasks",b7s="The task for the agent to perform",w7s="A short (3-5 word) description of the task",L2o="Name for the spawned agent.",E7s=`${L2o} Makes it addressable via ${Mn}({to: name}) while running.`,oH="fork",v7s=`agent:builtin:${oH}`,N2o=200,dp="Task",nwt=1e5,y2t=new Set(["Explore","Plan"]),CDe="NOTE: this agent stopped at its ",C2r=`; ${Mn} to task-id to continue`,oQn=` Send the agent a message (${Mn}) to let it continue from where it stopped.`,sQn=`The subagent ended without delivering a report through ${zv}, so no report was delivered.`,iQn=` Send the agent a message (${Mn}) to ask it to deliver its report.`,F2o=` Once its requests are accepted again, send the agent a message (${Mn}) to let it continue from where it stopped instead of starting a new agent.`,aQn="subagent_type is required: the general-purpose agent is not available in this session";
export{zv,ht,rQn,b7s,w7s,L2o,E7s,oH,v7s,N2o,dp,nwt,y2t,CDe,C2r,oQn,sQn,iQn,F2o,aQn};
