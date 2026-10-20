// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{K,EGt}from"./chunk-kpqr86hf.js";import{S,c}from"./chunk-ny2cqbmq.js";import{a}from"./chunk-h422gpw8.js";import{nae,Wl,bl,eo,Na}from"./chunk-79rentg1.js";import{i}from"./chunk-dj0gyv94.js";import{g}from"./chunk-53e7d9dh.js";import{Ft,lhe}from"./chunk-bvn0epzr.js";import{Yn}from"./chunk-na9nw575.js";import{DRn}from"./chunk-kmfkcf7g.js";import{ye}from"./chunk-fwck5yrp.js";function p(){return a.CLAUDE_JOB_DIR}async function HRn(n,e,s){i("tengu_bg_agent_action",{action:S("stop"),source:c(n),jobSessionId:ye(K())}),EGt(void 0);let o=p();if(Ft()&&o){let r=new Date().toISOString(),t=await eo(o,e);if(t&&!Na(t))await Wl(o,{...t,state:"stopped",detail:"stopped from session",tempo:"idle",needs:void 0,block:void 0,inFlight:void 0,updatedAt:r,firstTerminalAt:t.firstTerminalAt??r},e).catch(bl);else await DRn(o,e);if(lhe())process.stdout.write(nae(s??"Session stopped."))}return g("job_stop_self"),Yn(0,"prompt_input_exit",{suppressResumeHint:!0})}
export{HRn};
