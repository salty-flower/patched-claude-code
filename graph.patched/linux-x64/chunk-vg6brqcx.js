// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{U_}from"./chunk-xc4b32zy.js";import{he}from"./chunk-xsxnmhwb.js";import{e6n}from"./chunk-vt9rkdza.js";import{cu}from"./chunk-9155m2kg.js";function og(r){console.error(he.red(r))}function fn(r,e="cli_error"){if(r)og(r);U_(e),process.exit(1);return}function k$(r){if(r)process.stdout.write(r+`
`);process.exit(0);return}function msn(r){process.exit(r);return}async function up(r){await new Promise((e)=>{process.stdout.write(r,()=>e())})}function $v(r){process.stderr.write(he.yellow(cu(r))+`
`)}async function MU({waitForOAuthRefresh:r=!0}={}){if(r)await e6n();try{let{flushAnalyticsSinks:e}=await import("./chunk-h5datbs6.js");await e()}catch{}}async function Lo(r){await MU(),process.exit(r);return}async function ns(r){if(r)og(r);return await MU(),fn()}async function Mk(r){if(r)process.stdout.write(r+`
`);return await MU(),k$()}
export{og,fn,k$,msn,up,$v,MU,Lo,ns,Mk};
