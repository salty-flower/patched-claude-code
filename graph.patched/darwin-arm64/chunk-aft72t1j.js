// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{realpathSync as t}from"fs";import{cwd as e}from"process";function G5o(n){return n.normalize("NFC")}function Sgi(n){if(n==="/")return n;return t(n)}function bgi(){let n="";if(typeof process<"u"&&typeof process.cwd==="function"&&typeof t==="function")try{let r=e();try{n=G5o(Sgi(r))}catch{n=G5o(r)}}catch{}return n}var xOt=bgi(),$Ye=(()=>{if(typeof process>"u"||typeof process.cwd!=="function")return null;try{return process.cwd()}catch{return null}})();function UYe(){if($Ye===null)return null;let n=process.env.CLAUDE_CODE_SESSION_KIND;return n!==void 0&&String(n).trim()==="bg"?null:$Ye}
export{G5o,Sgi,bgi,xOt,$Ye,UYe};
