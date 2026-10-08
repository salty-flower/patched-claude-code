// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Wa,hA}from"./chunk-025kqzfg.js";import{vp}from"./chunk-cjpd2k0t.js";import{Kn}from"./chunk-942093b7.js";import{Swe}from"./chunk-dscjvjx7.js";import{YRn}from"./chunk-g5nhhr43.js";class r{reader=void 0;register(e){this.reader=e}read(){return this.reader?.()??!1}}var o=new r;function I1r(e){o.register(e)}function Z1e(){let e=hA("allow_plugin_skill_search");if(e==="org_denied"||e==="latched"||e==="unregistered"||e!==null&&Wa("hipaa"))return!1;if(Swe())return!0;return vp()&&Kn()&&o.read()}function pMs(e){if(!YRn.includes(e))return!0;return Z1e()}
export{I1r,Z1e,pMs};
