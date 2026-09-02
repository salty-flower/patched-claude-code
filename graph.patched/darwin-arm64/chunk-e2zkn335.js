// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{K}from"./chunk-38213y7h.js";import{w,c}from"./chunk-9rhc0mtn.js";import{T2}from"./chunk-nf1fwtrr.js";import{ve,wt,D3}from"./chunk-bsdtxcdc.js";import{s}from"./chunk-qw5jhqey.js";import{y}from"./chunk-xtqqhw5t.js";import{a}from"./chunk-w3k8bej2.js";import{On}from"./chunk-fy12d89p.js";import{xs,Aa,fr,Xi}from"./chunk-wwwdzdhk.js";function n(){return a.CLAUDE_JOB_DIR}async function Gnt(i,e){s("tengu_bg_agent_action",{action:w("stop"),source:c(i),jobSessionId:ve(K())});let o=n();if(wt()&&o){let r=new Date().toISOString(),t=await fr(o,e);if(t&&!Xi(t))await xs(o,{...t,state:"stopped",detail:"stopped from session",tempo:"idle",needs:void 0,block:void 0,inFlight:void 0,updatedAt:r,firstTerminalAt:t.firstTerminalAt??r},e).catch(Aa);if(D3())process.stdout.write(T2("Session stopped."))}return y("job_stop_self"),On(0,"prompt_input_exit",{suppressResumeHint:!0})}
export{Gnt};
