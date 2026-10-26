// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{wu}from"./chunk-ykcv164t.js";var e="self_hosted_runner_";function QXt(n){return n.startsWith(e)}function iHn(n){return wu([...n]).some(QXt)}function pdo(n){return wu([n]).filter((t)=>!QXt(t)).join(",")}function fdo(n){if(n===void 0)return!1;let t=typeof n==="string"?n:String(n);return wu([t]).some(QXt)}function K_s(n){let t=n.tools;if(t===void 0)return n;let o=typeof t==="string"?t:String(t);if(!fdo(o))return typeof t==="string"?n:{...n,tools:o};return{...n,tools:pdo(o)}}
export{QXt,iHn,pdo,fdo,K_s};
