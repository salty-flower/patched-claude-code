// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{m}from"./chunk-3qjd0g3g.js";import{Kw,Vrt}from"./chunk-30gjz9qx.js";import{rn}from"./chunk-e28askg6.js";import{s,ie,c,C}from"./chunk-krs3sfpb.js";var Khe="anthropic/devicePassthrough",a=["get_device_info","device_bash","list_devices","sync_files"],_="Claude_Browser__",n=128,i=1,l=m(()=>c({v:C(i),tool:s().min(1).max(n),target:ie().optional()}));function Nrt(t){let e=l().safeParse(t);if(!e.success)return;let o=Vrt(e.data.target);return o===void 0?void 0:{v:e.data.v,tool:Kw(e.data.tool,n),target:o}}function r(t){return rn(t).toLowerCase().replace(/[-_]+/g,"_").replace(/^_|_$/g,"")}var p=a.map(r),u=`${r(_)}_`;function d(t){let e=`${r(t)}_`;return p.some((o)=>e.startsWith(`${o}_`))}function E(t){let e=t.lastIndexOf("__"),o=e===-1?t:t.slice(e+2);return o.startsWith("computer_")||o==="device_request_folder_access"||o==="device_request_delete_permission"||`__${t}`.endsWith("__Claude_Browser__request_access")}function Frt(t){return!d(t)&&!`${r(t)}_`.startsWith(u)&&!E(t)}
export{Khe,Nrt,Frt};
