// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import{K}from"./chunk-2x3q7cfh.js";import{S,u}from"./chunk-w76kejwn.js";import{Sj,Ti,Mi,Zn,Hs}from"./chunk-7wsy8vxb.js";import{_t,pq}from"./chunk-419zdfz3.js";import{i}from"./chunk-an83zrbx.js";import{y}from"./chunk-0vqzb8ad.js";import{a}from"./chunk-zqr5ctyf.js";import{Ee}from"./chunk-6rfqqsva.js";import{xn}from"./chunk-wmzgeczq.js";function s(){return a.CLAUDE_JOB_DIR}async function Zat(n,e){i("tengu_bg_agent_action",{action:S("stop"),source:u(n),jobSessionId:Ee(K())});let o=s();if(_t()&&o){let r=new Date().toISOString(),t=await Zn(o,e);if(t&&!Hs(t))await Ti(o,{...t,state:"stopped",detail:"stopped from session",tempo:"idle",needs:void 0,block:void 0,inFlight:void 0,updatedAt:r,firstTerminalAt:t.firstTerminalAt??r},e).catch(Mi);if(pq())process.stdout.write(Sj("Session stopped."))}return y("job_stop_self"),xn(0,"prompt_input_exit",{suppressResumeHint:!0})}
export{Zat};
