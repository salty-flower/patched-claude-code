// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{ia,VA}from"./chunk-m1dg0rsv.js";import{Nu}from"./chunk-en4g449d.js";import{Xn}from"./chunk-kmgwwaz2.js";import{jCe}from"./chunk-e14n99p7.js";import{sjn}from"./chunk-ddjn9g15.js";class r{reader=void 0;register(e){this.reader=e}read(){return this.reader?.()??!1}}var o=new r;function SZr(e){o.register(e)}function Eqe(){let e=VA("allow_plugin_skill_search");if(e==="org_denied"||e==="latched"||e==="unregistered"||e!==null&&ia("hipaa"))return!1;if(jCe())return!0;return Nu()&&Xn()&&o.read()}function uei(e){if(!sjn.includes(e))return!0;return Eqe()}
export{SZr,Eqe,uei};
