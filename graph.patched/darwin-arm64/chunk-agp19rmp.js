// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Zu}from"./chunk-b5xhmzas.js";var dus=255,t=255,e=/[\x00-\x20\x7f~^:?*[\\]/,o=/[\p{Cc}\p{Cf}\uFFFD]/u,i=250;function u_r(n){return Buffer.byteLength(n,"utf8")<=t&&l(n)}function l(n){return n.length<=dus&&n!=="@"&&n!=="HEAD"&&Zu(n)&&s(n)&&!o.test(n)&&!n.startsWith("-")&&n.split("/").every((r)=>Buffer.byteLength(r,"utf8")<=i)}function s(n){return!e.test(n)&&!n.endsWith(".")&&!n.includes("..")&&!n.includes("@{")&&n.split("/").every((r)=>r!==""&&!r.startsWith(".")&&!r.endsWith(".lock"))}
export{dus,u_r};
