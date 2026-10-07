// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{iy}from"./chunk-0z5rjdcn.js";import{ge}from"./chunk-sjbbyery.js";import{eu}from"./chunk-vj952p6j.js";function gg(r){console.error(ge.red(r))}function ln(r,e="cli_error"){if(r)gg(r);iy(e),process.exit(1);return}function t0(r){if(r)process.stdout.write(r+`
`);process.exit(0);return}function pQr(r){process.exit(r);return}async function Xp(r){await new Promise((e)=>{process.stdout.write(r,()=>e())})}function OE(r){process.stderr.write(ge.yellow(eu(r))+`
`)}async function Fz(){try{let{flushAnalyticsSinks:r}=await import("./chunk-6mr8ebw4.js");await r()}catch{}}async function bo(r){await Fz(),process.exit(r);return}async function ds(r){if(r)gg(r);return await Fz(),ln()}async function Pv(r){if(r)process.stdout.write(r+`
`);return await Fz(),t0()}
export{gg,ln,t0,pQr,Xp,OE,Fz,bo,ds,Pv};
