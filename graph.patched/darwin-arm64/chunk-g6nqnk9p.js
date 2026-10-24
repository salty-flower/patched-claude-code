// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{Be,Tt}from"./chunk-j2d407c1.js";var r=new Set([Be,Tt]);function qwe(e){return r.has(e)}function nms(e,n){return qwe(e)?e:n}function N5e(e){return e===Tt?"Select-Object -First, Select-Object -Last or Select-String":"head, tail or grep"}function a0(e){return e.isMcp!==!0&&qwe(e.name)}
export{qwe,nms,N5e,a0};
