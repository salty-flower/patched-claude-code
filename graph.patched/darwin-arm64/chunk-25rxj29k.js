// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{Zp}from"./chunk-8nmvz1t1.js";import{ae}from"./chunk-esj9hv35.js";import{V0}from"./chunk-v3s7w1dm.js";function TM(r){console.error(ae.red(r))}function wn(r,e="cli_error"){if(r)TM(r);Zp(e),process.exit(1);return}function fT(r){if(r)process.stdout.write(r+`
`);process.exit(0);return}async function lw(r){await new Promise((e)=>{process.stdout.write(r,()=>e())})}function QS(r){process.stderr.write(ae.yellow(V0(r))+`
`)}async function RSe(){try{let{flushAnalyticsSinks:r}=await import("./chunk-tzytm3hs.js");await r()}catch{}}async function Di(r){await RSe(),process.exit(r);return}async function bs(r){return await RSe(),wn(r)}async function FO(r){if(r)process.stdout.write(r+`
`);return await RSe(),fT()}
export{TM,wn,fT,lw,QS,RSe,Di,bs,FO};
