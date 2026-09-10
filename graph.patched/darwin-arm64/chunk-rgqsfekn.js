// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{J}from"./chunk-cet8na02.js";import{_,u}from"./chunk-jxvdfgn0.js";import{T6,Ti,ji,tr,Rs}from"./chunk-vxv2z7a4.js";import{_t,H4}from"./chunk-vryy7b5x.js";import{i}from"./chunk-mx473n83.js";import{S}from"./chunk-qc0xda2j.js";import{a}from"./chunk-qymratxs.js";import{On}from"./chunk-tavwd3sq.js";import{we}from"./chunk-aynexwte.js";function s(){return a.CLAUDE_JOB_DIR}async function Aut(n,e){i("tengu_bg_agent_action",{action:_("stop"),source:u(n),jobSessionId:we(J())});let o=s();if(_t()&&o){let r=new Date().toISOString(),t=await tr(o,e);if(t&&!Rs(t))await Ti(o,{...t,state:"stopped",detail:"stopped from session",tempo:"idle",needs:void 0,block:void 0,inFlight:void 0,updatedAt:r,firstTerminalAt:t.firstTerminalAt??r},e).catch(ji);if(H4())process.stdout.write(T6("Session stopped."))}return S("job_stop_self"),On(0,"prompt_input_exit",{suppressResumeHint:!0})}
export{Aut};
