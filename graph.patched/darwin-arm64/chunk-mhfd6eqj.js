// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{f}from"./chunk-nyvhtfb3.js";import{Mc,vJn}from"./chunk-epan1q4y.js";import{wK}from"./chunk-npfaxhr1.js";import{o,oe,u,T}from"./chunk-k395ayhm.js";var FEe="anthropic/devicePassthrough",Bhi=["get_device_info","device_bash","list_devices","sync_files"],r="Claude_Browser__",n=128,ivr=1,_=f(()=>u({v:T(ivr),tool:o().min(1).max(n),target:oe().optional()}));function EQt(t){let e=_().safeParse(t);if(!e.success)return;let s=vJn(e.data.target);return s===void 0?void 0:{v:e.data.v,tool:Mc(e.data.tool,n),target:s}}var a=Bhi.map(wK),c=`${wK(r)}_`;function i(t){let e=`${wK(t)}_`;return a.some((s)=>e.startsWith(`${s}_`))}var E=new Set(["computer_request_access","computer_request_full_control","device_request_folder_access","device_request_delete_permission"]),l="device_bash";function avr(t){let e=t.lastIndexOf("__"),s=e===-1?t:t.slice(e+2);return E.has(s)||t===l||`__${t}`.endsWith("__Claude_Browser__request_access")}function R1e(t){return!i(t)&&!`${wK(t)}_`.startsWith(c)&&!avr(t)}
export{FEe,Bhi,ivr,EQt,avr,R1e};
