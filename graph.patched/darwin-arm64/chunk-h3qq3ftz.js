// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{qa,Qc}from"./chunk-ha4cyj5r.js";import"./chunk-qqtnrtrd.js";var n=new Set([-32002,qa.InvalidParams]);function e(o){return o instanceof Qc?o.code:void 0}function t(o){return o instanceof Qc&&o.code===qa.MethodNotFound}function c(o){return o instanceof Qc&&(o.code===qa.MethodNotFound||o.code===qa.InvalidParams)}function i(o){return o instanceof Qc&&n.has(o.code)}function u(o){return o instanceof Qc&&o.code===qa.InvalidParams}function d(o){return o instanceof Qc&&o.code===qa.UrlElicitationRequired}export{e as getMcpErrorCode,t as isMcpMethodNotFoundError,u as isMcpNotADirectoryError,i as isMcpResourceNotFoundError,c as isMcpUnknownMethodError,d as isUrlElicitationRequiredMcpError};
