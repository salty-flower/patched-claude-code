// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Y}from"./chunk-sgyvc67j.js";import{_,u}from"./chunk-am8gnetv.js";import{K6,Ii,Gi,nr,Is}from"./chunk-nhz30e6h.js";import{_t,Y4}from"./chunk-e02s7cks.js";import{i}from"./chunk-z0p50v56.js";import{S}from"./chunk-a25t2bvk.js";import{a}from"./chunk-dv6tepz3.js";import{On}from"./chunk-e55d0yhx.js";import{Ee}from"./chunk-epfresbq.js";function s(){return a.CLAUDE_JOB_DIR}async function spt(n,e){i("tengu_bg_agent_action",{action:_("stop"),source:u(n),jobSessionId:Ee(Y())});let o=s();if(_t()&&o){let r=new Date().toISOString(),t=await nr(o,e);if(t&&!Is(t))await Ii(o,{...t,state:"stopped",detail:"stopped from session",tempo:"idle",needs:void 0,block:void 0,inFlight:void 0,updatedAt:r,firstTerminalAt:t.firstTerminalAt??r},e).catch(Gi);if(Y4())process.stdout.write(K6("Session stopped."))}return S("job_stop_self"),On(0,"prompt_input_exit",{suppressResumeHint:!0})}
export{spt};
