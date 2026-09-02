// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import"./chunk-jwft8d42.js";import{Ai,Ha}from"./chunk-e73cc37m.js";import"./chunk-879jppt0.js";var n=new Set([-32002,Ai.InvalidParams]);function e(o){return o instanceof Ha?o.code:void 0}function t(o){return o instanceof Ha&&o.code===Ai.MethodNotFound}function i(o){return o instanceof Ha&&n.has(o.code)}function c(o){return o instanceof Ha&&o.code===Ai.InvalidParams}function u(o){return o instanceof Ha&&o.code===Ai.UrlElicitationRequired}export{e as getMcpErrorCode,t as isMcpMethodNotFoundError,c as isMcpNotADirectoryError,i as isMcpResourceNotFoundError,u as isUrlElicitationRequiredMcpError};
