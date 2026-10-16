// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{j}from"./chunk-xzypj06m.js";import{z}from"./chunk-r0a9v21k.js";import{t}from"./chunk-bnfhb7sj.js";import{l}from"./chunk-e666gr8q.js";import{ks}from"./chunk-aw531er1.js";var X6n="in-process";class hNs{captured=null;cliOverride=null;setCliOverride(e){this.cliOverride=e}capture(e){this.captured=e}replaceWith(e){this.captured=e,this.cliOverride=null}}var J8s=new z(()=>new hNs);function o(){return J8s.of(j().host)}function Rni(e){o().setCliOverride(e)}function aRo(){return o().cliOverride}function lRo(e){o().replaceWith(e),t(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`)}function dRo(){return o().captured!==null}function uIr(){let e=o();if(e.cliOverride)e.capture(e.cliOverride),t(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`);else e.capture(ks("teammateMode",X6n).value),t(`[TeammateModeSnapshot] Captured from config: ${e.captured}`)}function ULt(){let e=o();if(e.captured===null)l(Error("getTeammateModeFromSnapshot called before capture - this indicates an initialization bug")),uIr();return e.captured??X6n}
export{X6n,hNs,J8s,Rni,aRo,lRo,dRo,uIr,ULt};
