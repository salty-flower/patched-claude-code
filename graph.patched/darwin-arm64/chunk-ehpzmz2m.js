// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{p}from"./chunk-h58p4vvs.js";import{l,li}from"./chunk-hm8vbfs0.js";import{A0,rO}from"./chunk-91tadxqx.js";import{ipe}from"./chunk-wpbyjdaj.js";var n="tengu_org_policy_denied";function r(i,o){let e=rO(i);if(e===null||e==="unregistered")return null;return{org_policy_key:p(i),org_policy_deny_kind:p(e),org_policy_taint_named:ipe(A0()).length>0,surface:p(o)}}function pI(i,o){let e=r(i,o);if(e)l(n,e)}async function VH(i,o){let e=r(i,o);if(e)await li(n,e)}
export{pI,VH};
