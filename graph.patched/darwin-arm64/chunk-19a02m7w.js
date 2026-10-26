// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{S,Dn}from"./chunk-ydpbzmt4.js";function _e(n){if(n==null)return;return/^[A-Za-z0-9_-]{1,128}$/.test(n)?Dn(n):S("nonconforming")}function d3t(n){return Dn(n.map((r)=>_e(r)).join(","))}
export{_e,d3t};
