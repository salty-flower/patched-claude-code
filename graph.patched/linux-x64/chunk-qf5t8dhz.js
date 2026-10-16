// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{q,j1t}from"./chunk-eqmywwjn.js";import{b,c}from"./chunk-fr28a3he.js";import{a}from"./chunk-xwn0mfnc.js";import{Ase,Hl,pl,Qr,ba}from"./chunk-602wadg8.js";import{i}from"./chunk-h723y8sa.js";import{g}from"./chunk-rhe3yjtx.js";import{Ut,jme}from"./chunk-k16gymf7.js";import{Yn}from"./chunk-38nf1dnm.js";import{yTn}from"./chunk-jq0mtw8j.js";import{_e}from"./chunk-67r4k30a.js";function p(){return a.CLAUDE_JOB_DIR}async function hTn(n,e,s){i("tengu_bg_agent_action",{action:b("stop"),source:c(n),jobSessionId:_e(q())}),j1t(void 0);let o=p();if(Ut()&&o){let r=new Date().toISOString(),t=await Qr(o,e);if(t&&!ba(t))await Hl(o,{...t,state:"stopped",detail:"stopped from session",tempo:"idle",needs:void 0,block:void 0,inFlight:void 0,updatedAt:r,firstTerminalAt:t.firstTerminalAt??r},e).catch(pl);else await yTn(o,e);if(jme())process.stdout.write(Ase(s??"Session stopped."))}return g("job_stop_self"),Yn(0,"prompt_input_exit",{suppressResumeHint:!0})}
export{hTn};
