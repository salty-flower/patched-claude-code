// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{m}from"./chunk-vp9rx3bq.js";import{Iw,Cpt}from"./chunk-e3en7py3.js";import{VIt}from"./chunk-5tst2jdh.js";import{s,se,c,k}from"./chunk-asdfkk3x.js";var hde="anthropic/devicePassthrough",r=["get_device_info","device_bash","list_devices","sync_files"],_="Claude_Browser__",n=128,a=1,i=m(()=>c({v:k(a),tool:s().min(1).max(n),target:se().optional()}));function q4e(t){let e=i().safeParse(t);if(!e.success)return;let o=Cpt(e.data.target);return o===void 0?void 0:{v:e.data.v,tool:Iw(e.data.tool,n),target:o}}var E=r.map(VIt),l=`${VIt(_)}_`;function u(t){let e=`${VIt(t)}_`;return E.some((o)=>e.startsWith(`${o}_`))}var d=new Set(["computer_request_access","computer_request_full_control","device_request_folder_access","device_request_delete_permission"]),p="device_bash";function R(t){let e=t.lastIndexOf("__"),o=e===-1?t:t.slice(e+2);return d.has(o)||t===p||`__${t}`.endsWith("__Claude_Browser__request_access")}function $De(t){return!u(t)&&!`${VIt(t)}_`.startsWith(l)&&!R(t)}
export{hde,q4e,$De};
