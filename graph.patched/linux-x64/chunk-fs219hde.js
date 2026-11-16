// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{G,sEn}from"./chunk-r3adsed5.js";import{b,f}from"./chunk-zt4gdxqw.js";import{i}from"./chunk-5g5ea6r9.js";import{Cve,Nc,Qd,Zo,Bl}from"./chunk-ea1fhjdw.js";import{l}from"./chunk-hs29jdk6.js";import{g}from"./chunk-ztxp0r5w.js";import{Xt,a0e}from"./chunk-a5a37ds7.js";import{Se}from"./chunk-f0kd5f7k.js";import{lr}from"./chunk-zaxe68t4.js";import{yhr}from"./chunk-ns2hy6p8.js";function p(){return i.CLAUDE_JOB_DIR}async function _hr(n,e,s){l("tengu_bg_agent_action",{action:b("stop"),source:f(n),jobSessionId:Se(G())}),sEn(void 0);let o=p();if(Xt()&&o){let r=new Date().toISOString(),t=await Zo(o,e);if(t&&!Bl(t))await Nc(o,{...t,state:"stopped",detail:"stopped from session",tempo:"idle",needs:void 0,block:void 0,inFlight:void 0,updatedAt:r,firstTerminalAt:t.firstTerminalAt??r},e).catch(Qd);else await yhr(o,e);if(a0e())process.stdout.write(Cve(s??"Session stopped."))}return g("job_stop_self"),lr(0,"prompt_input_exit",{suppressResumeHint:!0})}
export{_hr};
