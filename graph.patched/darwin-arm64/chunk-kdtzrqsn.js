// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{J,G}from"./chunk-38213y7h.js";import{n}from"./chunk-ynzt0fm1.js";import{h}from"./chunk-qpcjd2zp.js";import{Lo}from"./chunk-ff2cm6wy.js";var Qyt="in-process";class WZn{captured=null;cliOverride=null;setCliOverride(e){this.cliOverride=e}capture(e){this.captured=e}replaceWith(e){this.captured=e,this.cliOverride=null}}var Hyr=new J(()=>new WZn);function t(){return Hyr.of(G().host)}function Wvr(e){t().setCliOverride(e)}function uyn(){return t().cliOverride}function dyn(e){t().replaceWith(e),n(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`)}function pyn(){return t().captured!==null}function l9t(){let e=t();if(e.cliOverride)e.capture(e.cliOverride),n(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`);else e.capture(Lo("teammateMode",Qyt).value),n(`[TeammateModeSnapshot] Captured from config: ${e.captured}`)}function eMe(){let e=t();if(e.captured===null)h(Error("getTeammateModeFromSnapshot called before capture - this indicates an initialization bug")),l9t();return e.captured??Qyt}
export{Qyt,WZn,Hyr,Wvr,uyn,dyn,pyn,l9t,eMe};
