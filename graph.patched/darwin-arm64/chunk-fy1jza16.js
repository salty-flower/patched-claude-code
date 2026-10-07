// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Mw,jas,IG}from"./chunk-napcsc17.js";import{a}from"./chunk-j77txbjn.js";import{ct}from"./chunk-861a7whf.js";import{Zxn}from"./chunk-w87c3rwr.js";function nG(i){return a.CLAUDE_CODE_DISABLE_BUNDLED_SKILLS||(i??ct()).disableBundledSkills===!0}var Vlr="allow_bundled_skills";function HHe(){return!Mw(Vlr)}function t(){return jas()??Zxn}function L4(i){return HHe()&&!t().includes(i)}function dX(i,e){return nG(e)||L4(i)}function Fts(){return IG(Vlr,"Bundled skills","are")}function Qxn(i){let e=HHe();return`${nG(i)}:${e}:${e?t().join(","):""}`}function qlr(i,e){return i.type==="prompt"&&i.source==="builtin"&&dX(i.name,e)}
export{nG,Vlr,HHe,L4,dX,Fts,Qxn,qlr};
