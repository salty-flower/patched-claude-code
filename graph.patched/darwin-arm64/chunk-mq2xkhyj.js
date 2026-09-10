// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{tf}from"./chunk-fz55wskw.js";import{ie}from"./chunk-t8z8yg5e.js";import{cI}from"./chunk-1qb0n0qf.js";function iN(r){console.error(ie.red(r))}function pn(r,e="cli_error"){if(r)iN(r);tf(e),process.exit(1);return}function xE(r){if(r)process.stdout.write(r+`
`);process.exit(0);return}async function Sw(r){await new Promise((e)=>{process.stdout.write(r,()=>e())})}function eS(r){process.stderr.write(ie.yellow(cI(r))+`
`)}async function lue(){try{let{flushAnalyticsSinks:r}=await import("./chunk-n14k68ra.js");await r()}catch{}}async function _s(r){await lue(),process.exit(r);return}async function yi(r){return await lue(),pn(r)}async function dD(r){if(r)process.stdout.write(r+`
`);return await lue(),xE()}
export{iN,pn,xE,Sw,eS,lue,_s,yi,dD};
