// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{m}from"./chunk-vp9rx3bq.js";import{Pw,ypt}from"./chunk-fx0st3nq.js";import{x0t}from"./chunk-djj3rn65.js";import{s,se,c,C}from"./chunk-wvjc3h2t.js";var cde="anthropic/devicePassthrough",r=["get_device_info","device_bash","list_devices","sync_files"],_="Claude_Browser__",n=128,a=1,i=m(()=>c({v:C(a),tool:s().min(1).max(n),target:se().optional()}));function z4e(t){let e=i().safeParse(t);if(!e.success)return;let o=ypt(e.data.target);return o===void 0?void 0:{v:e.data.v,tool:Pw(e.data.tool,n),target:o}}var E=r.map(x0t),l=`${x0t(_)}_`;function u(t){let e=`${x0t(t)}_`;return E.some((o)=>e.startsWith(`${o}_`))}var d=new Set(["computer_request_access","computer_request_full_control","device_request_folder_access","device_request_delete_permission"]),p="device_bash";function R(t){let e=t.lastIndexOf("__"),o=e===-1?t:t.slice(e+2);return d.has(o)||t===p||`__${t}`.endsWith("__Claude_Browser__request_access")}function OOe(t){return!u(t)&&!`${x0t(t)}_`.startsWith(l)&&!R(t)}
export{cde,z4e,OOe};
