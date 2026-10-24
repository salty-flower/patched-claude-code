// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{cm}from"./chunk-ersar6wn.js";import{Pe}from"./chunk-3kevgx4j.js";import{Kw}from"./chunk-p1qnbfcw.js";import{he}from"./chunk-qrwzmhww.js";import{bor}from"./chunk-w13tcac4.js";import{CM,rd}from"./chunk-qnvapa9t.js";function $f(r){console.error(he.red(r))}function fn(r,e="cli_error"){if(r)$f(r);if(!cm())Kw(e);process.exit(1);return}function $U(r){if(r)process.stdout.write(r+`
`);process.exit(0);return}function X2t(r){process.exit(r);return}async function Fp(r){await new Promise((e)=>{process.stdout.write(r,()=>e())})}function gj(r){process.stderr.write(he.yellow(rd(r))+`
`)}var i=2000;async function hj({waitForOAuthRefresh:r=!0}={}){if(r)await bor();await Pe(CM(),i);try{let{flushAnalyticsSinks:e}=await import("./chunk-ehyf8gm9.js");await e()}catch{}}async function Oo(r){await hj(),process.exit(r);return}async function rs(r){if(r)$f(r);return await hj(),fn()}async function nT(r){if(r)process.stdout.write(r+`
`);return await hj(),$U()}
export{$f,fn,$U,X2t,Fp,gj,hj,Oo,rs,nT};
