// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{Kp}from"./chunk-2mb81hfz.js";import{ae}from"./chunk-1h1jces6.js";import{Px}from"./chunk-tgbc60ar.js";function lM(r){console.error(ae.red(r))}function Tn(r,e="cli_error"){if(r)lM(r);Kp(e),process.exit(1);return}function nw(r){if(r)process.stdout.write(r+`
`);process.exit(0);return}async function rw(r){await new Promise((e)=>{process.stdout.write(r,()=>e())})}function GS(r){process.stderr.write(ae.yellow(Px(r))+`
`)}async function yye(){try{let{flushAnalyticsSinks:r}=await import("./chunk-jxfckteb.js");await r()}catch{}}async function qi(r){await yye(),process.exit(r);return}async function ys(r){return await yye(),Tn(r)}async function TO(r){if(r)process.stdout.write(r+`
`);return await yye(),nw()}
export{lM,Tn,nw,rw,GS,yye,qi,ys,TO};
