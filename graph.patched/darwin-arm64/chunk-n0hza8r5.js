// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import"./chunk-hxz3xrrd.js";import{Hs,yl}from"./chunk-rftxjhqf.js";import"./chunk-hay318de.js";var n=new Set([-32002,Hs.InvalidParams]);function e(o){return o instanceof yl?o.code:void 0}function t(o){return o instanceof yl&&o.code===Hs.MethodNotFound}function c(o){return o instanceof yl&&(o.code===Hs.MethodNotFound||o.code===Hs.InvalidParams)}function i(o){return o instanceof yl&&n.has(o.code)}function u(o){return o instanceof yl&&o.code===Hs.InvalidParams}function d(o){return o instanceof yl&&o.code===Hs.UrlElicitationRequired}export{e as getMcpErrorCode,t as isMcpMethodNotFoundError,u as isMcpNotADirectoryError,i as isMcpResourceNotFoundError,c as isMcpUnknownMethodError,d as isUrlElicitationRequiredMcpError};
