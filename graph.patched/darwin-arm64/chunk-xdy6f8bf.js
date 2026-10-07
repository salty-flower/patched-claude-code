// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{K}from"./chunk-8mvda08c.js";import{_,d}from"./chunk-hdvxmrfb.js";import{yZ,Hl,Vl,Vr,na}from"./chunk-t5y3xk7a.js";import{i}from"./chunk-qbf9wv32.js";import{y}from"./chunk-e3gw32ew.js";import{a}from"./chunk-j77txbjn.js";import{Mt,Eae}from"./chunk-s46qgfx7.js";import{Jn}from"./chunk-y0b3kvx1.js";import{ye}from"./chunk-e3yg5bam.js";function s(){return a.CLAUDE_JOB_DIR}async function min(n,e){i("tengu_bg_agent_action",{action:_("stop"),source:d(n),jobSessionId:ye(K())});let o=s();if(Mt()&&o){let r=new Date().toISOString(),t=await Vr(o,e);if(t&&!na(t))await Hl(o,{...t,state:"stopped",detail:"stopped from session",tempo:"idle",needs:void 0,block:void 0,inFlight:void 0,updatedAt:r,firstTerminalAt:t.firstTerminalAt??r},e).catch(Vl);if(Eae())process.stdout.write(yZ("Session stopped."))}return y("job_stop_self"),Jn(0,"prompt_input_exit",{suppressResumeHint:!0})}
export{min};
