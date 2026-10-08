// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Ay}from"./chunk-gx95ar6n.js";import{ge}from"./chunk-e84gprty.js";import{qd}from"./chunk-fxrrfs3q.js";function lg(r){console.error(ge.red(r))}function sn(r,e="cli_error"){if(r)lg(r);Ay(e),process.exit(1);return}function W0(r){if(r)process.stdout.write(r+`
`);process.exit(0);return}function yso(r){process.exit(r);return}async function Nu(r){await new Promise((e)=>{process.stdout.write(r,()=>e())})}function Zv(r){process.stderr.write(ge.yellow(qd(r))+`
`)}async function jN(){try{let{flushAnalyticsSinks:r}=await import("./chunk-v5r0yxpc.js");await r()}catch{}}async function To(r){await jN(),process.exit(r);return}async function Jo(r){if(r)lg(r);return await jN(),sn()}async function eE(r){if(r)process.stdout.write(r+`
`);return await jN(),W0()}
export{lg,sn,W0,yso,Nu,Zv,jN,To,Jo,eE};
