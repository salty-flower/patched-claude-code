// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{z,F}from"./chunk-vd0a9d2s.js";import{t}from"./chunk-b5feae42.js";import{c}from"./chunk-tdmgys2e.js";import{os}from"./chunk-yn9ystxc.js";var w0n="in-process";class ecs{captured=null;cliOverride=null;setCliOverride(e){this.cliOverride=e}capture(e){this.captured=e}replaceWith(e){this.captured=e,this.cliOverride=null}}var HTs=new z(()=>new ecs);function o(){return HTs.of(F().host)}function CMs(e){o().setCliOverride(e)}function Mso(){return o().cliOverride}function Dso(e){o().replaceWith(e),t(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`)}function Lso(){return o().captured!==null}function pfr(){let e=o();if(e.cliOverride)e.capture(e.cliOverride),t(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`);else e.capture(os("teammateMode",w0n).value),t(`[TeammateModeSnapshot] Captured from config: ${e.captured}`)}function NCt(){let e=o();if(e.captured===null)c(Error("getTeammateModeFromSnapshot called before capture - this indicates an initialization bug")),pfr();return e.captured??w0n}
export{w0n,ecs,HTs,CMs,Mso,Dso,Lso,pfr,NCt};
