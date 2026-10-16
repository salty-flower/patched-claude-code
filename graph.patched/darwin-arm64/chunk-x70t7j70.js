// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{K,QBt}from"./chunk-xzypj06m.js";import{S,c}from"./chunk-dnq93t1z.js";import{a}from"./chunk-k4g6y57j.js";import{Hse,Dl,fl,Qr,Sa}from"./chunk-knqsyt69.js";import{i}from"./chunk-52pf9qag.js";import{g}from"./chunk-n1esck2w.js";import{Ut,Kme}from"./chunk-1901fdh6.js";import{Yn}from"./chunk-996thspe.js";import{DCn}from"./chunk-9gftmjpt.js";import{_e}from"./chunk-pk7evkcs.js";function p(){return a.CLAUDE_JOB_DIR}async function MCn(n,e,s){i("tengu_bg_agent_action",{action:S("stop"),source:c(n),jobSessionId:_e(K())}),QBt(void 0);let o=p();if(Ut()&&o){let r=new Date().toISOString(),t=await Qr(o,e);if(t&&!Sa(t))await Dl(o,{...t,state:"stopped",detail:"stopped from session",tempo:"idle",needs:void 0,block:void 0,inFlight:void 0,updatedAt:r,firstTerminalAt:t.firstTerminalAt??r},e).catch(fl);else await DCn(o,e);if(Kme())process.stdout.write(Hse(s??"Session stopped."))}return g("job_stop_self"),Yn(0,"prompt_input_exit",{suppressResumeHint:!0})}
export{MCn};
