// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{mm}from"./chunk-pfxvy4ay.js";import{ue}from"./chunk-d5zyj0vt.js";import{zR}from"./chunk-xw247wvq.js";function gI(r){console.error(ue.red(r))}function yn(r,e="cli_error"){if(r)gI(r);mm(e),process.exit(1);return}function Qw(r){if(r)process.stdout.write(r+`
`);process.exit(0);return}async function cy(r){await new Promise((e)=>{process.stdout.write(r,()=>e())})}function zS(r){process.stderr.write(ue.yellow(zR(r))+`
`)}async function hq(){try{let{flushAnalyticsSinks:r}=await import("./chunk-4sjqy0k9.js");await r()}catch{}}async function is(r){await hq(),process.exit(r);return}async function hi(r){return await hq(),yn(r)}async function hI(r){if(r)process.stdout.write(r+`
`);return await hq(),Qw()}
export{gI,yn,Qw,cy,zS,hq,is,hi,hI};
