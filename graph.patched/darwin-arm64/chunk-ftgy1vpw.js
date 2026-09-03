// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{X,G}from"./chunk-hdbxv3pp.js";import{t}from"./chunk-t2jwg94b.js";import{h}from"./chunk-1mtde6n1.js";import{vo}from"./chunk-v5tk64qw.js";var upt="in-process";class B3n{captured=null;cliOverride=null;setCliOverride(e){this.cliOverride=e}capture(e){this.captured=e}replaceWith(e){this.captured=e,this.cliOverride=null}}var B_r=new X(()=>new B3n);function o(){return B_r.of(G().host)}function pkr(e){o().setCliOverride(e)}function Scn(){return o().cliOverride}function bcn(e){o().replaceWith(e),t(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`)}function Tcn(){return o().captured!==null}function XFt(){let e=o();if(e.cliOverride)e.capture(e.cliOverride),t(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`);else e.capture(vo("teammateMode",upt).value),t(`[TeammateModeSnapshot] Captured from config: ${e.captured}`)}function TOe(){let e=o();if(e.captured===null)h(Error("getTeammateModeFromSnapshot called before capture - this indicates an initialization bug")),XFt();return e.captured??upt}
export{upt,B3n,B_r,pkr,Scn,bcn,Tcn,XFt,TOe};
