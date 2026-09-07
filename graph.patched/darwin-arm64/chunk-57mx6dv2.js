// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{a}from"./chunk-dq2s4wjn.js";import{OD}from"./chunk-6pky15m5.js";import{resolve as o}from"path";function pge(){let r=a.CLAUDE_CODE_FEDERATION_CACHE_DIR;if(r)return o(r);let e=OD();return e===null?null:o(e,"credentials","federation")}
export{pge};
