// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{q,B}from"./chunk-4bw62nzm.js";import{t}from"./chunk-gyf58rwf.js";import{c}from"./chunk-gsnbskq4.js";import{hs}from"./chunk-js2bhabe.js";var pFn="in-process";class d_s{captured=null;cliOverride=null;setCliOverride(e){this.cliOverride=e}capture(e){this.captured=e}replaceWith(e){this.captured=e,this.cliOverride=null}}var eFs=new q(()=>new d_s);function o(){return eFs.of(B().host)}function uGs(e){o().setCliOverride(e)}function $po(){return o().cliOverride}function Upo(e){o().replaceWith(e),t(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`)}function Bpo(){return o().captured!==null}function Y_r(){let e=o();if(e.cliOverride)e.capture(e.cliOverride),t(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`);else e.capture(hs("teammateMode",pFn).value),t(`[TeammateModeSnapshot] Captured from config: ${e.captured}`)}function Wxt(){let e=o();if(e.captured===null)c(Error("getTeammateModeFromSnapshot called before capture - this indicates an initialization bug")),Y_r();return e.captured??pFn}
export{pFn,d_s,eFs,uGs,$po,Upo,Bpo,Y_r,Wxt};
