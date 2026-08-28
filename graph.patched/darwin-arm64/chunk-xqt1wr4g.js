// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{pp}from"./chunk-8w8hykva.js";import{ae}from"./chunk-q9edv607.js";import{stripVTControlCharacters as e}from"util";function NH(r){console.error(ae.red(r))}function gn(r,t="cli_error"){if(r)NH(r);pp(t),process.exit(1);return}function tv(r){if(r)process.stdout.write(r+`
`);process.exit(0);return}async function nv(r){await new Promise((t)=>{process.stdout.write(r,()=>t())})}function j1(r){return e(r).replace(/(?![\t\n])[\p{Cc}\p{Cf}\u2028\u2029]/gu,"")}function W_(r){process.stderr.write(ae.yellow(j1(r))+`
`)}async function Gpe(){try{let{flushAnalyticsSinks:r}=await import("./chunk-jk3zsf7j.js");await r()}catch{}}async function Hi(r){await Gpe(),process.exit(r);return}async function is(r){return await Gpe(),gn(r)}async function mP(r){if(r)process.stdout.write(r+`
`);return await Gpe(),tv()}
export{NH,gn,tv,nv,j1,W_,Gpe,Hi,is,mP};
