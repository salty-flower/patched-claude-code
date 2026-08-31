// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{K}from"./chunk-30zk17wm.js";import{H,c}from"./chunk-r1b219q3.js";import{bj}from"./chunk-c5847t4t.js";import{ke,Ht,RV}from"./chunk-1e5y3pjf.js";import{s}from"./chunk-yqfv1yd3.js";import{_}from"./chunk-ykrbqs98.js";import{a}from"./chunk-m9gbfvns.js";import{Dn}from"./chunk-h6btyxas.js";import{Rs,Aa,pr,Yi}from"./chunk-dmdmtq6p.js";function n(){return a.CLAUDE_JOB_DIR}async function znt(i,e){s("tengu_bg_agent_action",{action:H("stop"),source:c(i),jobSessionId:ke(K())});let o=n();if(Ht()&&o){let r=new Date().toISOString(),t=await pr(o,e);if(t&&!Yi(t))await Rs(o,{...t,state:"stopped",detail:"stopped from session",tempo:"idle",needs:void 0,block:void 0,inFlight:void 0,updatedAt:r,firstTerminalAt:t.firstTerminalAt??r},e).catch(Aa);if(RV())process.stdout.write(bj("Session stopped."))}return _("job_stop_self"),Dn(0,"prompt_input_exit",{suppressResumeHint:!0})}
export{znt};
