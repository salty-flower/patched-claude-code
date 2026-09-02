// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{m}from"./chunk-asme1eq2.js";import{EA,Net}from"./chunk-5x95kfch.js";import{ln}from"./chunk-3kkr5wk2.js";import{i,ye,p,N}from"./chunk-kjzc23zf.js";var Tme="anthropic/devicePassthrough",n=["get_device_info","device_bash","list_devices","sync_files"],a="Claude_Browser__",s=128,_=1,c=m(()=>p({v:N(_),tool:i().min(1).max(s),target:ye()}));function Pet(t){let e=c().safeParse(t);if(!e.success)return;let o=Net(e.data.target);return o===void 0?void 0:{v:e.data.v,tool:EA(e.data.tool,s),target:o}}function r(t){return ln(t).toLowerCase().replace(/[-_]+/g,"_").replace(/^_|_$/g,"")}var l=n.map(r),u=`${r(a)}_`;function d(t){let e=`${r(t)}_`;return l.some((o)=>e.startsWith(`${o}_`))}function E(t){let e=t.lastIndexOf("__"),o=e===-1?t:t.slice(e+2);return o.startsWith("computer_")||o==="device_request_folder_access"||o==="device_request_delete_permission"||`__${t}`.endsWith("__Claude_Browser__request_access")}function Det(t){return!d(t)&&!`${r(t)}_`.startsWith(u)&&!E(t)}
export{Tme,Pet,Det};
