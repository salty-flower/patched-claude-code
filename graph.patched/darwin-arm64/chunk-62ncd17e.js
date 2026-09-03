// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{Q}from"./chunk-hdbxv3pp.js";import{b,u}from"./chunk-2avye5sw.js";import{D6,As,$s,tr,Li}from"./chunk-xxz7nkzb.js";import{ve,bt,jG}from"./chunk-h6md7820.js";import{s}from"./chunk-kzyd0fd4.js";import{y}from"./chunk-wpdwa7yz.js";import{a}from"./chunk-pv906ex9.js";import{Pn}from"./chunk-darxmw8c.js";function n(){return a.CLAUDE_JOB_DIR}async function yst(i,e){s("tengu_bg_agent_action",{action:b("stop"),source:u(i),jobSessionId:ve(Q())});let o=n();if(bt()&&o){let r=new Date().toISOString(),t=await tr(o,e);if(t&&!Li(t))await As(o,{...t,state:"stopped",detail:"stopped from session",tempo:"idle",needs:void 0,block:void 0,inFlight:void 0,updatedAt:r,firstTerminalAt:t.firstTerminalAt??r},e).catch($s);if(jG())process.stdout.write(D6("Session stopped."))}return y("job_stop_self"),Pn(0,"prompt_input_exit",{suppressResumeHint:!0})}
export{yst};
