// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{G,_kn}from"./chunk-m8nhymg4.js";import{S,f}from"./chunk-v8gz5b0e.js";import{i}from"./chunk-428zme0n.js";import{DEe,Nc,Jd,Zo,Bl}from"./chunk-rx6swq4t.js";import{l}from"./chunk-mfxenhbr.js";import{g}from"./chunk-f8g4f3e3.js";import{Xt,uMe}from"./chunk-e44qnbvj.js";import{be}from"./chunk-ewn8yvfx.js";import{dr}from"./chunk-wqb2b4v0.js";import{Bhr}from"./chunk-mwc7x3q5.js";function p(){return i.CLAUDE_JOB_DIR}async function Uhr(n,e,s){l("tengu_bg_agent_action",{action:S("stop"),source:f(n),jobSessionId:be(G())}),_kn(void 0);let o=p();if(Xt()&&o){let r=new Date().toISOString(),t=await Zo(o,e);if(t&&!Bl(t))await Nc(o,{...t,state:"stopped",detail:"stopped from session",tempo:"idle",needs:void 0,block:void 0,inFlight:void 0,updatedAt:r,firstTerminalAt:t.firstTerminalAt??r},e).catch(Jd);else await Bhr(o,e);if(uMe())process.stdout.write(DEe(s??"Session stopped."))}return g("job_stop_self"),dr(0,"prompt_input_exit",{suppressResumeHint:!0})}
export{Uhr};
