// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Yy}from"./chunk-tat46164.js";import{ge}from"./chunk-7sdm5x5t.js";import{Kd}from"./chunk-k10m7cdf.js";function Hm(r){console.error(ge.red(r))}function an(r,e="cli_error"){if(r)Hm(r);Yy(e),process.exit(1);return}function nN(r){if(r)process.stdout.write(r+`
`);process.exit(0);return}function pJt(r){process.exit(r);return}async function Ku(r){await new Promise((e)=>{process.stdout.write(r,()=>e())})}function Lv(r){process.stderr.write(ge.yellow(Kd(r))+`
`)}async function l$(){try{let{flushAnalyticsSinks:r}=await import("./chunk-zs30ym0v.js");await r()}catch{}}async function xo(r){await l$(),process.exit(r);return}async function Vo(r){if(r)Hm(r);return await l$(),an()}async function Nv(r){if(r)process.stdout.write(r+`
`);return await l$(),nN()}
export{Hm,an,nN,pJt,Ku,Lv,l$,xo,Vo,Nv};
