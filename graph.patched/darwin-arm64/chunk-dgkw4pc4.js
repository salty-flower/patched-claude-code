// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{X0t}from"./chunk-2pfahbtc.js";import{Je}from"./chunk-k6s5je75.js";var t=new Je(()=>({byToolUse:new Map}));function dKo(n,e,i){t.of(n).byToolUse.set(e,i),X0t(n,e,()=>{HZn(n,e)})}function HZn(n,e){t.peek(n)?.byToolUse.delete(e)}function Hla(n,e){return e!==void 0&&t.peek(n)?.byToolUse.has(e)===!0}function cKo(n,e){if(e===void 0)return;let i=t.peek(n)?.byToolUse.get(e);return HZn(n,e),i}
export{dKo,HZn,Hla,cKo};
