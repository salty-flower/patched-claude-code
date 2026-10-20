// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{oi,xA}from"./chunk-jy7b5szn.js";import{Xu}from"./chunk-pvfq0951.js";import{Xn}from"./chunk-gsezw0ay.js";import{lxe}from"./chunk-mbyf38kv.js";import{Rzn}from"./chunk-zkzgnnay.js";class r{reader=void 0;register(e){this.reader=e}read(){return this.reader?.()??!1}}var o=new r;function pio(e){o.register(e)}function _3e(){let e=xA("allow_plugin_skill_search");if(e==="org_denied"||e==="latched"||e==="unregistered"||e!==null&&oi("hipaa"))return!1;if(lxe())return!0;return Xu()&&Xn()&&o.read()}function xui(e){if(!Rzn.includes(e))return!0;return _3e()}
export{pio,_3e,xui};
