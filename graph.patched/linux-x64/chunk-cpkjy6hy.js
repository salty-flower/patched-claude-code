// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{c}from"./chunk-m3epja3j.js";import{i,Gs}from"./chunk-sr4gfmny.js";import{fL,AC}from"./chunk-jf4xjz28.js";import{CTe}from"./chunk-segx3fdf.js";var r="tengu_org_policy_denied";function l(o,n){let e=AC(o);if(e===null||e==="unregistered")return null;return{org_policy_key:c(o),org_policy_deny_kind:c(e),org_policy_taint_named:CTe(fL()).length>0,surface:c(n)}}function kR(o,n){let e=l(o,n);if(e)i(r,e)}async function qz(o,n){let e=l(o,n);if(e)await Gs(r,e)}
export{kR,qz};
