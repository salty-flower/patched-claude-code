// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{tE,xys,$6}from"./chunk-zttk1yx5.js";import{a}from"./chunk-70qqbqq4.js";import{ut}from"./chunk-48by85wp.js";import{aMn}from"./chunk-d8rvqxzq.js";function c6(i){return a.CLAUDE_CODE_DISABLE_BUNDLED_SKILLS||(i??ut()).disableBundledSkills===!0}var Pgr="allow_bundled_skills";function GDe(){return!tE(Pgr)}function t(){return xys()??aMn}function e2(i){return GDe()&&!t().includes(i)}function P7(i,e){return c6(e)||e2(i)}function Cus(){return $6(Pgr,"Bundled skills","are")}function iMn(i){let e=GDe();return`${c6(i)}:${e}:${e?t().join(","):""}`}function Igr(i,e){return i.type==="prompt"&&i.source==="builtin"&&P7(i.name,e)}
export{c6,Pgr,GDe,e2,P7,Cus,iMn,Igr};
