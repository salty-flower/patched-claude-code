// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{Th}from"./chunk-dard33vx.js";import{fe}from"./chunk-58nkm0fd.js";import{qg}from"./chunk-3sbqw2rd.js";function tA(r){console.error(fe.red(r))}function qt(r,e="cli_error"){if(r)tA(r);Th(e),process.exit(1);return}function Zb(r){if(r)process.stdout.write(r+`
`);process.exit(0);return}async function rf(r){await new Promise((e)=>{process.stdout.write(r,()=>e())})}function Zv(r){process.stderr.write(fe.yellow(qg(r))+`
`)}async function Oce(){try{let{flushAnalyticsSinks:r}=await import("./chunk-a5a3h95p.js");await r()}catch{}}async function Jo(r){await Oce(),process.exit(r);return}async function si(r){return await Oce(),qt(r)}async function zL(r){if(r)process.stdout.write(r+`
`);return await Oce(),Zb()}
export{tA,qt,Zb,rf,Zv,Oce,Jo,si,zL};
