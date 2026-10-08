// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{K,qIt}from"./chunk-g79wjybr.js";import{b,d}from"./chunk-bkr1h20c.js";import{Nee,zl,gl,Yr,da}from"./chunk-ztvkra0t.js";import{i}from"./chunk-nayw0pf7.js";import{y}from"./chunk-68vq239n.js";import{a}from"./chunk-rptge3r8.js";import{Lt,ece}from"./chunk-cxjvwxsa.js";import{Zn}from"./chunk-g263vvvn.js";import{ye}from"./chunk-ehn9f19s.js";function s(){return a.CLAUDE_JOB_DIR}async function bdn(n,t){i("tengu_bg_agent_action",{action:b("stop"),source:d(n),jobSessionId:ye(K())}),qIt(void 0);let e=s();if(Lt()&&e){let r=new Date().toISOString(),o=await Yr(e,t);if(o&&!da(o))await zl(e,{...o,state:"stopped",detail:"stopped from session",tempo:"idle",needs:void 0,block:void 0,inFlight:void 0,updatedAt:r,firstTerminalAt:o.firstTerminalAt??r},t).catch(gl);if(ece())process.stdout.write(Nee("Session stopped."))}return y("job_stop_self"),Zn(0,"prompt_input_exit",{suppressResumeHint:!0})}
export{bdn};
