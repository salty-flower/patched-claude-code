// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{hw,A0a,Sye}from"./chunk-77eek6nm.js";import{i}from"./chunk-5g5ea6r9.js";import{bt}from"./chunk-4rkc6f3s.js";import{$Vr}from"./chunk-jcssd2x1.js";function MZ(e){return i.CLAUDE_CODE_DISABLE_BUNDLED_SKILLS||(e??bt()).disableBundledSkills===!0}var V1o="allow_bundled_skills";function Iit(){return!hw(V1o)}function n(){return A0a()??$Vr}function d7(e){return Iit()&&!n().includes(e)}function VEe(e,t){return MZ(t)||d7(e)}function UEa(){return Sye(V1o,"Bundled skills","are")}function PVr(e){let t=Iit();return`${MZ(e)}:${t}:${t?n().join(","):""}`}function q1o(e,t){return e.type==="prompt"&&e.source==="builtin"&&VEe(e.name,t)}
export{MZ,V1o,Iit,d7,VEe,UEa,PVr,q1o};
