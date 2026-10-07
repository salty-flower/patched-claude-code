// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{d}from"./chunk-hdvxmrfb.js";import{i,qs}from"./chunk-qbf9wv32.js";import{PG,qk}from"./chunk-napcsc17.js";import{ahe}from"./chunk-zgcypqv5.js";var r="tengu_org_policy_denied";function l(o,n){let e=qk(o);if(e===null||e==="unregistered")return null;return{org_policy_key:d(o),org_policy_deny_kind:d(e),org_policy_taint_named:ahe(PG()).length>0,surface:d(n)}}function Hk(o,n){let e=l(o,n);if(e)i(r,e)}async function xW(o,n){let e=l(o,n);if(e)await qs(r,e)}
export{Hk,xW};
