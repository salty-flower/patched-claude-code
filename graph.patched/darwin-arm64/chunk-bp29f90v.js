// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{a}from"./chunk-bn8q5mbz.js";import{x7}from"./chunk-gsnfhe7n.js";import{resolve as o}from"path";function mue(){let r=a.CLAUDE_CODE_FEDERATION_CACHE_DIR;if(r)return o(r);let e=x7();return e===null?null:o(e,"credentials","federation")}
export{mue};
