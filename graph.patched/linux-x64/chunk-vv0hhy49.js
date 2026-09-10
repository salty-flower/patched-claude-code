// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{X}from"./chunk-6n7yk222.js";import{_,u}from"./chunk-0rpkhv24.js";import{Fz,Hi,Gi,nr,Hs}from"./chunk-f4v140c7.js";import{_t,$4}from"./chunk-ce4ppmnp.js";import{i}from"./chunk-nx6yj2w6.js";import{b}from"./chunk-t5df5mky.js";import{a}from"./chunk-1bwwmttj.js";import{Mn}from"./chunk-2byjyg85.js";import{ve}from"./chunk-gdmteaec.js";function s(){return a.CLAUDE_JOB_DIR}async function Gdt(n,e){i("tengu_bg_agent_action",{action:_("stop"),source:u(n),jobSessionId:ve(X())});let o=s();if(_t()&&o){let r=new Date().toISOString(),t=await nr(o,e);if(t&&!Hs(t))await Hi(o,{...t,state:"stopped",detail:"stopped from session",tempo:"idle",needs:void 0,block:void 0,inFlight:void 0,updatedAt:r,firstTerminalAt:t.firstTerminalAt??r},e).catch(Gi);if($4())process.stdout.write(Fz("Session stopped."))}return b("job_stop_self"),Mn(0,"prompt_input_exit",{suppressResumeHint:!0})}
export{Gdt};
