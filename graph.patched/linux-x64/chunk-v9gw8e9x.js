// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{df}from"./chunk-c413mrzf.js";import{ae}from"./chunk-8yrsa1e1.js";import{_H}from"./chunk-8fer6cmv.js";function _$(r){console.error(ae.red(r))}function mn(r,e="cli_error"){if(r)_$(r);df(e),process.exit(1);return}function Wv(r){if(r)process.stdout.write(r+`
`);process.exit(0);return}async function Iw(r){await new Promise((e)=>{process.stdout.write(r,()=>e())})}function pS(r){process.stderr.write(ae.yellow(_H(r))+`
`)}async function Zue(){try{let{flushAnalyticsSinks:r}=await import("./chunk-4psx24wb.js");await r()}catch{}}async function vs(r){await Zue(),process.exit(r);return}async function vi(r){return await Zue(),mn(r)}async function hO(r){if(r)process.stdout.write(r+`
`);return await Zue(),Wv()}
export{_$,mn,Wv,Iw,pS,Zue,vs,vi,hO};
