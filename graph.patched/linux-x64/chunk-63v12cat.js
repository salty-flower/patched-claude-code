// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{f}from"./chunk-67jj8qay.js";import{bE,ykt}from"./chunk-bb2b9mmw.js";import{nWt}from"./chunk-q2z9kzhs.js";import{o,ae,u,R}from"./chunk-ehsmc9ae.js";var kye="anthropic/devicePassthrough",r=["get_device_info","device_bash","list_devices","sync_files"],_="Claude_Browser__",n=128,a=1,c=f(()=>u({v:R(a),tool:o().min(1).max(n),target:ae().optional()}));function cQe(t){let e=c().safeParse(t);if(!e.success)return;let s=ykt(e.data.target);return s===void 0?void 0:{v:e.data.v,tool:bE(e.data.tool,n),target:s}}var i=r.map(nWt),E=`${nWt(_)}_`;function l(t){let e=`${nWt(t)}_`;return i.some((s)=>e.startsWith(`${s}_`))}var d=new Set(["computer_request_access","computer_request_full_control","device_request_folder_access","device_request_delete_permission"]),p="device_bash";function O(t){let e=t.lastIndexOf("__"),s=e===-1?t:t.slice(e+2);return d.has(s)||t===p||`__${t}`.endsWith("__Claude_Browser__request_access")}function HBe(t){return!l(t)&&!`${nWt(t)}_`.startsWith(E)&&!O(t)}
export{kye,cQe,HBe};
