// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{d}from"./chunk-bkr1h20c.js";import{i,Ls}from"./chunk-nayw0pf7.js";import{C2,hA}from"./chunk-025kqzfg.js";import{Yye}from"./chunk-c91vhg3c.js";var r="tengu_org_policy_denied";function l(o,n){let e=hA(o);if(e===null||e==="unregistered")return null;return{org_policy_key:d(o),org_policy_deny_kind:d(e),org_policy_taint_named:Yye(C2()).length>0,surface:d(n)}}function JT(o,n){let e=l(o,n);if(e)i(r,e)}async function gj(o,n){let e=l(o,n);if(e)await Ls(r,e)}
export{JT,gj};
