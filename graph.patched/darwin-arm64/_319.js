// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{M4 as u,T4 as j}from"./_444.js";import{_7a as b,h8a as y,r7a as S,s7a as l,x7a as _}from"./_472.js";import{Oeb as g,cfb as x}from"./_498.js";import{Djc as d,Fjc as O,Skc as h,skc as f,xkc as c}from"./_668.js";import{$$c as I,T$c as a}from"./_796.js";import{bad as v}from"./_797.js";import{xad as m}from"./_798.js";import{$ad as k,Zad as p}from"./_800.js";import{Mid as s,krd as D}from"./_812.js";import{Bwd as B,swd as i,twd as n}from"./_836.js";import{Exd as A}from"./_839.js";function E(){return m.CLAUDE_JOB_DIR}async function U(w,e){p("tengu_bg_agent_action",{action:i("stop"),source:n(w),jobSessionId:d(s())});let o=E();if(f()&&o){let r=new Date().toISOString(),t=await _(o,e);if(t&&!b(t))await S(o,{...t,state:"stopped",detail:"stopped from session",tempo:"idle",needs:void 0,block:void 0,inFlight:void 0,updatedAt:r,firstTerminalAt:t.firstTerminalAt??r},e).catch(l);if(c())process.stdout.write(g("Session stopped."))}return a("job_stop_self"),u(0,"prompt_input_exit",{suppressResumeHint:!0})}var J=A(()=>{D();x();I();k();O();B();h();v();j();y()});
export{U as cH,J as dH};
