// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{We,Pt}from"./chunk-4qs43hr1.js";var r=new Set([We,Pt]);function Y_e(e){return r.has(e)}function mes(e,n){return Y_e(e)?e:n}function vqe(e){return e===Pt?"Select-Object -First, Select-Object -Last or Select-String":"head, tail or grep"}function jO(e){return e.isMcp!==!0&&Y_e(e.name)}
export{Y_e,mes,vqe,jO};
