// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import"./chunk-66vts2me.js";import{as,ka}from"./chunk-js0app5q.js";import"./chunk-2rkgvqh2.js";var n=new Set([-32002,as.InvalidParams]);function e(o){return o instanceof ka?o.code:void 0}function t(o){return o instanceof ka&&o.code===as.MethodNotFound}function c(o){return o instanceof ka&&(o.code===as.MethodNotFound||o.code===as.InvalidParams)}function i(o){return o instanceof ka&&n.has(o.code)}function u(o){return o instanceof ka&&o.code===as.InvalidParams}function d(o){return o instanceof ka&&o.code===as.UrlElicitationRequired}export{e as getMcpErrorCode,t as isMcpMethodNotFoundError,u as isMcpNotADirectoryError,i as isMcpResourceNotFoundError,c as isMcpUnknownMethodError,d as isUrlElicitationRequiredMcpError};
