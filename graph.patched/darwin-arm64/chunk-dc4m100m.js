// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{df}from"./chunk-kr797g3g.js";import{ie}from"./chunk-azaesbcc.js";import{HP}from"./chunk-ysx7ez10.js";function TN(r){console.error(ie.red(r))}function mn(r,e="cli_error"){if(r)TN(r);df(e),process.exit(1);return}function zE(r){if(r)process.stdout.write(r+`
`);process.exit(0);return}async function Hw(r){await new Promise((e)=>{process.stdout.write(r,()=>e())})}function fb(r){process.stderr.write(ie.yellow(HP(r))+`
`)}async function rde(){try{let{flushAnalyticsSinks:r}=await import("./chunk-5j9tey06.js");await r()}catch{}}async function Es(r){await rde(),process.exit(r);return}async function Ei(r){return await rde(),mn(r)}async function TD(r){if(r)process.stdout.write(r+`
`);return await rde(),zE()}
export{TN,mn,zE,Hw,fb,rde,Es,Ei,TD};
