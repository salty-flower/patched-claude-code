// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Rf,L}from"./chunk-bkksmm2y.js";L();function bx(r){if(typeof r==="string")return r;if(typeof r==="number")return String(r);if(!r)return"";if(Array.isArray(r))return r.map(bx).join("");if(Rf(r))return bx(r.props.children);return""}
export{bx};
