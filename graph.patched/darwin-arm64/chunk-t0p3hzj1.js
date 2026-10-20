// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{c}from"./chunk-ny2cqbmq.js";import{i,Gs}from"./chunk-dj0gyv94.js";import{hD,xA}from"./chunk-jy7b5szn.js";import{MCe}from"./chunk-t3wkkqhe.js";var r="tengu_org_policy_denied";function l(o,n){let e=xA(o);if(e===null||e==="unregistered")return null;return{org_policy_key:c(o),org_policy_deny_kind:c(e),org_policy_taint_named:MCe(hD()).length>0,surface:c(n)}}function AR(o,n){let e=l(o,n);if(e)i(r,e)}async function sz(o,n){let e=l(o,n);if(e)await Gs(r,e)}
export{AR,sz};
