// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{p}from"./chunk-he0s6sfd.js";import{ac,SGn}from"./chunk-dpk0tdne.js";import{u4}from"./chunk-j025vf7m.js";import{o,oe,u,A}from"./chunk-zypddzr3.js";var m_e="anthropic/devicePassthrough",VYs=["get_device_info","device_bash","list_devices","sync_files"],r="Claude_Browser__",n=128,fir=1,_=p(()=>u({v:A(fir),tool:o().min(1).max(n),target:oe().optional()}));function $qt(t){let e=_().safeParse(t);if(!e.success)return;let s=SGn(e.data.target);return s===void 0?void 0:{v:e.data.v,tool:ac(e.data.tool,n),target:s}}var a=VYs.map(u4),c=`${u4(r)}_`;function i(t){let e=`${u4(t)}_`;return a.some((s)=>e.startsWith(`${s}_`))}var E=new Set(["computer_request_access","computer_request_full_control","device_request_folder_access","device_request_delete_permission"]),l="device_bash";function mir(t){let e=t.lastIndexOf("__"),s=e===-1?t:t.slice(e+2);return E.has(s)||t===l||`__${t}`.endsWith("__Claude_Browser__request_access")}function K0e(t){return!i(t)&&!`${u4(t)}_`.startsWith(c)&&!mir(t)}
export{m_e,VYs,fir,$qt,mir,K0e};
