// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Fe,kt}from"./chunk-ma17m27h.js";var r=new Set([Fe,kt]);function Kce(e){return r.has(e)}function fvo(e,n){return Kce(e)?e:n}function AOt(e){return e===kt?"Select-Object -First, Select-Object -Last or Select-String":"head, tail or grep"}function r0(e){return e.isMcp!==!0&&Kce(e.name)}
export{Kce,fvo,AOt,r0};
