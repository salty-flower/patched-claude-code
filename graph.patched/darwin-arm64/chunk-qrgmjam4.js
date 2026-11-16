// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{CGt}from"./chunk-954kbre8.js";import{qe}from"./chunk-hqh4zzjp.js";var t=new qe(()=>({byToolUse:new Map}));function Gys(n,e,i){t.of(n).byToolUse.set(e,i),CGt(n,e,()=>{NEr(n,e)})}function NEr(n,e){t.peek(n)?.byToolUse.delete(e)}function zys(n,e){return e!==void 0&&t.peek(n)?.byToolUse.has(e)===!0}function Vys(n,e){if(e===void 0)return;let i=t.peek(n)?.byToolUse.get(e);return NEr(n,e),i}
export{Gys,NEr,zys,Vys};
