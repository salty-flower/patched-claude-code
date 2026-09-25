// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{K}from"./chunk-s8xs8s76.js";import{S,c}from"./chunk-gas689jj.js";import{$5,Ga,Sl,xr,Pi}from"./chunk-kdpydqc7.js";import{i}from"./chunk-9cfndpw0.js";import{y}from"./chunk-ymkzysdh.js";import{a}from"./chunk-3a4khaz5.js";import{At,wZ}from"./chunk-twxt3h9y.js";import{Zn}from"./chunk-h3bc7dkc.js";import{Se}from"./chunk-kaepya91.js";function s(){return a.CLAUDE_JOB_DIR}async function $2t(n,e){i("tengu_bg_agent_action",{action:S("stop"),source:c(n),jobSessionId:Se(K())});let o=s();if(At()&&o){let r=new Date().toISOString(),t=await xr(o,e);if(t&&!Pi(t))await Ga(o,{...t,state:"stopped",detail:"stopped from session",tempo:"idle",needs:void 0,block:void 0,inFlight:void 0,updatedAt:r,firstTerminalAt:t.firstTerminalAt??r},e).catch(Sl);if(wZ())process.stdout.write($5("Session stopped."))}return y("job_stop_self"),Zn(0,"prompt_input_exit",{suppressResumeHint:!0})}
export{$2t};
