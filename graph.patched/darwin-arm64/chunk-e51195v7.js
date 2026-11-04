// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{as,rO}from"./chunk-91tadxqx.js";import{kf}from"./chunk-3e6pdcy8.js";import{Nn}from"./chunk-39j7k06t.js";import{gUe}from"./chunk-dckd8x24.js";import{bgr}from"./chunk-fkpfbttk.js";class r{reader=void 0;register(e){this.reader=e}read(){return this.reader?.()??!1}}var o=new r;function L6o(e){o.register(e)}function nst(){let e=rO("allow_plugin_skill_search");if(e==="org_denied"||e==="latched"||e==="unregistered"||e!==null&&as("hipaa"))return!1;if(gUe())return!0;return kf()&&Nn()&&o.read()}function ala(e){if(!bgr.includes(e))return!0;return nst()}
export{L6o,nst,ala};
