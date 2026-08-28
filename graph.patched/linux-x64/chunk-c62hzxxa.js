// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{h}from"./chunk-s0y4aasp.js";import{CE,hJe}from"./chunk-d778w4x8.js";import{on}from"./chunk-awg8f6w2.js";import{i,ye,m,F}from"./chunk-kfr3f08h.js";var jde="anthropic/devicePassthrough",n=["get_device_info","device_bash","list_devices","sync_files"],a="Claude_Browser__",s=128,_=1,c=h(()=>m({v:F(_),tool:i().min(1).max(s),target:ye()}));function uJe(t){let e=c().safeParse(t);if(!e.success)return;let o=hJe(e.data.target);return o===void 0?void 0:{v:e.data.v,tool:CE(e.data.tool,s),target:o}}function r(t){return on(t).toLowerCase().replace(/[-_]+/g,"_").replace(/^_|_$/g,"")}var l=n.map(r),p=`${r(a)}_`;function u(t){let e=`${r(t)}_`;return l.some((o)=>e.startsWith(`${o}_`))}function d(t){let e=t.lastIndexOf("__"),o=e===-1?t:t.slice(e+2);return o.startsWith("computer_")||o==="device_request_folder_access"||o==="device_request_delete_permission"||`__${t}`.endsWith("__Claude_Browser__request_access")}function dJe(t){return!u(t)&&!`${r(t)}_`.startsWith(p)&&!d(t)}
export{jde,uJe,dJe};
