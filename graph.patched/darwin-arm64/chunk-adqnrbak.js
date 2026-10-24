// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{V,n4t}from"./chunk-ersar6wn.js";import{S,c}from"./chunk-ydpbzmt4.js";import{i}from"./chunk-9a41hw1t.js";import{bde,ad,Rl,lo,Ga}from"./chunk-yhsjqng1.js";import{a}from"./chunk-wq923bwc.js";import{g}from"./chunk-wn8xtaqg.js";import{Ut,nSe}from"./chunk-27xjmczp.js";import{Xn}from"./chunk-31gxg38t.js";import{oDn}from"./chunk-hfn0s647.js";import{_e}from"./chunk-19a02m7w.js";function p(){return i.CLAUDE_JOB_DIR}async function rDn(n,e,s){a("tengu_bg_agent_action",{action:S("stop"),source:c(n),jobSessionId:_e(V())}),n4t(void 0);let o=p();if(Ut()&&o){let r=new Date().toISOString(),t=await lo(o,e);if(t&&!Ga(t))await ad(o,{...t,state:"stopped",detail:"stopped from session",tempo:"idle",needs:void 0,block:void 0,inFlight:void 0,updatedAt:r,firstTerminalAt:t.firstTerminalAt??r},e).catch(Rl);else await oDn(o,e);if(nSe())process.stdout.write(bde(s??"Session stopped."))}return g("job_stop_self"),Xn(0,"prompt_input_exit",{suppressResumeHint:!0})}
export{rDn};
