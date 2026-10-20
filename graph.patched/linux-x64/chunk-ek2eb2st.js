// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Mf}from"./chunk-dxktn51d.js";import{Ne}from"./chunk-wk0rbc8w.js";import{dw}from"./chunk-nvrstjfg.js";import{he}from"./chunk-psz375zg.js";import{oXn}from"./chunk-f5rzvmnh.js";import{fO,sc}from"./chunk-ww4tybgt.js";function hm(r){console.error(he.red(r))}function ln(r,e="cli_error"){if(r)hm(r);if(!Mf())dw(e);process.exit(1);return}function iF(r){if(r)process.stdout.write(r+`
`);process.exit(0);return}function vdn(r){process.exit(r);return}async function Rp(r){await new Promise((e)=>{process.stdout.write(r,()=>e())})}function _v(r){process.stderr.write(he.yellow(sc(r))+`
`)}var i=2000;async function kB({waitForOAuthRefresh:r=!0}={}){if(r)await oXn();await Ne(fO(),i);try{let{flushAnalyticsSinks:e}=await import("./chunk-mpdfw24p.js");await e()}catch{}}async function Co(r){await kB(),process.exit(r);return}async function ns(r){if(r)hm(r);return await kB(),ln()}async function iT(r){if(r)process.stdout.write(r+`
`);return await kB(),iF()}
export{hm,ln,iF,vdn,Rp,_v,kB,Co,ns,iT};
