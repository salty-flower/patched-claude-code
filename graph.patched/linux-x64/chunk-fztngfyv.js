// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{q,pzt}from"./chunk-dxktn51d.js";import{b,c}from"./chunk-m3epja3j.js";import{a}from"./chunk-cd1a8ced.js";import{Yie,jl,bl,eo,Na}from"./chunk-cskmvz0m.js";import{i}from"./chunk-sr4gfmny.js";import{g}from"./chunk-yzndvntb.js";import{$t,nhe}from"./chunk-7p6jp6kj.js";import{Yn}from"./chunk-rncrmfyt.js";import{kRn}from"./chunk-bhy141cf.js";import{ye}from"./chunk-7vca30xa.js";function p(){return a.CLAUDE_JOB_DIR}async function ERn(n,e,s){i("tengu_bg_agent_action",{action:b("stop"),source:c(n),jobSessionId:ye(q())}),pzt(void 0);let o=p();if($t()&&o){let r=new Date().toISOString(),t=await eo(o,e);if(t&&!Na(t))await jl(o,{...t,state:"stopped",detail:"stopped from session",tempo:"idle",needs:void 0,block:void 0,inFlight:void 0,updatedAt:r,firstTerminalAt:t.firstTerminalAt??r},e).catch(bl);else await kRn(o,e);if(nhe())process.stdout.write(Yie(s??"Session stopped."))}return g("job_stop_self"),Yn(0,"prompt_input_exit",{suppressResumeHint:!0})}
export{ERn};
