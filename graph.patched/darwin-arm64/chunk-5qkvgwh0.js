// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Fe,At}from"./chunk-zp1a5mr6.js";var r=new Set([Fe,At]);function Rue(e){return r.has(e)}function aIo(e,n){return Rue(e)?e:n}function iDt(e){return e===At?"Select-Object -First, Select-Object -Last or Select-String":"head, tail or grep"}function qx(e){return e.isMcp!==!0&&Rue(e.name)}
export{Rue,aIo,iDt,qx};
