// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{q,j}from"./chunk-a7cah040.js";import{t}from"./chunk-3wz0srxw.js";import{u}from"./chunk-zwbw6dvp.js";import{Do}from"./chunk-8e9pbm89.js";var Qin="in-process";class Gko{captured=null;cliOverride=null;setCliOverride(e){this.cliOverride=e}capture(e){this.captured=e}replaceWith(e){this.captured=e,this.cliOverride=null}}var z3o=new q(()=>new Gko);function o(){return z3o.of(j().host)}function XXo(e){o().setCliOverride(e)}function QIr(){return o().cliOverride}function ZIr(e){o().replaceWith(e),t(`[TeammateModeSnapshot] CLI override cleared, new mode: ${e}`)}function e0r(){return o().captured!==null}function CWn(){let e=o();if(e.cliOverride)e.capture(e.cliOverride),t(`[TeammateModeSnapshot] Captured from CLI override: ${e.captured}`);else e.capture(Do("teammateMode",Qin).value),t(`[TeammateModeSnapshot] Captured from config: ${e.captured}`)}function Tlt(){let e=o();if(e.captured===null)u(Error("getTeammateModeFromSnapshot called before capture - this indicates an initialization bug")),CWn();return e.captured??Qin}
export{Qin,Gko,z3o,XXo,QIr,ZIr,e0r,CWn,Tlt};
