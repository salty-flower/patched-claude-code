// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{J,W}from"./chunk-30zk17wm.js";import{n}from"./chunk-d0cr5d2v.js";import{h}from"./chunk-ma4xtxwv.js";import{$o}from"./chunk-mkvzkqgh.js";var X_t="in-process";class MZn{captured=null;cliOverride=null;setCliOverride(e){this.cliOverride=e}capture(e){this.captured=e}replaceWith(e){this.captured=e,this.cliOverride=null}}var H_r=new J(()=>new MZn);function t(){return H_r.of(W().host)}function $kr(e){t().setCliOverride(e)}function a_n(){return t().cliOverride}function l_n(e){t().replaceWith(e),n(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`)}function c_n(){return t().captured!==null}function aWt(){let e=t();if(e.cliOverride)e.capture(e.cliOverride),n(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`);else e.capture($o("teammateMode",X_t).value),n(`[TeammateModeSnapshot] Captured from config: ${e.captured}`)}function Q$e(){let e=t();if(e.captured===null)h(Error("getTeammateModeFromSnapshot called before capture - this indicates an initialization bug")),aWt();return e.captured??X_t}
export{X_t,MZn,H_r,$kr,a_n,l_n,c_n,aWt,Q$e};
