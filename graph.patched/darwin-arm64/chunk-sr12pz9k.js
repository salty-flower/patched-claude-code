// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{kR,kBo,fJ}from"./chunk-mbr6m81k.js";import{a}from"./chunk-1fpwxv0g.js";import{Xe}from"./chunk-e561d543.js";import{afn}from"./chunk-xvqeqwzw.js";function U$(i){return a.CLAUDE_CODE_DISABLE_BUNDLED_SKILLS||(i??Xe()).disableBundledSkills===!0}var SKn="allow_bundled_skills";function zke(){return!kR(SKn)}function t(){return kBo()??afn}function aq(i){return zke()&&!t().includes(i)}function C5(i,e){return U$(e)||aq(i)}function NLo(){return fJ(SKn,"Bundled skills","are")}function sfn(i){let e=zke();return`${U$(i)}:${e}:${e?t().join(","):""}`}function ifn(i,e){return i.type==="prompt"&&i.source==="builtin"&&C5(i.name,e)}
export{U$,SKn,zke,aq,C5,NLo,sfn,ifn};
