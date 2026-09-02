// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Gf}from"./chunk-bvdq8tnt.js";import{ae}from"./chunk-02dpwhns.js";import{stripVTControlCharacters as e}from"util";function d$(r){console.error(ae.red(r))}function wn(r,t="cli_error"){if(r)d$(r);Gf(t),process.exit(1);return}function BH(r){if(r)process.stdout.write(r+`
`);process.exit(0);return}async function UH(r){await new Promise((t)=>{process.stdout.write(r,()=>t())})}function cN(r){return e(r).replace(/(?![\t\n])[\p{Cc}\p{Cf}\u2028\u2029]/gu,"")}function Ab(r){process.stderr.write(ae.yellow(cN(r))+`
`)}async function Tge(){try{let{flushAnalyticsSinks:r}=await import("./chunk-vcfvcjpk.js");await r()}catch{}}async function qi(r){await Tge(),process.exit(r);return}async function Es(r){return await Tge(),wn(r)}async function PP(r){if(r)process.stdout.write(r+`
`);return await Tge(),BH()}
export{d$,wn,BH,UH,cN,Ab,Tge,qi,Es,PP};
