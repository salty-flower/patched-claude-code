// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{lt}from"./chunk-xzypj06m.js";import{YGn}from"./chunk-dxfmgtda.js";var t=new lt(()=>({byToolUse:new Map}));function O9r(n,e,i){t.of(n).byToolUse.set(e,i),YGn(n,e,()=>{hkn(n,e)})}function hkn(n,e){t.peek(n)?.byToolUse.delete(e)}function kZs(n,e){return e!==void 0&&t.peek(n)?.byToolUse.has(e)===!0}function H9r(n,e){if(e===void 0)return;let i=t.peek(n)?.byToolUse.get(e);return hkn(n,e),i}
export{O9r,hkn,kZs,H9r};
