// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{Ue,wt}from"./chunk-q8pmvej3.js";var r=new Set([Ue,wt]);function O0e(e){return r.has(e)}function Reo(e,n){return O0e(e)?e:n}function iwt(e){return e===wt?"Select-Object -First, Select-Object -Last or Select-String":"head, tail or grep"}function FG(e){return e.isMcp!==!0&&O0e(e.name)}
export{O0e,Reo,iwt,FG};
