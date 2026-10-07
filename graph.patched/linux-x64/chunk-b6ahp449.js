// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Mw,oas,SG}from"./chunk-jb4eqyjv.js";import{a}from"./chunk-869zfth6.js";import{lt}from"./chunk-2c0pkjse.js";import{Dxn}from"./chunk-pzzes76k.js";function Gz(i){return a.CLAUDE_CODE_DISABLE_BUNDLED_SKILLS||(i??lt()).disableBundledSkills===!0}var Tlr="allow_bundled_skills";function THe(){return!Mw(Tlr)}function t(){return oas()??Dxn}function R6(i){return THe()&&!t().includes(i)}function rX(i,e){return Gz(e)||R6(i)}function ets(){return SG(Tlr,"Bundled skills","are")}function Hxn(i){let e=THe();return`${Gz(i)}:${e}:${e?t().join(","):""}`}function Alr(i,e){return i.type==="prompt"&&i.source==="builtin"&&rX(i.name,e)}
export{Gz,Tlr,THe,R6,rX,ets,Hxn,Alr};
