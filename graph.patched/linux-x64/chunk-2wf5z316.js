// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{f}from"./chunk-wp37h1qm.js";import{Nu,jAn}from"./chunk-1xqd80pz.js";import{NG}from"./chunk-zqyfcgvx.js";import{o,ie,u,R}from"./chunk-6kgnb6mn.js";var bde="anthropic/devicePassthrough",_ms=["get_device_info","device_bash","list_devices","sync_files"],r="Claude_Browser__",n=128,e2n=1,_=f(()=>u({v:R(e2n),tool:o().min(1).max(n),target:ie().optional()}));function LDt(t){let e=_().safeParse(t);if(!e.success)return;let s=jAn(e.data.target);return s===void 0?void 0:{v:e.data.v,tool:Nu(e.data.tool,n),target:s}}var a=_ms.map(NG),c=`${NG(r)}_`;function i(t){let e=`${NG(t)}_`;return a.some((s)=>e.startsWith(`${s}_`))}var E=new Set(["computer_request_access","computer_request_full_control","device_request_folder_access","device_request_delete_permission"]),l="device_bash";function t2n(t){let e=t.lastIndexOf("__"),s=e===-1?t:t.slice(e+2);return E.has(s)||t===l||`__${t}`.endsWith("__Claude_Browser__request_access")}function qCe(t){return!i(t)&&!`${NG(t)}_`.startsWith(c)&&!t2n(t)}
export{bde,_ms,e2n,LDt,t2n,qCe};
