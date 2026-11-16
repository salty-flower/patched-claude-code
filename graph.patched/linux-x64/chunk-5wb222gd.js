// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Re,gt}from"./chunk-gfn3gxth.js";var r=new Set([Re,gt]);function aHe(e){return r.has(e)}function GEi(e,n){return aHe(e)?e:n}function fpt(e){return e===gt?"Select-Object -First, Select-Object -Last or Select-String":"head, tail or grep"}function C$(e){return e.isMcp!==!0&&aHe(e.name)}
export{aHe,GEi,fpt,C$};
