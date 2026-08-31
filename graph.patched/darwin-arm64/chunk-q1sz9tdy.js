// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{m}from"./chunk-asme1eq2.js";import{AA,Uet}from"./chunk-0f4kthen.js";import{ln}from"./chunk-99vq0mht.js";import{i,_e,f,N}from"./chunk-skrj2yn0.js";var Ime="anthropic/devicePassthrough",n=["get_device_info","device_bash","list_devices","sync_files"],a="Claude_Browser__",s=128,_=1,c=m(()=>f({v:N(_),tool:i().min(1).max(s),target:_e()}));function Let(t){let e=c().safeParse(t);if(!e.success)return;let o=Uet(e.data.target);return o===void 0?void 0:{v:e.data.v,tool:AA(e.data.tool,s),target:o}}function r(t){return ln(t).toLowerCase().replace(/[-_]+/g,"_").replace(/^_|_$/g,"")}var l=n.map(r),p=`${r(a)}_`;function u(t){let e=`${r(t)}_`;return l.some((o)=>e.startsWith(`${o}_`))}function d(t){let e=t.lastIndexOf("__"),o=e===-1?t:t.slice(e+2);return o.startsWith("computer_")||o==="device_request_folder_access"||o==="device_request_delete_permission"||`__${t}`.endsWith("__Claude_Browser__request_access")}function Met(t){return!u(t)&&!`${r(t)}_`.startsWith(p)&&!d(t)}
export{Ime,Let,Met};
