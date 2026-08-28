// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{G}from"./chunk-g4zaymy2.js";import{v,c}from"./chunk-jqgad8sa.js";import{E2}from"./chunk-m5nq8j5q.js";import{Ee,bt,x4}from"./chunk-ghnc2x4f.js";import{s}from"./chunk-3jdapt8v.js";import{_}from"./chunk-wx0zfkp2.js";import{a}from"./chunk-bn8q5mbz.js";import{En}from"./chunk-j5h9ds58.js";import{ps,ea,nr,Di}from"./chunk-9ep0zqeb.js";function n(){return a.CLAUDE_JOB_DIR}async function Net(i,e){s("tengu_bg_agent_action",{action:v("stop"),source:c(i),jobSessionId:Ee(G())});let o=n();if(bt()&&o){let r=new Date().toISOString(),t=await nr(o,e);if(t&&!Di(t))await ps(o,{...t,state:"stopped",detail:"stopped from session",tempo:"idle",needs:void 0,block:void 0,inFlight:void 0,updatedAt:r,firstTerminalAt:t.firstTerminalAt??r},e).catch(ea);if(x4())process.stdout.write(E2("Session stopped."))}return _("job_stop_self"),En(0,"prompt_input_exit",{suppressResumeHint:!0})}
export{Net};
