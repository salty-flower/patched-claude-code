// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{z,F}from"./chunk-8mvda08c.js";import{t}from"./chunk-f8eqwxpt.js";import{c}from"./chunk-qfs4y3ww.js";import{Zo}from"./chunk-ndpdr195.js";var yRn="in-process";class _Zo{captured=null;cliOverride=null;setCliOverride(e){this.cliOverride=e}capture(e){this.captured=e}replaceWith(e){this.captured=e,this.cliOverride=null}}var Gys=new z(()=>new _Zo);function o(){return Gys.of(F().host)}function wks(e){o().setCliOverride(e)}function RJr(){return o().cliOverride}function xJr(e){o().replaceWith(e),t(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`)}function PJr(){return o().captured!==null}function Iir(){let e=o();if(e.cliOverride)e.capture(e.cliOverride),t(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`);else e.capture(Zo("teammateMode",yRn).value),t(`[TeammateModeSnapshot] Captured from config: ${e.captured}`)}function mEt(){let e=o();if(e.captured===null)c(Error("getTeammateModeFromSnapshot called before capture - this indicates an initialization bug")),Iir();return e.captured??yRn}
export{yRn,_Zo,Gys,wks,RJr,xJr,PJr,Iir,mEt};
