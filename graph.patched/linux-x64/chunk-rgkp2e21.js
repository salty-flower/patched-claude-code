// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{i,ws}from"./chunk-5a4y4a7y.js";import{c}from"./chunk-p9tbyvzw.js";import{cL,M8}from"./chunk-577jmkv2.js";import{jQ}from"./chunk-7x5ref3k.js";var r="tengu_org_policy_denied";function l(o,n){let e=M8(o);if(e===null||e==="unregistered")return null;return{org_policy_key:c(o),org_policy_deny_kind:c(e),org_policy_taint_named:jQ(cL()).length>0,surface:c(n)}}function gS(o,n){let e=l(o,n);if(e)i(r,e)}async function PD(o,n){let e=l(o,n);if(e)await ws(r,e)}
export{gS,PD};
