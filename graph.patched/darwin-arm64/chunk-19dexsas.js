// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Ay}from"./chunk-xaschh52.js";import{ge}from"./chunk-45vnv946.js";import{qd}from"./chunk-x3tm8c2g.js";function lg(r){console.error(ge.red(r))}function sn(r,e="cli_error"){if(r)lg(r);Ay(e),process.exit(1);return}function qD(r){if(r)process.stdout.write(r+`
`);process.exit(0);return}function Gso(r){process.exit(r);return}async function Lu(r){await new Promise((e)=>{process.stdout.write(r,()=>e())})}function tv(r){process.stderr.write(ge.yellow(qd(r))+`
`)}async function KN(){try{let{flushAnalyticsSinks:r}=await import("./chunk-z6vzcvqb.js");await r()}catch{}}async function Co(r){await KN(),process.exit(r);return}async function Jo(r){if(r)lg(r);return await KN(),sn()}async function nv(r){if(r)process.stdout.write(r+`
`);return await KN(),qD()}
export{lg,sn,qD,Gso,Lu,tv,KN,Co,Jo,nv};
