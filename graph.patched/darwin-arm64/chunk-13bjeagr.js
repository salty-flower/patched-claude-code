// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{j,B}from"./chunk-cet8na02.js";import{t}from"./chunk-w930ag8r.js";import{h}from"./chunk-e0gvmsm3.js";import{Ao}from"./chunk-2bygyys4.js";var ght="in-process";class v5n{captured=null;cliOverride=null;setCliOverride(e){this.cliOverride=e}capture(e){this.captured=e}replaceWith(e){this.captured=e,this.cliOverride=null}}var Jyr=new j(()=>new v5n);function o(){return Jyr.of(B().host)}function JEr(e){o().setCliOverride(e)}function Lmn(){return o().cliOverride}function Mmn(e){o().replaceWith(e),t(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`)}function Nmn(){return o().captured!==null}function ojt(){let e=o();if(e.cliOverride)e.capture(e.cliOverride),t(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`);else e.capture(Ao("teammateMode",ght).value),t(`[TeammateModeSnapshot] Captured from config: ${e.captured}`)}function rMe(){let e=o();if(e.captured===null)h(Error("getTeammateModeFromSnapshot called before capture - this indicates an initialization bug")),ojt();return e.captured??ght}
export{ght,v5n,Jyr,JEr,Lmn,Mmn,Nmn,ojt,rMe};
