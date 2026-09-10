// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{m}from"./chunk-7tpgnqqk.js";import{GA,Wut}from"./chunk-3q766t45.js";import{ZHt}from"./chunk-pptwhe5d.js";import{s,se,c,k}from"./chunk-5vjkaf25.js";var Jbe="anthropic/devicePassthrough",n=["get_device_info","device_bash","list_devices","sync_files"],a="Claude_Browser__",r=128,_=1,i=m(()=>c({v:k(_),tool:s().min(1).max(r),target:se().optional()}));function Mut(t){let e=i().safeParse(t);if(!e.success)return;let o=Wut(e.data.target);return o===void 0?void 0:{v:e.data.v,tool:GA(e.data.tool,r),target:o}}var l=n.map(ZHt),d=`${ZHt(a)}_`;function p(t){let e=`${ZHt(t)}_`;return l.some((o)=>e.startsWith(`${o}_`))}function u(t){let e=t.lastIndexOf("__"),o=e===-1?t:t.slice(e+2);return o.startsWith("computer_")||o==="device_request_folder_access"||o==="device_request_delete_permission"||`__${t}`.endsWith("__Claude_Browser__request_access")}function EVe(t){return!p(t)&&!`${ZHt(t)}_`.startsWith(d)&&!u(t)}
export{Jbe,Mut,EVe};
