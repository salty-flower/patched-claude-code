// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{ww,U2s,iK}from"./chunk-1qxwm3cf.js";import{a}from"./chunk-k4g6y57j.js";import{pt}from"./chunk-61p68esv.js";import{Hqn}from"./chunk-2kxwtq25.js";function Lq(i){return a.CLAUDE_CODE_DISABLE_BUNDLED_SKILLS||(i??pt()).disableBundledSkills===!0}var N0r="allow_bundled_skills";function sje(){return!ww(N0r)}function t(){return U2s()??Hqn}function jG(i){return sje()&&!t().includes(i)}function ete(i,e){return Lq(e)||jG(i)}function v$s(){return iK(N0r,"Bundled skills","are")}function Oqn(i){let e=sje();return`${Lq(i)}:${e}:${e?t().join(","):""}`}function F0r(i,e){return i.type==="prompt"&&i.source==="builtin"&&ete(i.name,e)}
export{Lq,N0r,sje,jG,ete,v$s,Oqn,F0r};
