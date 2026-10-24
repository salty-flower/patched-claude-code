// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{zs,ER}from"./chunk-cg45s1mf.js";import{fp}from"./chunk-we9anmwe.js";import{$n}from"./chunk-psq3t7gj.js";import{aOe}from"./chunk-b0w81ksx.js";import{d9n}from"./chunk-v42f9s3b.js";class r{reader=void 0;register(e){this.reader=e}read(){return this.reader?.()??!1}}var o=new r;function vyo(e){o.register(e)}function N8e(){let e=ER("allow_plugin_skill_search");if(e==="org_denied"||e==="latched"||e==="unregistered"||e!==null&&zs("hipaa"))return!1;if(aOe())return!0;return fp()&&$n()&&o.read()}function rAi(e){if(!d9n.includes(e))return!0;return N8e()}
export{vyo,N8e,rAi};
