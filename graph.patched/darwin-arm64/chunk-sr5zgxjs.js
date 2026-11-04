// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{realpathSync as t}from"fs";import{cwd as e}from"process";function pAo(n){return n.normalize("NFC")}function GBs(n){if(n==="/")return n;return t(n)}function zBs(){let n="";if(typeof process<"u"&&typeof process.cwd==="function"&&typeof t==="function")try{let r=e();try{n=pAo(GBs(r))}catch{n=pAo(r)}}catch{}return n}var zGn=zBs(),RVe=(()=>{if(typeof process>"u"||typeof process.cwd!=="function")return null;try{return process.cwd()}catch{return null}})();function N1t(){if(RVe===null)return null;let n=process.env.CLAUDE_CODE_SESSION_KIND;return n!==void 0&&String(n).trim()==="bg"?null:RVe}
export{pAo,GBs,zBs,zGn,RVe,N1t};
