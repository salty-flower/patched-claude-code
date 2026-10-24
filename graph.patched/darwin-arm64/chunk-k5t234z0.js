// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{mb,qai,s5}from"./chunk-cg45s1mf.js";import{i}from"./chunk-9a41hw1t.js";import{mt}from"./chunk-32v5ghb4.js";import{Etr}from"./chunk-w6e3tddx.js";function v4(e){return i.CLAUDE_CODE_DISABLE_BUNDLED_SKILLS||(e??mt()).disableBundledSkills===!0}var TVr="allow_bundled_skills";function pVe(){return!mb(TVr)}function n(){return qai()??Etr}function $V(e){return pVe()&&!n().includes(e)}function Roe(e,t){return v4(t)||$V(e)}function sti(){return s5(TVr,"Bundled skills","are")}function wtr(e){let t=pVe();return`${v4(e)}:${t}:${t?n().join(","):""}`}function AVr(e,t){return e.type==="prompt"&&e.source==="builtin"&&Roe(e.name,t)}
export{v4,TVr,pVe,$V,Roe,sti,wtr,AVr};
