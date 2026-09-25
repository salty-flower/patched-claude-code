// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{V,W}from"./chunk-s8xs8s76.js";import{t}from"./chunk-wvb0gwjm.js";import{u}from"./chunk-0dpks9t0.js";import{yo}from"./chunk-9hjfgsa0.js";var Ytn="in-process";class uho{captured=null;cliOverride=null;setCliOverride(e){this.cliOverride=e}capture(e){this.captured=e}replaceWith(e){this.captured=e,this.cliOverride=null}}var T0o=new V(()=>new uho);function o(){return T0o.of(W().host)}function yFo(e){o().setCliOverride(e)}function rvr(){return o().cliOverride}function ovr(e){o().replaceWith(e),t(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`)}function svr(){return o().captured!==null}function SFn(){let e=o();if(e.cliOverride)e.capture(e.cliOverride),t(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`);else e.capture(yo("teammateMode",Ytn).value),t(`[TeammateModeSnapshot] Captured from config: ${e.captured}`)}function lst(){let e=o();if(e.captured===null)u(Error("getTeammateModeFromSnapshot called before capture - this indicates an initialization bug")),SFn();return e.captured??Ytn}
export{Ytn,uho,T0o,yFo,rvr,ovr,svr,SFn,lst};
