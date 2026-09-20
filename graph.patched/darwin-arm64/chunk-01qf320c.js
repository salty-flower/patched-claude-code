// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{G,z}from"./chunk-sgamszzq.js";import{t}from"./chunk-qmm87fyw.js";import{g}from"./chunk-vzm3bfp5.js";import{To}from"./chunk-rfxxab2b.js";var y0t="in-process";class vyr{captured=null;cliOverride=null;setCliOverride(e){this.cliOverride=e}capture(e){this.captured=e}replaceWith(e){this.captured=e,this.cliOverride=null}}var kzr=new G(()=>new vyr);function o(){return kzr.of(z().host)}function xKr(e){o().setCliOverride(e)}function yDn(){return o().cliOverride}function _Dn(e){o().replaceWith(e),t(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`)}function SDn(){return o().captured!==null}function kJt(){let e=o();if(e.cliOverride)e.capture(e.cliOverride),t(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`);else e.capture(To("teammateMode",y0t).value),t(`[TeammateModeSnapshot] Captured from config: ${e.captured}`)}function y6e(){let e=o();if(e.captured===null)g(Error("getTeammateModeFromSnapshot called before capture - this indicates an initialization bug")),kJt();return e.captured??y0t}
export{y0t,vyr,kzr,xKr,yDn,_Dn,SDn,kJt,y6e};
