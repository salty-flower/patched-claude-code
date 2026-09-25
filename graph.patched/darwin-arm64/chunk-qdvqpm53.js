// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{$g}from"./chunk-81r5kx3r.js";import{ue}from"./chunk-n3x619p1.js";import{nw}from"./chunk-7xvsfxjf.js";function c0(r){console.error(ue.red(r))}function Yt(r,e="cli_error"){if(r)c0(r);$g(e),process.exit(1);return}function Ub(r){if(r)process.stdout.write(r+`
`);process.exit(0);return}async function nh(r){await new Promise((e)=>{process.stdout.write(r,()=>e())})}function rv(r){process.stderr.write(ue.yellow(nw(r))+`
`)}async function qse(){try{let{flushAnalyticsSinks:r}=await import("./chunk-knx4eqqg.js");await r()}catch{}}async function ws(r){await qse(),process.exit(r);return}async function Oi(r){return await qse(),Yt(r)}async function jD(r){if(r)process.stdout.write(r+`
`);return await qse(),Ub()}
export{c0,Yt,Ub,nh,rv,qse,ws,Oi,jD};
