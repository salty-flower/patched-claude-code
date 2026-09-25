// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{c}from"./chunk-gas689jj.js";import{i,Cs}from"./chunk-9cfndpw0.js";import{JN,YG}from"./chunk-2jc9gzqt.js";import{eae}from"./chunk-kf9bybnr.js";var r="tengu_org_policy_denied";function l(o,n){let e=YG(o);if(e===null||e==="unregistered")return null;return{org_policy_key:c(o),org_policy_deny_kind:c(e),org_policy_taint_named:eae(JN()).length>0,surface:c(n)}}function KE(o,n){let e=l(o,n);if(e)i(r,e)}async function d1(o,n){let e=l(o,n);if(e)await Cs(r,e)}
export{KE,d1};
