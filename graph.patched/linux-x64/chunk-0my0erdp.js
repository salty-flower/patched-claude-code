// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
var r,a;function n(){if(r!==void 0&&a==="external")return r;return a="external",r=[],r}function bJo(){return n().map((e)=>e.id)}function SJo(e){for(let t of n()){let o=t.digests.find((i)=>i.sha256===e);if(o)return{template:t,label:o.label}}return}function Lnt(e){return n().find((t)=>t.id===e)}function vvn(e){return e.event==="PreToolUse"}function Evn(){return!0}
export{bJo,SJo,Lnt,vvn,Evn};
