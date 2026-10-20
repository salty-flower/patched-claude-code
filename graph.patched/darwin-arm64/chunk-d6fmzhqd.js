// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{f}from"./chunk-ynakaye4.js";import{mc,Gqn}from"./chunk-f4yykyp9.js";import{p3}from"./chunk-n1e7ys8w.js";import{o,oe,u,T}from"./chunk-xv841za9.js";var jSe="anthropic/devicePassthrough",mti=["get_device_info","device_bash","list_devices","sync_files"],r="Claude_Browser__",n=128,Tfr=1,_=f(()=>u({v:T(Tfr),tool:o().min(1).max(n),target:oe().optional()}));function U5t(t){let e=_().safeParse(t);if(!e.success)return;let s=Gqn(e.data.target);return s===void 0?void 0:{v:e.data.v,tool:mc(e.data.tool,n),target:s}}var a=mti.map(p3),c=`${p3(r)}_`;function i(t){let e=`${p3(t)}_`;return a.some((s)=>e.startsWith(`${s}_`))}var E=new Set(["computer_request_access","computer_request_full_control","device_request_folder_access","device_request_delete_permission"]),l="device_bash";function Afr(t){let e=t.lastIndexOf("__"),s=e===-1?t:t.slice(e+2);return E.has(s)||t===l||`__${t}`.endsWith("__Claude_Browser__request_access")}function eFe(t){return!i(t)&&!`${p3(t)}_`.startsWith(c)&&!Afr(t)}
export{jSe,mti,Tfr,U5t,Afr,eFe};
