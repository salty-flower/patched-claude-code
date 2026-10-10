// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Eb,HRs,cV}from"./chunk-mke1mg83.js";import{a}from"./chunk-yvnhkg35.js";import{ft}from"./chunk-x0dc37w9.js";import{xUn}from"./chunk-gjq2f3sw.js";function U6(i){return a.CLAUDE_CODE_DISABLE_BUNDLED_SKILLS||(i??ft()).disableBundledSkills===!0}var Nwr="allow_bundled_skills";function LFe(){return!Eb(Nwr)}function t(){return HRs()??xUn}function dW(i){return LFe()&&!t().includes(i)}function gQ(i,e){return U6(e)||dW(i)}function wEs(){return cV(Nwr,"Bundled skills","are")}function RUn(i){let e=LFe();return`${U6(i)}:${e}:${e?t().join(","):""}`}function Fwr(i,e){return i.type==="prompt"&&i.source==="builtin"&&gQ(i.name,e)}
export{U6,Nwr,LFe,dW,gQ,wEs,RUn,Fwr};
