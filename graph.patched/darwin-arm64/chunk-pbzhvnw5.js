// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{j,B}from"./chunk-zhtwayh2.js";import{t}from"./chunk-5q90j22t.js";import{h}from"./chunk-c5ajdz5z.js";import{wo}from"./chunk-9d2zgq9g.js";var Fdt="in-process";class UWn{captured=null;cliOverride=null;setCliOverride(e){this.cliOverride=e}capture(e){this.captured=e}replaceWith(e){this.captured=e,this.cliOverride=null}}var Scr=new j(()=>new UWn);function o(){return Scr.of(B().host)}function lmr(e){o().setCliOverride(e)}function fln(){return o().cliOverride}function mln(e){o().replaceWith(e),t(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`)}function gln(){return o().captured!==null}function $1t(){let e=o();if(e.cliOverride)e.capture(e.cliOverride),t(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`);else e.capture(wo("teammateMode",Fdt).value),t(`[TeammateModeSnapshot] Captured from config: ${e.captured}`)}function MPe(){let e=o();if(e.captured===null)h(Error("getTeammateModeFromSnapshot called before capture - this indicates an initialization bug")),$1t();return e.captured??Fdt}
export{Fdt,UWn,Scr,lmr,fln,mln,gln,$1t,MPe};
