// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{Csc as d,Esc as v}from"./_668.js";import{Qcd as n,Ycd as h}from"./_802.js";import{tfd as o,yfd as T}from"./_806.js";import{Jid as m,Thd as i,Uhd as u,krd as M}from"./_812.js";import{Dxd as l,Exd as c}from"./_839.js";var C={};l(C,{DEFAULT_TEAMMATE_MODE:()=>a,TeammateModeSnapshot:()=>r,captureTeammateModeSnapshot:()=>s,clearCliTeammateModeOverride:()=>g,getCliTeammateModeOverride:()=>S,getTeammateModeFromSnapshot:()=>x,hasTeammateModeSnapshot:()=>O,setCliTeammateModeOverride:()=>f,teammateModeSnapshots:()=>p});class r{captured=null;cliOverride=null;setCliOverride(e){this.cliOverride=e}capture(e){this.captured=e}replaceWith(e){this.captured=e,this.cliOverride=null}}function t(){return p.of(m().host)}function f(e){t().setCliOverride(e)}function S(){return t().cliOverride}function g(e){t().replaceWith(e),o(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`)}function O(){return t().captured!==null}function s(){let e=t();if(e.cliOverride)e.capture(e.cliOverride),o(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`);else e.capture(d("teammateMode",a).value),o(`[TeammateModeSnapshot] Captured from config: ${e.captured}`)}function x(){let e=t();if(e.captured===null)n(Error("getTeammateModeFromSnapshot called before capture - this indicates an initialization bug")),s();return e.captured??a}var a="in-process",p;var E=c(()=>{M();u();T();h();v();p=new i(()=>new r)});
export{a as D7b,r as E7b,p as F7b,f as G7b,S as H7b,g as I7b,O as J7b,s as K7b,x as L7b,C as M7b,E as N7b};
