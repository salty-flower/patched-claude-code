// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{K,oOt}from"./chunk-vd0a9d2s.js";import{S,d}from"./chunk-eak61y8v.js";import{Pee,Gl,gl,Yr,da}from"./chunk-28k2pyza.js";import{i}from"./chunk-ne43gjnt.js";import{y}from"./chunk-hz0a4zf6.js";import{a}from"./chunk-70qqbqq4.js";import{Lt,ice}from"./chunk-gcyvvtkw.js";import{Zn}from"./chunk-nwqfvmza.js";import{ye}from"./chunk-vq057nnn.js";function s(){return a.CLAUDE_JOB_DIR}async function Fdn(n,t){i("tengu_bg_agent_action",{action:S("stop"),source:d(n),jobSessionId:ye(K())}),oOt(void 0);let e=s();if(Lt()&&e){let r=new Date().toISOString(),o=await Yr(e,t);if(o&&!da(o))await Gl(e,{...o,state:"stopped",detail:"stopped from session",tempo:"idle",needs:void 0,block:void 0,inFlight:void 0,updatedAt:r,firstTerminalAt:o.firstTerminalAt??r},t).catch(gl);if(ice())process.stdout.write(Pee("Session stopped."))}return y("job_stop_self"),Zn(0,"prompt_input_exit",{suppressResumeHint:!0})}
export{Fdn};
