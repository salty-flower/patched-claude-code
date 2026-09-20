// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{J}from"./chunk-txfrkyzp.js";import{b,c}from"./chunk-p9tbyvzw.js";import{vV,Zi,Sa,_r,Js}from"./chunk-adxfsceb.js";import{vt,S8}from"./chunk-30p0nwys.js";import{i}from"./chunk-5a4y4a7y.js";import{_}from"./chunk-61g2sn1g.js";import{a}from"./chunk-q2vrcqny.js";import{Gn}from"./chunk-v4zgc4qd.js";import{Se}from"./chunk-b8r1xdtr.js";function s(){return a.CLAUDE_JOB_DIR}async function BEt(n,e){i("tengu_bg_agent_action",{action:b("stop"),source:c(n),jobSessionId:Se(J())});let o=s();if(vt()&&o){let r=new Date().toISOString(),t=await _r(o,e);if(t&&!Js(t))await Zi(o,{...t,state:"stopped",detail:"stopped from session",tempo:"idle",needs:void 0,block:void 0,inFlight:void 0,updatedAt:r,firstTerminalAt:t.firstTerminalAt??r},e).catch(Sa);if(S8())process.stdout.write(vV("Session stopped."))}return _("job_stop_self"),Gn(0,"prompt_input_exit",{suppressResumeHint:!0})}
export{BEt};
