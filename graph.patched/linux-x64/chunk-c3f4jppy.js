// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{fm}from"./chunk-hdk9febf.js";import{ue}from"./chunk-psm40xqz.js";import{UR}from"./chunk-hyc3s1tm.js";function i0(r){console.error(ue.red(r))}function yn(r,e="cli_error"){if(r)i0(r);fm(e),process.exit(1);return}function Jw(r){if(r)process.stdout.write(r+`
`);process.exit(0);return}async function ly(r){await new Promise((e)=>{process.stdout.write(r,()=>e())})}function jb(r){process.stderr.write(ue.yellow(UR(r))+`
`)}async function l3(){try{let{flushAnalyticsSinks:r}=await import("./chunk-2t7zscn2.js");await r()}catch{}}async function is(r){await l3(),process.exit(r);return}async function hi(r){return await l3(),yn(r)}async function a0(r){if(r)process.stdout.write(r+`
`);return await l3(),Jw()}
export{i0,yn,Jw,ly,jb,l3,is,hi,a0};
