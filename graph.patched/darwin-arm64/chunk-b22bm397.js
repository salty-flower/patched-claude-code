// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{pi,Hl}from"./chunk-2rxk8n7w.js";import"./chunk-fsfwqvh9.js";var n=new Set([-32002,pi.InvalidParams]);function e(o){return o instanceof Hl?o.code:void 0}function t(o){return o instanceof Hl&&o.code===pi.MethodNotFound}function c(o){return o instanceof Hl&&(o.code===pi.MethodNotFound||o.code===pi.InvalidParams)}function i(o){return o instanceof Hl&&n.has(o.code)}function u(o){return o instanceof Hl&&o.code===pi.InvalidParams}function d(o){return o instanceof Hl&&o.code===pi.UrlElicitationRequired}export{e as getMcpErrorCode,t as isMcpMethodNotFoundError,u as isMcpNotADirectoryError,i as isMcpResourceNotFoundError,c as isMcpUnknownMethodError,d as isUrlElicitationRequiredMcpError};
