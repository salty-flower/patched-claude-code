// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Uw,d3s,W4}from"./chunk-jf4xjz28.js";import{a}from"./chunk-cd1a8ced.js";import{pt}from"./chunk-merbp8kx.js";import{h3n}from"./chunk-dp4gfs1p.js";function m4(i){return a.CLAUDE_CODE_DISABLE_BUNDLED_SKILLS||(i??pt()).disableBundledSkills===!0}var v$r="allow_bundled_skills";function hGe(){return!Uw(v$r)}function t(){return d3s()??h3n}function S2(i){return hGe()&&!t().includes(i)}function qte(i,e){return m4(e)||S2(i)}function NKs(){return W4(v$r,"Bundled skills","are")}function g3n(i){let e=hGe();return`${m4(i)}:${e}:${e?t().join(","):""}`}function E$r(i,e){return i.type==="prompt"&&i.source==="builtin"&&qte(i.name,e)}
export{m4,v$r,hGe,S2,qte,NKs,g3n,E$r};
