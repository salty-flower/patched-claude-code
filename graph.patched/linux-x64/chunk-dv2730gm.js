// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{K,z}from"./chunk-2vv5hpw3.js";import{n}from"./chunk-akz0cj0f.js";import{_}from"./chunk-6ce4s97h.js";import{go}from"./chunk-se5a0ehn.js";var rit="in-process";class E1n{captured=null;cliOverride=null;setCliOverride(e){this.cliOverride=e}capture(e){this.captured=e}replaceWith(e){this.captured=e,this.cliOverride=null}}var Kir=new K(()=>new E1n);function t(){return Kir.of(z().host)}function zgr(e){t().setCliOverride(e)}function qZt(){return t().cliOverride}function VZt(e){t().replaceWith(e),n(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`)}function KZt(){return t().captured!==null}function YRt(){let e=t();if(e.cliOverride)e.capture(e.cliOverride),n(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`);else e.capture(go("teammateMode",rit).value),n(`[TeammateModeSnapshot] Captured from config: ${e.captured}`)}function LHe(){let e=t();if(e.captured===null)_(Error("getTeammateModeFromSnapshot called before capture - this indicates an initialization bug")),YRt();return e.captured??rit}
export{rit,E1n,Kir,zgr,qZt,VZt,KZt,YRt,LHe};
