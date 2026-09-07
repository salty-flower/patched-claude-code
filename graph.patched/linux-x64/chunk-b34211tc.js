// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{G,U}from"./chunk-bj7g1p32.js";import{t}from"./chunk-1tk5haqn.js";import{h}from"./chunk-9g6v0ehs.js";import{Ho}from"./chunk-65h6gpwy.js";var wdt="in-process";class lWn{captured=null;cliOverride=null;setCliOverride(e){this.cliOverride=e}capture(e){this.captured=e}replaceWith(e){this.captured=e,this.cliOverride=null}}var Plr=new G(()=>new lWn);function o(){return Plr.of(U().host)}function Hpr(e){o().setCliOverride(e)}function Ban(){return o().cliOverride}function Uan(e){o().replaceWith(e),t(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`)}function jan(){return o().captured!==null}function bNt(){let e=o();if(e.cliOverride)e.capture(e.cliOverride),t(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`);else e.capture(Ho("teammateMode",wdt).value),t(`[TeammateModeSnapshot] Captured from config: ${e.captured}`)}function APe(){let e=o();if(e.captured===null)h(Error("getTeammateModeFromSnapshot called before capture - this indicates an initialization bug")),bNt();return e.captured??wdt}
export{wdt,lWn,Plr,Hpr,Ban,Uan,jan,bNt,APe};
