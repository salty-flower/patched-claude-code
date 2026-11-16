// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{uo,OM}from"./chunk-77eek6nm.js";import{Lf}from"./chunk-acx2qgbr.js";import{zn}from"./chunk-n61dvy9z.js";import{$Ve}from"./chunk-8d12ywv1.js";import{ALr}from"./chunk-yc7e68s5.js";class r{reader=void 0;register(e){this.reader=e}read(){return this.reader?.()??!1}}var o=new r;function ehs(e){o.register(e)}function Tht(){let e=OM("allow_plugin_skill_search");if(e==="org_denied"||e==="latched"||e==="unregistered"||e!==null&&uo("hipaa"))return!1;if($Ve())return!0;return Lf()&&zn()&&o.read()}function W5a(e){if(!ALr.includes(e))return!0;return Tht()}
export{ehs,Tht,W5a};
