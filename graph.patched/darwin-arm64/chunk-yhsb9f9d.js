// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{c}from"./chunk-dnq93t1z.js";import{i,Zs}from"./chunk-52pf9qag.js";import{MM,YA}from"./chunk-1qxwm3cf.js";import{gke}from"./chunk-zs3v19vj.js";var r="tengu_org_policy_denied";function l(o,n){let e=YA(o);if(e===null||e==="unregistered")return null;return{org_policy_key:c(o),org_policy_deny_kind:c(e),org_policy_taint_named:gke(MM()).length>0,surface:c(n)}}function KT(o,n){let e=l(o,n);if(e)i(r,e)}async function yG(o,n){let e=l(o,n);if(e)await Zs(r,e)}
export{KT,yG};
