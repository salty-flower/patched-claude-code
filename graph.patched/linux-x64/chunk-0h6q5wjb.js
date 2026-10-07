// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{K}from"./chunk-aywwjcwq.js";import{_,d}from"./chunk-yffha6me.js";import{J7,Ml,ql,qr,na}from"./chunk-vanx1pds.js";import{i}from"./chunk-s90w5q15.js";import{y}from"./chunk-tzahwj8w.js";import{a}from"./chunk-869zfth6.js";import{Ht,gae}from"./chunk-m0sj7y8g.js";import{Jn}from"./chunk-9wqh5j7s.js";import{ye}from"./chunk-cs06r2mk.js";function s(){return a.CLAUDE_JOB_DIR}async function Ysn(n,e){i("tengu_bg_agent_action",{action:_("stop"),source:d(n),jobSessionId:ye(K())});let o=s();if(Ht()&&o){let r=new Date().toISOString(),t=await qr(o,e);if(t&&!na(t))await Ml(o,{...t,state:"stopped",detail:"stopped from session",tempo:"idle",needs:void 0,block:void 0,inFlight:void 0,updatedAt:r,firstTerminalAt:t.firstTerminalAt??r},e).catch(ql);if(gae())process.stdout.write(J7("Session stopped."))}return y("job_stop_self"),Jn(0,"prompt_input_exit",{suppressResumeHint:!0})}
export{Ysn};
