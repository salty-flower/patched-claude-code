// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Za,pT}from"./chunk-mke1mg83.js";import{dp}from"./chunk-tadwrn0a.js";import{qn}from"./chunk-kvz2ymff.js";import{qve}from"./chunk-484dtcft.js";import{AHn}from"./chunk-d7tndk38.js";class r{reader=void 0;register(e){this.reader=e}read(){return this.reader?.()??!1}}var o=new r;function GVr(e){o.register(e)}function eGe(){let e=pT("allow_plugin_skill_search");if(e==="org_denied"||e==="latched"||e==="unregistered"||e!==null&&Za("hipaa"))return!1;if(qve())return!0;return dp()&&qn()&&o.read()}function N2s(e){if(!AHn.includes(e))return!0;return eGe()}
export{GVr,eGe,N2s};
