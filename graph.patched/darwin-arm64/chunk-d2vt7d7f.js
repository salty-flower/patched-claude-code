// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{zn}from"./chunk-rb5hrqm8.js";var kw="SubagentHandback";var yt="Agent",rys="Launch a new agent to handle complex, multi-step tasks",oys="The task for the agent to perform",sys="A short (3-5 word) description of the task",juo="Name for the spawned agent.",iys=`${juo} Makes it addressable via ${zn}({to: name}) while running.`,o$="fork",ays=`agent:builtin:${o$}`,Gf="Task",qit=1e5,_xt=new Set(["Explore","Plan"]),DTe="NOTE: this agent stopped at its ",v_r=`; ${zn} to task-id to continue`,LNn=` Send the agent a message (${zn}) to let it continue from where it stopped.`,NNn=`The subagent ended without delivering a report through ${kw}, so no report was delivered.`,FNn=` Send the agent a message (${zn}) to ask it to deliver its report.`,$Nn="subagent_type is required: the general-purpose agent is not available in this session";
export{kw,yt,rys,oys,sys,juo,iys,o$,ays,Gf,qit,_xt,DTe,v_r,LNn,NNn,FNn,$Nn};
