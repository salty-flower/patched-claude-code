// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{bc}from"./chunk-42txhxmf.js";var Kto=255,e=255,t=/[\x00-\x20\x7f~^:?*[\\]/,o=/[\p{Cc}\p{Cf}\uFFFD]/u,i=250;function Gxn(n){return Buffer.byteLength(n,"utf8")<=e&&l(n)}function l(n){return n.length<=Kto&&n!=="@"&&n!=="HEAD"&&bc(n)&&s(n)&&!o.test(n)&&!n.startsWith("-")&&n.split("/").every((r)=>Buffer.byteLength(r,"utf8")<=i)}function s(n){return!t.test(n)&&!n.endsWith(".")&&!n.includes("..")&&!n.includes("@{")&&n.split("/").every((r)=>r!==""&&!r.startsWith(".")&&!r.endsWith(".lock"))}
export{Kto,Gxn};
