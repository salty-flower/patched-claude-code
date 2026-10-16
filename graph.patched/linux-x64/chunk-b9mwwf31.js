// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Sw,tzs,Xq}from"./chunk-m1dg0rsv.js";import{a}from"./chunk-xwn0mfnc.js";import{ut}from"./chunk-a502zyxr.js";import{gqn}from"./chunk-mt1cbwxg.js";function Aq(i){return a.CLAUDE_CODE_DISABLE_BUNDLED_SKILLS||(i??ut()).disableBundledSkills===!0}var gMr="allow_bundled_skills";function X1e(){return!Sw(gMr)}function t(){return tzs()??gqn}function OG(i){return X1e()&&!t().includes(i)}function Kee(i,e){return Aq(e)||OG(i)}function $$s(){return Xq(gMr,"Bundled skills","are")}function mqn(i){let e=X1e();return`${Aq(i)}:${e}:${e?t().join(","):""}`}function hMr(i,e){return i.type==="prompt"&&i.source==="builtin"&&Kee(i.name,e)}
export{Aq,gMr,X1e,OG,Kee,$$s,mqn,hMr};
