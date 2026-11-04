// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{G,Fan}from"./chunk-ecyypctx.js";import{S,p}from"./chunk-h58p4vvs.js";import{i}from"./chunk-n1cpnz94.js";import{vge,nc,wd,xo,Sl}from"./chunk-fz08tv6f.js";import{l}from"./chunk-hm8vbfs0.js";import{g}from"./chunk-ad5ya8vz.js";import{_e}from"./chunk-7c3dhrhj.js";import{jt,MTe}from"./chunk-axsjfnwn.js";import{er}from"./chunk-0x9x817t.js";import{wYn}from"./chunk-tcczb0m3.js";function m(){return i.CLAUDE_JOB_DIR}async function bYn(n,e,s){l("tengu_bg_agent_action",{action:S("stop"),source:p(n),jobSessionId:_e(G())}),Fan(void 0);let o=m();if(jt()&&o){let r=new Date().toISOString(),t=await xo(o,e);if(t&&!Sl(t))await nc(o,{...t,state:"stopped",detail:"stopped from session",tempo:"idle",needs:void 0,block:void 0,inFlight:void 0,updatedAt:r,firstTerminalAt:t.firstTerminalAt??r},e).catch(wd);else await wYn(o,e);if(MTe())process.stdout.write(vge(s??"Session stopped."))}return g("job_stop_self"),er(0,"prompt_input_exit",{suppressResumeHint:!0})}
export{bYn};
