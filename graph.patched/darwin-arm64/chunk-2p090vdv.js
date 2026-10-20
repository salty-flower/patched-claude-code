// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Mf}from"./chunk-kpqr86hf.js";import{Ne}from"./chunk-2ckwvz0j.js";import{cw}from"./chunk-pmhx705f.js";import{he}from"./chunk-9p2h8en7.js";import{EXn}from"./chunk-bj2sgj71.js";import{_O,sc}from"./chunk-gzssw8ss.js";function gm(r){console.error(he.red(r))}function ln(r,e="cli_error"){if(r)gm(r);if(!Mf())cw(e);process.exit(1);return}function a$(r){if(r)process.stdout.write(r+`
`);process.exit(0);return}function ydn(r){process.exit(r);return}async function Ap(r){await new Promise((e)=>{process.stdout.write(r,()=>e())})}function _E(r){process.stderr.write(he.yellow(sc(r))+`
`)}var i=2000;async function P1({waitForOAuthRefresh:r=!0}={}){if(r)await EXn();await Ne(_O(),i);try{let{flushAnalyticsSinks:e}=await import("./chunk-4mrb5m89.js");await e()}catch{}}async function Ao(r){await P1(),process.exit(r);return}async function rs(r){if(r)gm(r);return await P1(),ln()}async function iC(r){if(r)process.stdout.write(r+`
`);return await P1(),a$()}
export{gm,ln,a$,ydn,Ap,_E,P1,Ao,rs,iC};
