// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{G,F}from"./chunk-aywwjcwq.js";import{t}from"./chunk-gvn18sr5.js";import{c}from"./chunk-z9b8syjk.js";import{Zo}from"./chunk-22qmwqqt.js";var ZCn="in-process";class H7o{captured=null;cliOverride=null;setCliOverride(e){this.cliOverride=e}capture(e){this.captured=e}replaceWith(e){this.captured=e,this.cliOverride=null}}var ays=new G(()=>new H7o);function o(){return ays.of(F().host)}function Nks(e){o().setCliOverride(e)}function eQr(){return o().cliOverride}function tQr(e){o().replaceWith(e),t(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`)}function nQr(){return o().captured!==null}function cir(){let e=o();if(e.cliOverride)e.capture(e.cliOverride),t(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`);else e.capture(Zo("teammateMode",ZCn).value),t(`[TeammateModeSnapshot] Captured from config: ${e.captured}`)}function rvt(){let e=o();if(e.captured===null)c(Error("getTeammateModeFromSnapshot called before capture - this indicates an initialization bug")),cir();return e.captured??ZCn}
export{ZCn,H7o,ays,Nks,eQr,tQr,nQr,cir,rvt};
