// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Ja,qk}from"./chunk-napcsc17.js";import{fp}from"./chunk-mcq8tx7b.js";import{Vn}from"./chunk-sac2pmqn.js";import{CSe}from"./chunk-e88vehq4.js";import{hCn}from"./chunk-3ksgga9v.js";class r{reader=void 0;register(e){this.reader=e}read(){return this.reader?.()??!1}}var o=new r;function PDr(e){o.register(e)}function N1e(){let e=qk("allow_plugin_skill_search");if(e==="org_denied"||e==="latched"||e==="unregistered"||e!==null&&Ja("hipaa"))return!1;if(CSe())return!0;return fp()&&Vn()&&o.read()}function Kvs(e){if(!hCn.includes(e))return!0;return N1e()}
export{PDr,N1e,Kvs};
