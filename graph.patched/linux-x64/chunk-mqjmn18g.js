// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{d}from"./chunk-yffha6me.js";import{i,Vs}from"./chunk-s90w5q15.js";import{bG,GT}from"./chunk-jb4eqyjv.js";import{nhe}from"./chunk-pak71jg1.js";var r="tengu_org_policy_denied";function l(o,n){let e=GT(o);if(e===null||e==="unregistered")return null;return{org_policy_key:d(o),org_policy_deny_kind:d(e),org_policy_taint_named:nhe(bG()).length>0,surface:d(n)}}function PT(o,n){let e=l(o,n);if(e)i(r,e)}async function _z(o,n){let e=l(o,n);if(e)await Vs(r,e)}
export{PT,_z};
