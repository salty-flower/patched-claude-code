// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{H,qo}from"./chunk-r1b219q3.js";import{jr}from"./chunk-41nyh22r.js";var n=/^\d{1,12}-[0-9a-f]{1,32}$/;function mye(t){return jr.test(t)?qo(t):H("nonconforming")}function jnn(t){return n.test(t)?qo(t):H("nonconforming")}
export{mye,jnn};
