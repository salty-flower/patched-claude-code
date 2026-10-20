// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{realpathSync as t}from"fs";import{cwd as e}from"process";function SKr(n){return n}function T3o(n){return n}function A3o(){let n="";if(typeof process<"u"&&typeof process.cwd==="function"&&typeof t==="function")try{let r=e();try{n=SKr(T3o(r))}catch{n=SKr(r)}}catch{}return n}var atr=A3o(),Hzt=(()=>{if(typeof process>"u"||typeof process.cwd!=="function")return null;try{return process.cwd()}catch{return null}})();function wvt(){if(Hzt===null)return null;let n=process.env.CLAUDE_CODE_SESSION_KIND;return n!==void 0&&String(n).trim()==="bg"?null:Hzt}
export{SKr,T3o,A3o,atr,Hzt,wvt};
