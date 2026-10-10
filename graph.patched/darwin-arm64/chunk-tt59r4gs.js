// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Lu}from"./chunk-z6p21rxk.js";var e="self_hosted_runner_";function J$t(n){return n.startsWith(e)}function QUo(n){return Lu([...n]).some(J$t)}function r(n){return Lu([n]).filter((t)=>!J$t(t)).join(",")}function nFr(n){if(n===void 0)return!1;let t=typeof n==="string"?n:String(n);return Lu([t]).some(J$t)}function ZUo(n){let t=n.tools;if(t===void 0)return n;let o=typeof t==="string"?t:String(t);if(!nFr(o))return typeof t==="string"?n:{...n,tools:o};return{...n,tools:r(o)}}
export{J$t,QUo,nFr,ZUo};
