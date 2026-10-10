// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{K,_Dt}from"./chunk-4bw62nzm.js";import{S,d}from"./chunk-76anb6yt.js";import{a}from"./chunk-yvnhkg35.js";import{Dne,ic,dl,ro,Ra}from"./chunk-m2gn903q.js";import{i}from"./chunk-4nygtnjw.js";import{g}from"./chunk-2hb5361r.js";import{Nt,yue}from"./chunk-bk5ct2gw.js";import{Zn}from"./chunk-sfn1dbxq.js";import{ye}from"./chunk-t05cqr1r.js";function p(){return a.CLAUDE_JOB_DIR}async function ghn(n,e,s){i("tengu_bg_agent_action",{action:S("stop"),source:d(n),jobSessionId:ye(K())}),_Dt(void 0);let t=p();if(Nt()&&t){let r=new Date().toISOString(),o=await ro(t,e);if(o&&!Ra(o))await ic(t,{...o,state:"stopped",detail:"stopped from session",tempo:"idle",needs:void 0,block:void 0,inFlight:void 0,updatedAt:r,firstTerminalAt:o.firstTerminalAt??r},e).catch(dl);if(yue())process.stdout.write(Dne(s??"Session stopped."))}return g("job_stop_self"),Zn(0,"prompt_input_exit",{suppressResumeHint:!0})}
export{ghn};
