// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Mp}from"./chunk-643msr15.js";import{se}from"./chunk-gyxp7wp6.js";import{u0}from"./chunk-sxccpdbg.js";function FL(r){console.error(se.red(r))}function mn(r,e="cli_error"){if(r)FL(r);Mp(e),process.exit(1);return}function Pw(r){if(r)process.stdout.write(r+`
`);process.exit(0);return}async function Lb(r){await new Promise((e)=>{process.stdout.write(r,()=>e())})}function hy(r){process.stderr.write(se.yellow(u0(r))+`
`)}async function sye(){try{let{flushAnalyticsSinks:r}=await import("./chunk-rdam4nbm.js");await r()}catch{}}async function bs(r){await sye(),process.exit(r);return}async function ii(r){return await sye(),mn(r)}async function eO(r){if(r)process.stdout.write(r+`
`);return await sye(),Pw()}
export{FL,mn,Pw,Lb,hy,sye,bs,ii,eO};
