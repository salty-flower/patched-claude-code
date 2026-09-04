// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{z,q}from"./chunk-yhfssb7x.js";import{t}from"./chunk-84crg0gy.js";import{h}from"./chunk-jx9d5yeb.js";import{Io}from"./chunk-wrjgq3nt.js";var Wft="in-process";class J4n{captured=null;cliOverride=null;setCliOverride(e){this.cliOverride=e}capture(e){this.captured=e}replaceWith(e){this.captured=e,this.cliOverride=null}}var Rwr=new z(()=>new J4n);function o(){return Rwr.of(q().host)}function oIr(e){o().setCliOverride(e)}function apn(){return o().cliOverride}function lpn(e){o().replaceWith(e),t(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`)}function cpn(){return o().captured!==null}function YUt(){let e=o();if(e.cliOverride)e.capture(e.cliOverride),t(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`);else e.capture(Io("teammateMode",Wft).value),t(`[TeammateModeSnapshot] Captured from config: ${e.captured}`)}function GDe(){let e=o();if(e.captured===null)h(Error("getTeammateModeFromSnapshot called before capture - this indicates an initialization bug")),YUt();return e.captured??Wft}
export{Wft,J4n,Rwr,oIr,apn,lpn,cpn,YUt,GDe};
