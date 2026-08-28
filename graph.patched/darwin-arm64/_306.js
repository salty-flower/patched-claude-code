// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{Gzc as t,Jzc as a}from"./_685.js";import{Ufd as n,Yfd as c}from"./_809.js";import{Exd as o,Hxd as s}from"./_839.js";import{stripVTControlCharacters as u}from"util";function f(r){console.error(t.red(r))}function l(r){if(r)f(r);n("cli_error"),process.exit(1);return}function p(r){if(r)process.stdout.write(r+`
`);process.exit(0);return}async function y(r){await new Promise((i)=>{process.stdout.write(r,()=>i())})}function d(r){return u(r).replace(/(?![\t\n])[\p{Cc}\p{Cf}\u2028\u2029]/gu,"")}function g(r){process.stderr.write(t.yellow(d(r))+`
`)}async function e(){try{let{flushAnalyticsSinks:r}=await import("./chunk-9wa8wyc1.js");await r()}catch{}}async function A(r){await e(),process.exit(r);return}async function h(r){return await e(),l(r)}async function C(r){if(r)process.stdout.write(r+`
`);return await e(),p()}var x=o(()=>{a();c()});
export{f as _F,l as $F,p as aG,y as bG,d as cG,g as dG,e as eG,A as fG,h as gG,C as hG,x as iG};
