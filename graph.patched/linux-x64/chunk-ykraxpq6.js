// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{G,F}from"./chunk-g79wjybr.js";import{t}from"./chunk-p46wpkfz.js";import{c}from"./chunk-3s94kw4m.js";import{os}from"./chunk-tcg2b56s.js";var rMn="in-process";class hls{captured=null;cliOverride=null;setCliOverride(e){this.cliOverride=e}capture(e){this.captured=e}replaceWith(e){this.captured=e,this.cliOverride=null}}var XAs=new G(()=>new hls);function o(){return XAs.of(F().host)}function BHs(e){o().setCliOverride(e)}function iso(){return o().cliOverride}function aso(e){o().replaceWith(e),t(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`)}function lso(){return o().captured!==null}function zpr(){let e=o();if(e.cliOverride)e.capture(e.cliOverride),t(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`);else e.capture(os("teammateMode",rMn).value),t(`[TeammateModeSnapshot] Captured from config: ${e.captured}`)}function ATt(){let e=o();if(e.captured===null)c(Error("getTeammateModeFromSnapshot called before capture - this indicates an initialization bug")),zpr();return e.captured??rMn}
export{rMn,hls,XAs,BHs,iso,aso,lso,zpr,ATt};
