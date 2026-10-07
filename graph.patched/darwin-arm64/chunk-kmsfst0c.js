// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{f}from"./chunk-2pfss7d0.js";import{Lu,iTn}from"./chunk-ax2crbgp.js";import{VG}from"./chunk-c9cd6k8r.js";import{o,ie,u,R}from"./chunk-seb9y51t.js";var kde="anthropic/devicePassthrough",tgs=["get_device_info","device_bash","list_devices","sync_files"],r="Claude_Browser__",n=128,w6n=1,_=f(()=>u({v:R(w6n),tool:o().min(1).max(n),target:ie().optional()}));function XMt(t){let e=_().safeParse(t);if(!e.success)return;let s=iTn(e.data.target);return s===void 0?void 0:{v:e.data.v,tool:Lu(e.data.tool,n),target:s}}var a=tgs.map(VG),c=`${VG(r)}_`;function i(t){let e=`${VG(t)}_`;return a.some((s)=>e.startsWith(`${s}_`))}var E=new Set(["computer_request_access","computer_request_full_control","device_request_folder_access","device_request_delete_permission"]),l="device_bash";function E6n(t){let e=t.lastIndexOf("__"),s=e===-1?t:t.slice(e+2);return E.has(s)||t===l||`__${t}`.endsWith("__Claude_Browser__request_access")}function eRe(t){return!i(t)&&!`${VG(t)}_`.startsWith(c)&&!E6n(t)}
export{kde,tgs,w6n,XMt,E6n,eRe};
