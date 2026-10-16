// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{f}from"./chunk-5r64b6x9.js";import{ac,FGn}from"./chunk-dxfmgtda.js";import{bK}from"./chunk-ey98m06z.js";import{o,oe,u,A}from"./chunk-82bgdty3.js";var b_e="anthropic/devicePassthrough",P4s=["get_device_info","device_bash","list_devices","sync_files"],r="Claude_Browser__",n=128,Mir=1,_=f(()=>u({v:A(Mir),tool:o().min(1).max(n),target:oe().optional()}));function Qqt(t){let e=_().safeParse(t);if(!e.success)return;let s=FGn(e.data.target);return s===void 0?void 0:{v:e.data.v,tool:ac(e.data.tool,n),target:s}}var a=P4s.map(bK),c=`${bK(r)}_`;function i(t){let e=`${bK(t)}_`;return a.some((s)=>e.startsWith(`${s}_`))}var E=new Set(["computer_request_access","computer_request_full_control","device_request_folder_access","device_request_delete_permission"]),l="device_bash";function Dir(t){let e=t.lastIndexOf("__"),s=e===-1?t:t.slice(e+2);return E.has(s)||t===l||`__${t}`.endsWith("__Claude_Browser__request_access")}function nLe(t){return!i(t)&&!`${bK(t)}_`.startsWith(c)&&!Dir(t)}
export{b_e,P4s,Mir,Qqt,Dir,nLe};
