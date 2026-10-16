// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Xi,YA}from"./chunk-1qxwm3cf.js";import{Nu}from"./chunk-jn6attna.js";import{Xn}from"./chunk-nvk7bh0e.js";import{YTe}from"./chunk-fscc91jd.js";import{vjn}from"./chunk-1pgjd9ws.js";class r{reader=void 0;register(e){this.reader=e}read(){return this.reader?.()??!1}}var o=new r;function YZr(e){o.register(e)}function Oqe(){let e=YA("allow_plugin_skill_search");if(e==="org_denied"||e==="latched"||e==="unregistered"||e!==null&&Xi("hipaa"))return!1;if(YTe())return!0;return Nu()&&Xn()&&o.read()}function Xei(e){if(!vjn.includes(e))return!0;return Oqe()}
export{YZr,Oqe,Xei};
