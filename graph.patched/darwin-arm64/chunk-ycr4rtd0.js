// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{gw,hDa,Aye}from"./chunk-yyx3r3ec.js";import{i}from"./chunk-428zme0n.js";import{St}from"./chunk-x4r54n7x.js";import{cVr}from"./chunk-3b88b6s8.js";function WZ(e){return i.CLAUDE_CODE_DISABLE_BUNDLED_SKILLS||(e??St()).disableBundledSkills===!0}var wBo="allow_bundled_skills";function Git(){return!gw(wBo)}function n(){return hDa()??cVr}function bY(e){return Git()&&!n().includes(e)}function tTe(e,t){return WZ(t)||bY(e)}function PTa(){return Aye(wBo,"Bundled skills","are")}function rVr(e){let t=Git();return`${WZ(e)}:${t}:${t?n().join(","):""}`}function EBo(e,t){return e.type==="prompt"&&e.source==="builtin"&&tTe(e.name,t)}
export{WZ,wBo,Git,bY,tTe,PTa,rVr,EBo};
