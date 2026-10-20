// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{j}from"./chunk-dxktn51d.js";import{W}from"./chunk-2fbnw5gg.js";import{t}from"./chunk-n5v91jc3.js";import{l}from"./chunk-jkcb7qdd.js";import{Es}from"./chunk-rhxx790c.js";var a6n="in-process";class iGs{captured=null;cliOverride=null;setCliOverride(e){this.cliOverride=e}capture(e){this.captured=e}replaceWith(e){this.captured=e,this.cliOverride=null}}var eoi=new W(()=>new iGs);function o(){return eoi.of(j().host)}function Ypi(e){o().setCliOverride(e)}function nDo(){return o().cliOverride}function rDo(e){o().replaceWith(e),t(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`)}function oDo(){return o().captured!==null}function TLr(){let e=o();if(e.cliOverride)e.capture(e.cliOverride),t(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`);else e.capture(Es("teammateMode",a6n).value),t(`[TeammateModeSnapshot] Captured from config: ${e.captured}`)}function _Ft(){let e=o();if(e.captured===null)l(Error("getTeammateModeFromSnapshot called before capture - this indicates an initialization bug")),TLr();return e.captured??a6n}
export{a6n,iGs,eoi,Ypi,nDo,rDo,oDo,TLr,_Ft};
