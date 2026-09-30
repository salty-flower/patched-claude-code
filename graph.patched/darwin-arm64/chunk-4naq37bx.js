// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{p}from"./chunk-dsp1md5e.js";import{xu,Ndn}from"./chunk-q01dwdda.js";import{k2}from"./chunk-ema6t5de.js";import{o,ae,d,R}from"./chunk-g4gq2k0z.js";var vse="anthropic/devicePassthrough",pVo=["get_device_info","device_bash","list_devices","sync_files"],r="Claude_Browser__",n=128,yxn=1,_=p(()=>d({v:R(yxn),tool:o().min(1).max(n),target:ae().optional()}));function lvt(t){let e=_().safeParse(t);if(!e.success)return;let s=Ndn(e.data.target);return s===void 0?void 0:{v:e.data.v,tool:xu(e.data.tool,n),target:s}}var a=pVo.map(k2),c=`${k2(r)}_`;function i(t){let e=`${k2(t)}_`;return a.some((s)=>e.startsWith(`${s}_`))}var E=new Set(["computer_request_access","computer_request_full_control","device_request_folder_access","device_request_delete_permission"]),l="device_bash";function _xn(t){let e=t.lastIndexOf("__"),s=e===-1?t:t.slice(e+2);return E.has(s)||t===l||`__${t}`.endsWith("__Claude_Browser__request_access")}function Uwe(t){return!i(t)&&!`${k2(t)}_`.startsWith(c)&&!_xn(t)}
export{vse,pVo,yxn,lvt,_xn,Uwe};
