// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{K,W}from"./chunk-g4zaymy2.js";import{n}from"./chunk-cmkfpkth.js";import{b}from"./chunk-w2hwjymv.js";import{go}from"./chunk-qwt7krt5.js";var oit="in-process";class RNn{captured=null;cliOverride=null;setCliOverride(e){this.cliOverride=e}capture(e){this.captured=e}replaceWith(e){this.captured=e,this.cliOverride=null}}var nsr=new K(()=>new RNn);function t(){return nsr.of(W().host)}function Xgr(e){t().setCliOverride(e)}function KZt(){return t().cliOverride}function YZt(e){t().replaceWith(e),n(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`)}function XZt(){return t().captured!==null}function YPt(){let e=t();if(e.cliOverride)e.capture(e.cliOverride),n(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`);else e.capture(go("teammateMode",oit).value),n(`[TeammateModeSnapshot] Captured from config: ${e.captured}`)}function Hke(){let e=t();if(e.captured===null)b(Error("getTeammateModeFromSnapshot called before capture - this indicates an initialization bug")),YPt();return e.captured??oit}
export{oit,RNn,nsr,Xgr,KZt,YZt,XZt,YPt,Hke};
