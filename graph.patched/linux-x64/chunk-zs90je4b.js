// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{z,B}from"./chunk-6n7yk222.js";import{t}from"./chunk-cmg3b5hg.js";import{h}from"./chunk-p9k2m8jj.js";import{To}from"./chunk-kra019rv.js";var Hyt="in-process";class P9n{captured=null;cliOverride=null;setCliOverride(e){this.cliOverride=e}capture(e){this.captured=e}replaceWith(e){this.captured=e,this.cliOverride=null}}var cwr=new z(()=>new P9n);function o(){return cwr.of(B().host)}function wTr(e){o().setCliOverride(e)}function whn(){return o().cliOverride}function vhn(e){o().replaceWith(e),t(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`)}function Ehn(){return o().captured!==null}function Dzt(){let e=o();if(e.cliOverride)e.capture(e.cliOverride),t(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`);else e.capture(To("teammateMode",Hyt).value),t(`[TeammateModeSnapshot] Captured from config: ${e.captured}`)}function a$e(){let e=o();if(e.captured===null)h(Error("getTeammateModeFromSnapshot called before capture - this indicates an initialization bug")),Dzt();return e.captured??Hyt}
export{Hyt,P9n,cwr,wTr,whn,vhn,Ehn,Dzt,a$e};
