// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{b,ln}from"./chunk-p9tbyvzw.js";function Se(n){if(n==null)return;return/^[A-Za-z0-9_-]{1,128}$/.test(n)?ln(n):b("nonconforming")}function _ge(n){return ln(n.map((r)=>Se(r)).join(","))}
export{Se,_ge};
