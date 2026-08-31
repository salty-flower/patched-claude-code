// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Bu}from"./chunk-fk13r7sg.js";var r="self_hosted_runner_";function e(n){return n.startsWith(r)}function Vwr(n){return Bu([...n]).some(e)}function Mcr(n){return Bu([n]).filter((t)=>!e(t)).join(",")}function mRt(n){if(n===void 0)return!1;let t=typeof n==="string"?n:String(n);return Bu([t]).some(e)}function zKt(n){let t=n.tools;if(t===void 0)return n;let o=typeof t==="string"?t:String(t);if(!mRt(o))return typeof t==="string"?n:{...n,tools:o};return{...n,tools:Mcr(o)}}
export{Vwr,Mcr,mRt,zKt};
