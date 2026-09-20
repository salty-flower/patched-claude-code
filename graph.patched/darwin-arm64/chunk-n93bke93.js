// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{realpathSync as r}from"fs";import{cwd as u}from"process";function o(n){return n.normalize("NFC")}function crr(){let n="";if(typeof process<"u"&&typeof process.cwd==="function"&&typeof r==="function")try{let e=u();try{n=o(r(e))}catch{n=o(e)}}catch{}return n}var V6r=crr(),c=(()=>{if(typeof process>"u"||typeof process.cwd!=="function")return null;try{return process.cwd()}catch{return null}})();function sGt(){if(c===null)return null;let n=process.env.CLAUDE_CODE_SESSION_KIND;return n!==void 0&&String(n).trim()==="bg"?null:c}var t;function F(){return t===!0}function q6r(n){let e=n===!0;if(t===void 0)return t=e,"pinned";return t===e?"unchanged":"conflict"}
export{crr,V6r,sGt,F,q6r};
