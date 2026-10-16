// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{B_}from"./chunk-6bcyaxwk.js";import{he}from"./chunk-bdh8gqj2.js";import{_4n}from"./chunk-wna8ryc8.js";import{cu}from"./chunk-d9vq4daa.js";function rg(r){console.error(he.red(r))}function fn(r,e="cli_error"){if(r)rg(r);B_(e),process.exit(1);return}function kF(r){if(r)process.stdout.write(r+`
`);process.exit(0);return}function dsn(r){process.exit(r);return}async function cp(r){await new Promise((e)=>{process.stdout.write(r,()=>e())})}function NE(r){process.stderr.write(he.yellow(cu(r))+`
`)}async function $U({waitForOAuthRefresh:r=!0}={}){if(r)await _4n();try{let{flushAnalyticsSinks:e}=await import("./chunk-k00v7ea0.js");await e()}catch{}}async function Lo(r){await $U(),process.exit(r);return}async function ns(r){if(r)rg(r);return await $U(),fn()}async function Hk(r){if(r)process.stdout.write(r+`
`);return await $U(),kF()}
export{rg,fn,kF,dsn,cp,NE,$U,Lo,ns,Hk};
