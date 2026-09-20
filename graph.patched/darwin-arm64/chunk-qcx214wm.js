// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{J}from"./chunk-sgamszzq.js";import{S,c}from"./chunk-k6smmjsm.js";import{x3,ea,ba,_r,Js}from"./chunk-fpdh0w7q.js";import{Et,R5}from"./chunk-g4c6ggz4.js";import{i}from"./chunk-jxv3x25k.js";import{_}from"./chunk-4akrhkry.js";import{a}from"./chunk-wkhfcbsj.js";import{Gn}from"./chunk-nq62bgfy.js";import{be}from"./chunk-4zc2ctjz.js";function s(){return a.CLAUDE_JOB_DIR}async function nAt(n,e){i("tengu_bg_agent_action",{action:S("stop"),source:c(n),jobSessionId:be(J())});let o=s();if(Et()&&o){let r=new Date().toISOString(),t=await _r(o,e);if(t&&!Js(t))await ea(o,{...t,state:"stopped",detail:"stopped from session",tempo:"idle",needs:void 0,block:void 0,inFlight:void 0,updatedAt:r,firstTerminalAt:t.firstTerminalAt??r},e).catch(ba);if(R5())process.stdout.write(x3("Session stopped."))}return _("job_stop_self"),Gn(0,"prompt_input_exit",{suppressResumeHint:!0})}
export{nAt};
