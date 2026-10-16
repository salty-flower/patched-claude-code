// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{j}from"./chunk-eqmywwjn.js";import{G}from"./chunk-pzq28dp7.js";import{t}from"./chunk-cwsn6mdf.js";import{l}from"./chunk-9pt2nr7j.js";import{ks}from"./chunk-w1yfjb1j.js";var Q2n="in-process";class gDs{captured=null;cliOverride=null;setCliOverride(e){this.cliOverride=e}capture(e){this.captured=e}replaceWith(e){this.captured=e,this.cliOverride=null}}var u8s=new G(()=>new gDs);function o(){return u8s.of(j().host)}function Wti(e){o().setCliOverride(e)}function PAo(){return o().cliOverride}function IAo(e){o().replaceWith(e),t(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`)}function OAo(){return o().captured!==null}function aPr(){let e=o();if(e.cliOverride)e.capture(e.cliOverride),t(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`);else e.capture(ks("teammateMode",Q2n).value),t(`[TeammateModeSnapshot] Captured from config: ${e.captured}`)}function dLt(){let e=o();if(e.captured===null)l(Error("getTeammateModeFromSnapshot called before capture - this indicates an initialization bug")),aPr();return e.captured??Q2n}
export{Q2n,gDs,u8s,Wti,PAo,IAo,OAo,aPr,dLt};
