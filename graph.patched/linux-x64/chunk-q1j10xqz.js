// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{f}from"./chunk-zt4gdxqw.js";import{l,Oi}from"./chunk-hs29jdk6.js";import{TH,OM}from"./chunk-77eek6nm.js";import{gye}from"./chunk-vdyz1t0g.js";var n="tengu_org_policy_denied";function r(i,o){let e=OM(i);if(e===null||e==="unregistered")return null;return{org_policy_key:f(i),org_policy_deny_kind:f(e),org_policy_taint_named:gye(TH()).length>0,surface:f(o)}}function Nx(i,o){let e=r(i,o);if(e)l(n,e)}async function K$(i,o){let e=r(i,o);if(e)await Oi(n,e)}
export{Nx,K$};
