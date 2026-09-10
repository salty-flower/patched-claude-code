// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import"./chunk-0sehhrcr.js";import{Qo,ta}from"./chunk-6h85axae.js";import"./chunk-fwrwb1nt.js";var n=new Set([-32002,Qo.InvalidParams]);function e(o){return o instanceof ta?o.code:void 0}function t(o){return o instanceof ta&&o.code===Qo.MethodNotFound}function i(o){return o instanceof ta&&n.has(o.code)}function c(o){return o instanceof ta&&o.code===Qo.InvalidParams}function u(o){return o instanceof ta&&o.code===Qo.UrlElicitationRequired}export{e as getMcpErrorCode,t as isMcpMethodNotFoundError,c as isMcpNotADirectoryError,i as isMcpResourceNotFoundError,u as isUrlElicitationRequiredMcpError};
