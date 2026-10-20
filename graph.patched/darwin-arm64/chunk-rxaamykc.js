// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Bw,q9s,Zq}from"./chunk-jy7b5szn.js";import{a}from"./chunk-h422gpw8.js";import{ft}from"./chunk-qwytg6a7.js";import{H9n}from"./chunk-88wnnbh7.js";function kq(i){return a.CLAUDE_CODE_DISABLE_BUNDLED_SKILLS||(i??ft()).disableBundledSkills===!0}var GFr="allow_bundled_skills";function C2e(){return!Bw(GFr)}function t(){return q9s()??H9n}function Pz(i){return C2e()&&!t().includes(i)}function tne(i,e){return kq(e)||Pz(i)}function EVs(){return Zq(GFr,"Bundled skills","are")}function M9n(i){let e=C2e();return`${kq(i)}:${e}:${e?t().join(","):""}`}function zFr(i,e){return i.type==="prompt"&&i.source==="builtin"&&tne(i.name,e)}
export{kq,GFr,C2e,Pz,tne,EVs,M9n,zFr};
