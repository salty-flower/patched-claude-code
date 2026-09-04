// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{Q}from"./chunk-yhfssb7x.js";import{b,u}from"./chunk-g1553wr3.js";import{nj,xs,Gs,er,$i}from"./chunk-0xb8rq8q.js";import{Re,bt,wq}from"./chunk-vtwn1md5.js";import{s}from"./chunk-v5cr82c7.js";import{_}from"./chunk-tfyzvdvk.js";import{a}from"./chunk-g2ngvza5.js";import{On}from"./chunk-5e9qk3ys.js";function n(){return a.CLAUDE_JOB_DIR}async function alt(i,e){s("tengu_bg_agent_action",{action:b("stop"),source:u(i),jobSessionId:Re(Q())});let o=n();if(bt()&&o){let r=new Date().toISOString(),t=await er(o,e);if(t&&!$i(t))await xs(o,{...t,state:"stopped",detail:"stopped from session",tempo:"idle",needs:void 0,block:void 0,inFlight:void 0,updatedAt:r,firstTerminalAt:t.firstTerminalAt??r},e).catch(Gs);if(wq())process.stdout.write(nj("Session stopped."))}return _("job_stop_self"),On(0,"prompt_input_exit",{suppressResumeHint:!0})}
export{alt};
