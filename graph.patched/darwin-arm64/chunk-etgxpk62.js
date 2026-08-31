// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import"./chunk-h5an0epa.js";import{Ai,wa}from"./chunk-25pekgrs.js";import"./chunk-7b3t2sab.js";var n=new Set([-32002,Ai.InvalidParams]);function e(o){return o instanceof wa?o.code:void 0}function t(o){return o instanceof wa&&o.code===Ai.MethodNotFound}function i(o){return o instanceof wa&&n.has(o.code)}function c(o){return o instanceof wa&&o.code===Ai.InvalidParams}function u(o){return o instanceof wa&&o.code===Ai.UrlElicitationRequired}export{e as getMcpErrorCode,t as isMcpMethodNotFoundError,c as isMcpNotADirectoryError,i as isMcpResourceNotFoundError,u as isUrlElicitationRequiredMcpError};
