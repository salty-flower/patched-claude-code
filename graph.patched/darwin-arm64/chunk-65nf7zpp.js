// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{U}from"./chunk-ersar6wn.js";import{W}from"./chunk-3y73jbfr.js";import{t}from"./chunk-d7b0m8qy.js";import{l}from"./chunk-thm21ca7.js";import{js}from"./chunk-rq620hy6.js";var nZn="in-process";class nQs{captured=null;cliOverride=null;setCliOverride(e){this.cliOverride=e}capture(e){this.captured=e}replaceWith(e){this.captured=e,this.cliOverride=null}}var obi=new W(()=>new nQs);function o(){return obi.of(U().host)}function mxi(e){o().setCliOverride(e)}function rzo(){return o().cliOverride}function ozo(e){o().replaceWith(e),t(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`)}function szo(){return o().captured!==null}function wGr(){let e=o();if(e.cliOverride)e.capture(e.cliOverride),t(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`);else e.capture(js("teammateMode",nZn).value),t(`[TeammateModeSnapshot] Captured from config: ${e.captured}`)}function V2t(){let e=o();if(e.captured===null)l(Error("getTeammateModeFromSnapshot called before capture - this indicates an initialization bug")),wGr();return e.captured??nZn}
export{nZn,nQs,obi,mxi,rzo,ozo,szo,wGr,V2t};
