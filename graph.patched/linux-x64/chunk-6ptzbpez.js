// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{V}from"./chunk-bxhyh54r.js";import{_,c}from"./chunk-aap6zsd0.js";import{K9,Ba,yl,Or,ji}from"./chunk-61992r1j.js";import{i}from"./chunk-gn6mgw10.js";import{y}from"./chunk-dpwtsz9f.js";import{a}from"./chunk-5054mktj.js";import{At,Mne}from"./chunk-f74xvn8g.js";import{Jn}from"./chunk-qazw855w.js";import{_e}from"./chunk-9qkr126n.js";function s(){return a.CLAUDE_JOB_DIR}async function I5t(n,e){i("tengu_bg_agent_action",{action:_("stop"),source:c(n),jobSessionId:_e(V())});let o=s();if(At()&&o){let r=new Date().toISOString(),t=await Or(o,e);if(t&&!ji(t))await Ba(o,{...t,state:"stopped",detail:"stopped from session",tempo:"idle",needs:void 0,block:void 0,inFlight:void 0,updatedAt:r,firstTerminalAt:t.firstTerminalAt??r},e).catch(yl);if(Mne())process.stdout.write(K9("Session stopped."))}return y("job_stop_self"),Jn(0,"prompt_input_exit",{suppressResumeHint:!0})}
export{I5t};
