// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{G,W}from"./chunk-txfrkyzp.js";import{t}from"./chunk-847hpqqs.js";import{m}from"./chunk-kh3dq6rw.js";import{To}from"./chunk-e6d1qtmj.js";var uIt="in-process";class eyr{captured=null;cliOverride=null;setCliOverride(e){this.cliOverride=e}capture(e){this.captured=e}replaceWith(e){this.captured=e,this.cliOverride=null}}var WWr=new G(()=>new eyr);function o(){return WWr.of(W().host)}function q3r(e){o().setCliOverride(e)}function tMn(){return o().cliOverride}function nMn(e){o().replaceWith(e),t(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`)}function rMn(){return o().captured!==null}function g7t(){let e=o();if(e.cliOverride)e.capture(e.cliOverride),t(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`);else e.capture(To("teammateMode",uIt).value),t(`[TeammateModeSnapshot] Captured from config: ${e.captured}`)}function aze(){let e=o();if(e.captured===null)m(Error("getTeammateModeFromSnapshot called before capture - this indicates an initialization bug")),g7t();return e.captured??uIt}
export{uIt,eyr,WWr,q3r,tMn,nMn,rMn,g7t,aze};
