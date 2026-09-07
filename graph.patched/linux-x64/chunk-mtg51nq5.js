// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Y}from"./chunk-bj7g1p32.js";import{S,u}from"./chunk-vx4qhc14.js";import{Nj,Si,xi,Jn,Ts}from"./chunk-t5k9jbxx.js";import{ke,ht,Sq}from"./chunk-3e93vkg3.js";import{i}from"./chunk-skkcgpsw.js";import{_}from"./chunk-c3bfg9kw.js";import{a}from"./chunk-td8fcebs.js";import{Tn}from"./chunk-y3swhsrk.js";function s(){return a.CLAUDE_JOB_DIR}async function eit(n,e){i("tengu_bg_agent_action",{action:S("stop"),source:u(n),jobSessionId:ke(Y())});let o=s();if(ht()&&o){let r=new Date().toISOString(),t=await Jn(o,e);if(t&&!Ts(t))await Si(o,{...t,state:"stopped",detail:"stopped from session",tempo:"idle",needs:void 0,block:void 0,inFlight:void 0,updatedAt:r,firstTerminalAt:t.firstTerminalAt??r},e).catch(xi);if(Sq())process.stdout.write(Nj("Session stopped."))}return _("job_stop_self"),Tn(0,"prompt_input_exit",{suppressResumeHint:!0})}
export{eit};
