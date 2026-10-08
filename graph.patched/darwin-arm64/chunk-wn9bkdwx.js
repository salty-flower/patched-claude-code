// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{f}from"./chunk-y575z4xw.js";import{zu,oOn}from"./chunk-q21zbtsq.js";import{tz}from"./chunk-d590xdyd.js";import{o,ie,u,R}from"./chunk-hcyr0654.js";var upe="anthropic/devicePassthrough",jks=["get_device_info","device_bash","list_devices","sync_files"],r="Claude_Browser__",n=128,f4n=1,_=f(()=>u({v:R(f4n),tool:o().min(1).max(n),target:ie().optional()}));function BFt(t){let e=_().safeParse(t);if(!e.success)return;let s=oOn(e.data.target);return s===void 0?void 0:{v:e.data.v,tool:zu(e.data.tool,n),target:s}}var a=jks.map(tz),c=`${tz(r)}_`;function i(t){let e=`${tz(t)}_`;return a.some((s)=>e.startsWith(`${s}_`))}var E=new Set(["computer_request_access","computer_request_full_control","device_request_folder_access","device_request_delete_permission"]),l="device_bash";function m4n(t){let e=t.lastIndexOf("__"),s=e===-1?t:t.slice(e+2);return E.has(s)||t===l||`__${t}`.endsWith("__Claude_Browser__request_access")}function iPe(t){return!i(t)&&!`${tz(t)}_`.startsWith(c)&&!m4n(t)}
export{upe,jks,f4n,BFt,m4n,iPe};
