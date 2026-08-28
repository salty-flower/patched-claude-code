// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{pp}from"./chunk-qkpfba5t.js";import{ae}from"./chunk-8ba2x98b.js";import{stripVTControlCharacters as e}from"util";function OD(r){console.error(ae.red(r))}function gn(r,t="cli_error"){if(r)OD(r);pp(t),process.exit(1);return}function tS(r){if(r)process.stdout.write(r+`
`);process.exit(0);return}async function nS(r){await new Promise((t)=>{process.stdout.write(r,()=>t())})}function UO(r){return e(r).replace(/(?![\t\n])[\p{Cc}\p{Cf}\u2028\u2029]/gu,"")}function zb(r){process.stderr.write(ae.yellow(UO(r))+`
`)}async function jpe(){try{let{flushAnalyticsSinks:r}=await import("./chunk-d4qqvn9z.js");await r()}catch{}}async function Di(r){await jpe(),process.exit(r);return}async function is(r){return await jpe(),gn(r)}async function uR(r){if(r)process.stdout.write(r+`
`);return await jpe(),tS()}
export{OD,gn,tS,nS,UO,zb,jpe,Di,is,uR};
