// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{f}from"./chunk-v8gz5b0e.js";import{l,Mi}from"./chunk-mfxenhbr.js";import{RH,L0}from"./chunk-yyx3r3ec.js";import{vye}from"./chunk-j8y9x3yz.js";var n="tengu_org_policy_denied";function r(i,o){let e=L0(i);if(e===null||e==="unregistered")return null;return{org_policy_key:f(i),org_policy_deny_kind:f(e),org_policy_taint_named:vye(RH()).length>0,surface:f(o)}}function $x(i,o){let e=r(i,o);if(e)l(n,e)}async function X1(i,o){let e=r(i,o);if(e)await Mi(n,e)}
export{$x,X1};
