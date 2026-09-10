// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{W,B}from"./chunk-sgyvc67j.js";import{t}from"./chunk-wbbe5mtc.js";import{h}from"./chunk-2rebt4am.js";import{To}from"./chunk-49yzxkrk.js";var Kyt="in-process";class lYn{captured=null;cliOverride=null;setCliOverride(e){this.cliOverride=e}capture(e){this.captured=e}replaceWith(e){this.captured=e,this.cliOverride=null}}var Kwr=new W(()=>new lYn);function o(){return Kwr.of(B().host)}function akr(e){o().setCliOverride(e)}function Khn(){return o().cliOverride}function Yhn(e){o().replaceWith(e),t(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`)}function Xhn(){return o().captured!==null}function tWt(){let e=o();if(e.cliOverride)e.capture(e.cliOverride),t(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`);else e.capture(To("teammateMode",Kyt).value),t(`[TeammateModeSnapshot] Captured from config: ${e.captured}`)}function SNe(){let e=o();if(e.captured===null)h(Error("getTeammateModeFromSnapshot called before capture - this indicates an initialization bug")),tWt();return e.captured??Kyt}
export{Kyt,lYn,Kwr,akr,Khn,Yhn,Xhn,tWt,SNe};
