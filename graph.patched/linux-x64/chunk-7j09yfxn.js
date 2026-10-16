// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{lt}from"./chunk-eqmywwjn.js";import{IGn}from"./chunk-dpk0tdne.js";var t=new lt(()=>({byToolUse:new Map}));function e3r(n,e,i){t.of(n).byToolUse.set(e,i),IGn(n,e,()=>{YEn(n,e)})}function YEn(n,e){t.peek(n)?.byToolUse.delete(e)}function F7s(n,e){return e!==void 0&&t.peek(n)?.byToolUse.has(e)===!0}function t3r(n,e){if(e===void 0)return;let i=t.peek(n)?.byToolUse.get(e);return YEn(n,e),i}
export{e3r,YEn,F7s,t3r};
