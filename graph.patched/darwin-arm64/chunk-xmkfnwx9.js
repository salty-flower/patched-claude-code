// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{lt}from"./chunk-4bw62nzm.js";import{qLn}from"./chunk-hwpb27as.js";var t=new lt(()=>({byToolUse:new Map}));function DBr(n,e,i){t.of(n).byToolUse.set(e,i),qLn(n,e,()=>{Zmn(n,e)})}function Zmn(n,e){t.peek(n)?.byToolUse.delete(e)}function gjs(n,e){return e!==void 0&&t.peek(n)?.byToolUse.has(e)===!0}function LBr(n,e){if(e===void 0)return;let i=t.peek(n)?.byToolUse.get(e);return Zmn(n,e),i}
export{DBr,Zmn,gjs,LBr};
