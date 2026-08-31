// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Wp}from"./chunk-1jtqmqar.js";import{ae}from"./chunk-zgjbv493.js";import{stripVTControlCharacters as e}from"util";function pL(r){console.error(ae.red(r))}function Tn(r,t="cli_error"){if(r)pL(r);Wp(t),process.exit(1);return}function Uw(r){if(r)process.stdout.write(r+`
`);process.exit(0);return}async function Bw(r){await new Promise((t)=>{process.stdout.write(r,()=>t())})}function u1(r){return e(r).replace(/(?![\t\n])[\p{Cc}\p{Cf}\u2028\u2029]/gu,"")}function AS(r){process.stderr.write(ae.yellow(u1(r))+`
`)}async function Oge(){try{let{flushAnalyticsSinks:r}=await import("./chunk-ygsvr3k8.js");await r()}catch{}}async function Vi(r){await Oge(),process.exit(r);return}async function Es(r){return await Oge(),Tn(r)}async function NP(r){if(r)process.stdout.write(r+`
`);return await Oge(),Uw()}
export{pL,Tn,Uw,Bw,u1,AS,Oge,Vi,Es,NP};
