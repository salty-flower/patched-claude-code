// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{_zt}from"./chunk-k2zw08bd.js";import{qe}from"./chunk-2xv5yvxr.js";var t=new qe(()=>({byToolUse:new Map}));function Lgs(n,e,i){t.of(n).byToolUse.set(e,i),_zt(n,e,()=>{rwr(n,e)})}function rwr(n,e){t.peek(n)?.byToolUse.delete(e)}function Hgs(n,e){return e!==void 0&&t.peek(n)?.byToolUse.has(e)===!0}function Ngs(n,e){if(e===void 0)return;let i=t.peek(n)?.byToolUse.get(e);return rwr(n,e),i}
export{Lgs,rwr,Hgs,Ngs};
