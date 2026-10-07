// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Qc}from"./chunk-fqzh3zpr.js";var OOr=255,r=255,t=/[\x00-\x20\x7f~^:?*[\\]/,o=/[\p{Cc}\p{Cf}\uFFFD]/u,l=250;function _ln(n){return Buffer.byteLength(n,"utf8")<=r&&i(n)}function i(n){return n.length<=OOr&&n!=="@"&&n!=="HEAD"&&Qc(n)&&s(n)&&!o.test(n)&&!n.startsWith("-")&&n.split("/").every((e)=>Buffer.byteLength(e,"utf8")<=l)}function s(n){return!t.test(n)&&!n.endsWith(".")&&!n.includes("..")&&!n.includes("@{")&&n.split("/").every((e)=>e!==""&&!e.startsWith(".")&&!e.endsWith(".lock"))}
export{OOr,_ln};
