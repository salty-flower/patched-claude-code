// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{z}from"./chunk-a7cah040.js";import{_,c}from"./chunk-g9zw99sb.js";import{nX,ja,_l,Hr,ji}from"./chunk-fggdnxfn.js";import{i}from"./chunk-aykv0zbt.js";import{y}from"./chunk-sc069zjc.js";import{a}from"./chunk-1fpwxv0g.js";import{Tt,jne}from"./chunk-er6f56rj.js";import{Jn}from"./chunk-59zy4j10.js";import{_e}from"./chunk-t2v3fz5w.js";function s(){return a.CLAUDE_JOB_DIR}async function FKt(n,e){i("tengu_bg_agent_action",{action:_("stop"),source:c(n),jobSessionId:_e(z())});let o=s();if(Tt()&&o){let r=new Date().toISOString(),t=await Hr(o,e);if(t&&!ji(t))await ja(o,{...t,state:"stopped",detail:"stopped from session",tempo:"idle",needs:void 0,block:void 0,inFlight:void 0,updatedAt:r,firstTerminalAt:t.firstTerminalAt??r},e).catch(_l);if(jne())process.stdout.write(nX("Session stopped."))}return y("job_stop_self"),Jn(0,"prompt_input_exit",{suppressResumeHint:!0})}
export{FKt};
