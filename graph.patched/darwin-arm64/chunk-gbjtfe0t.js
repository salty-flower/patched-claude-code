// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{lE,_Ki,ZX}from"./chunk-91tadxqx.js";import{i}from"./chunk-n1cpnz94.js";import{gt}from"./chunk-gbez09mv.js";import{wTr}from"./chunk-s5059ktw.js";function cX(e){return i.CLAUDE_CODE_DISABLE_BUNDLED_SKILLS||(e??gt()).disableBundledSkills===!0}var dgo="allow_bundled_skills";function rJe(){return!lE(dgo)}function n(){return _Ki()??wTr}function W4(e){return rJe()&&!n().includes(e)}function M_e(e,t){return cX(t)||W4(e)}function PBi(){return ZX(dgo,"Bundled skills","are")}function dTr(e){let t=rJe();return`${cX(e)}:${t}:${t?n().join(","):""}`}function cgo(e,t){return e.type==="prompt"&&e.source==="builtin"&&M_e(e.name,t)}
export{cX,dgo,rJe,W4,M_e,PBi,dTr,cgo};
