// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import"./chunk-w3gfpzyw.js";import{ui,Qs}from"./chunk-1hyhz57m.js";import"./chunk-wxtj9cb3.js";var n=new Set([-32002,ui.InvalidParams]);function e(o){return o instanceof Qs?o.code:void 0}function t(o){return o instanceof Qs&&o.code===ui.MethodNotFound}function i(o){return o instanceof Qs&&n.has(o.code)}function c(o){return o instanceof Qs&&o.code===ui.InvalidParams}function u(o){return o instanceof Qs&&o.code===ui.UrlElicitationRequired}export{e as getMcpErrorCode,t as isMcpMethodNotFoundError,c as isMcpNotADirectoryError,i as isMcpResourceNotFoundError,u as isUrlElicitationRequiredMcpError};
