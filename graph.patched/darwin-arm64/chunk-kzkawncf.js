// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{ao,L0}from"./chunk-yyx3r3ec.js";import{Hf}from"./chunk-gg7nabmz.js";import{zn}from"./chunk-tbvds061.js";import{Gze}from"./chunk-83raw8bh.js";import{rHr}from"./chunk-xg8hqkra.js";class r{reader=void 0;register(e){this.reader=e}read(){return this.reader?.()??!1}}var o=new r;function Ahs(e){o.register(e)}function Iht(){let e=L0("allow_plugin_skill_search");if(e==="org_denied"||e==="latched"||e==="unregistered"||e!==null&&ao("hipaa"))return!1;if(Gze())return!0;return Hf()&&zn()&&o.read()}function O9a(e){if(!rHr.includes(e))return!0;return Iht()}
export{Ahs,Iht,O9a};
