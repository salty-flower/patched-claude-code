// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{p}from"./chunk-fdwn5gdv.js";import{Wc,LLn}from"./chunk-hwpb27as.js";import{vV}from"./chunk-4xj6t50t.js";import{o,oe,u,C}from"./chunk-9cmjz7j9.js";var xme="anthropic/devicePassthrough",XMs=["get_device_info","device_bash","list_devices","sync_files"],r="Claude_Browser__",n=128,RXn=1,_=p(()=>u({v:C(RXn),tool:o().min(1).max(n),target:oe().optional()}));function hjt(t){let e=_().safeParse(t);if(!e.success)return;let s=LLn(e.data.target);return s===void 0?void 0:{v:e.data.v,tool:Wc(e.data.tool,n),target:s}}var a=XMs.map(vV),c=`${vV(r)}_`;function i(t){let e=`${vV(t)}_`;return a.some((s)=>e.startsWith(`${s}_`))}var E=new Set(["computer_request_access","computer_request_full_control","device_request_folder_access","device_request_delete_permission"]),l="device_bash";function xXn(t){let e=t.lastIndexOf("__"),s=e===-1?t:t.slice(e+2);return E.has(s)||t===l||`__${t}`.endsWith("__Claude_Browser__request_access")}function $Oe(t){return!i(t)&&!`${vV(t)}_`.startsWith(c)&&!xXn(t)}
export{xme,XMs,RXn,hjt,xXn,$Oe};
