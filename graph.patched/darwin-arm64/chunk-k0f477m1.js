// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
function BEe(t,r){switch(r){case"bash":return`!${t}`;default:return t}}function x_(t){if(t.startsWith("!"))return"bash";return"prompt"}function sI(t){if(x_(t)==="prompt")return t;return t.slice(1)}function Jgt(t){return t==="!"}function J1o({nextValue:t,value:r,cursorOffset:n,mode:o}){let e=x_(t);if(n!==0||e==="prompt"||e===o)return!1;return t.length===r.length+1||r.length===0}
export{BEe,x_,sI,Jgt,J1o};
