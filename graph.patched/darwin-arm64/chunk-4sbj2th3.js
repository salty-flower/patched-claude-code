// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{j}from"./chunk-kpqr86hf.js";import{W}from"./chunk-cne7d53x.js";import{t}from"./chunk-tdxkq523.js";import{l}from"./chunk-277zhca1.js";import{ks}from"./chunk-k79rgf3d.js";var n5n="in-process";class Ezs{captured=null;cliOverride=null;setCliOverride(e){this.cliOverride=e}capture(e){this.captured=e}replaceWith(e){this.captured=e,this.cliOverride=null}}var Uoi=new W(()=>new Ezs);function o(){return Uoi.of(j().host)}function Hfi(e){o().setCliOverride(e)}function SDo(){return o().cliOverride}function bDo(e){o().replaceWith(e),t(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`)}function wDo(){return o().captured!==null}function TLr(){let e=o();if(e.cliOverride)e.capture(e.cliOverride),t(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`);else e.capture(ks("teammateMode",n5n).value),t(`[TeammateModeSnapshot] Captured from config: ${e.captured}`)}function z$t(){let e=o();if(e.captured===null)l(Error("getTeammateModeFromSnapshot called before capture - this indicates an initialization bug")),TLr();return e.captured??n5n}
export{n5n,Ezs,Uoi,Hfi,SDo,bDo,wDo,TLr,z$t};
