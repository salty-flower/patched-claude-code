// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{$e,Tt}from"./chunk-0wqb5n04.js";var r=new Set([$e,Tt]);function Uce(e){return r.has(e)}function yvo(e,n){return Uce(e)?e:n}function dOt(e){return e===Tt?"Select-Object -First, Select-Object -Last or Select-String":"head, tail or grep"}function ZO(e){return e.isMcp!==!0&&Uce(e.name)}
export{Uce,yvo,dOt,ZO};
