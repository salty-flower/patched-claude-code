// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{ev,Ghs,R2}from"./chunk-025kqzfg.js";import{a}from"./chunk-rptge3r8.js";import{ut}from"./chunk-gsa86a2x.js";import{WHn}from"./chunk-8qrrr75j.js";function QG(i){return a.CLAUDE_CODE_DISABLE_BUNDLED_SKILLS||(i??ut()).disableBundledSkills===!0}var cgr="allow_bundled_skills";function D0e(){return!ev(cgr)}function t(){return Ghs()??WHn}function Bj(i){return D0e()&&!t().includes(i)}function kJ(i,e){return QG(e)||Bj(i)}function Bds(){return R2(cgr,"Bundled skills","are")}function jHn(i){let e=D0e();return`${QG(i)}:${e}:${e?t().join(","):""}`}function dgr(i,e){return i.type==="prompt"&&i.source==="builtin"&&kJ(i.name,e)}
export{QG,cgr,D0e,Bj,kJ,Bds,jHn,dgr};
