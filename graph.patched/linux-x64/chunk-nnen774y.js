// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{f}from"./chunk-ras5x31x.js";import{qu,UIn}from"./chunk-vecj8twx.js";import{G2}from"./chunk-699w2z4t.js";import{o,ie,u,R}from"./chunk-w8db6ytr.js";var spe="anthropic/devicePassthrough",sks=["get_device_info","device_bash","list_devices","sync_files"],r="Claude_Browser__",n=128,qYn=1,_=f(()=>u({v:R(qYn),tool:o().min(1).max(n),target:ie().optional()}));function C$t(t){let e=_().safeParse(t);if(!e.success)return;let s=UIn(e.data.target);return s===void 0?void 0:{v:e.data.v,tool:qu(e.data.tool,n),target:s}}var a=sks.map(G2),c=`${G2(r)}_`;function i(t){let e=`${G2(t)}_`;return a.some((s)=>e.startsWith(`${s}_`))}var E=new Set(["computer_request_access","computer_request_full_control","device_request_folder_access","device_request_delete_permission"]),l="device_bash";function VYn(t){let e=t.lastIndexOf("__"),s=e===-1?t:t.slice(e+2);return E.has(s)||t===l||`__${t}`.endsWith("__Claude_Browser__request_access")}function Jxe(t){return!i(t)&&!`${G2(t)}_`.startsWith(c)&&!VYn(t)}
export{spe,sks,qYn,C$t,VYn,Jxe};
