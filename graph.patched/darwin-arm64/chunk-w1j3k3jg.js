// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{nt}from"./chunk-ersar6wn.js";import{HJn}from"./chunk-epan1q4y.js";var t=new nt(()=>({byToolUse:new Map}));function LSo(n,e,i){t.of(n).byToolUse.set(e,i),HJn(n,e,()=>{HUn(n,e)})}function HUn(n,e){t.peek(n)?.byToolUse.delete(e)}function kAi(n,e){return e!==void 0&&t.peek(n)?.byToolUse.has(e)===!0}function NSo(n,e){if(e===void 0)return;let i=t.peek(n)?.byToolUse.get(e);return HUn(n,e),i}
export{LSo,HUn,kAi,NSo};
