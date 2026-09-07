// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{K}from"./chunk-zhtwayh2.js";import{b,u}from"./chunk-gnrvsty9.js";import{z2,bi,Ii,Jn,Rs}from"./chunk-aybj1x5t.js";import{ve,ht,IG}from"./chunk-n495pc0t.js";import{i}from"./chunk-vtd04czk.js";import{y}from"./chunk-m0jywms0.js";import{a}from"./chunk-dq2s4wjn.js";import{Rn}from"./chunk-1692k4g5.js";function s(){return a.CLAUDE_JOB_DIR}async function git(n,e){i("tengu_bg_agent_action",{action:b("stop"),source:u(n),jobSessionId:ve(K())});let o=s();if(ht()&&o){let r=new Date().toISOString(),t=await Jn(o,e);if(t&&!Rs(t))await bi(o,{...t,state:"stopped",detail:"stopped from session",tempo:"idle",needs:void 0,block:void 0,inFlight:void 0,updatedAt:r,firstTerminalAt:t.firstTerminalAt??r},e).catch(Ii);if(IG())process.stdout.write(z2("Session stopped."))}return y("job_stop_self"),Rn(0,"prompt_input_exit",{suppressResumeHint:!0})}
export{git};
