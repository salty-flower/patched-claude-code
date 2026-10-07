// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{il,GT}from"./chunk-jb4eqyjv.js";import{fp}from"./chunk-zyrx67ap.js";import{qn}from"./chunk-9dnqpecd.js";import{_be}from"./chunk-rq39p6st.js";import{QEn}from"./chunk-0qc175e6.js";class r{reader=void 0;register(e){this.reader=e}read(){return this.reader?.()??!1}}var o=new r;function t0r(e){o.register(e)}function xUe(){let e=GT("allow_plugin_skill_search");if(e==="org_denied"||e==="latched"||e==="unregistered"||e!==null&&il("hipaa"))return!1;if(_be())return!0;return fp()&&qn()&&o.read()}function aEs(e){if(!QEn.includes(e))return!0;return xUe()}
export{t0r,xUe,aEs};
