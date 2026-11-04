// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Pa,Tc}from"./chunk-sgfa2pbt.js";import"./chunk-1j5j6v18.js";var n=new Set([-32002,Pa.InvalidParams]);function e(o){return o instanceof Tc?o.code:void 0}function t(o){return o instanceof Tc&&o.code===Pa.MethodNotFound}function c(o){return o instanceof Tc&&(o.code===Pa.MethodNotFound||o.code===Pa.InvalidParams)}function i(o){return o instanceof Tc&&n.has(o.code)}function u(o){return o instanceof Tc&&o.code===Pa.InvalidParams}function d(o){return o instanceof Tc&&o.code===Pa.UrlElicitationRequired}export{e as getMcpErrorCode,t as isMcpMethodNotFoundError,u as isMcpNotADirectoryError,i as isMcpResourceNotFoundError,c as isMcpUnknownMethodError,d as isUrlElicitationRequiredMcpError};
