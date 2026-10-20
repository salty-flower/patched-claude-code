// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{at}from"./chunk-kpqr86hf.js";import{t3n}from"./chunk-f4yykyp9.js";var t=new at(()=>({byToolUse:new Map}));function klo(n,e,i){t.of(n).byToolUse.set(e,i),t3n(n,e,()=>{u0n(n,e)})}function u0n(n,e){t.peek(n)?.byToolUse.delete(e)}function zui(n,e){return e!==void 0&&t.peek(n)?.byToolUse.has(e)===!0}function Clo(n,e){if(e===void 0)return;let i=t.peek(n)?.byToolUse.get(e);return u0n(n,e),i}
export{klo,u0n,zui,Clo};
