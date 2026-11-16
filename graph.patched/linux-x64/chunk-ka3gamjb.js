// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{realpathSync as t}from"fs";import{cwd as e}from"process";function g5o(n){return n}function $hi(n){return n}function Uhi(){let n="";if(typeof process<"u"&&typeof process.cwd==="function"&&typeof t==="function")try{let r=e();try{n=g5o($hi(r))}catch{n=g5o(r)}}catch{}return n}var kIt=Uhi(),I7e=(()=>{if(typeof process>"u"||typeof process.cwd!=="function")return null;try{return process.cwd()}catch{return null}})();function O7e(){if(I7e===null)return null;let n=process.env.CLAUDE_CODE_SESSION_KIND;return n!==void 0&&String(n).trim()==="bg"?null:I7e}
export{g5o,$hi,Uhi,kIt,I7e,O7e};
