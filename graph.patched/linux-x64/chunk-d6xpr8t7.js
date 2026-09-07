// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Of}from"./chunk-mzzfzvay.js";import{se}from"./chunk-9142y21k.js";import{QR}from"./chunk-qyjj7h0q.js";function R$(r){console.error(se.red(r))}function mn(r,e="cli_error"){if(r)R$(r);Of(e),process.exit(1);return}function xH(r){if(r)process.stdout.write(r+`
`);process.exit(0);return}async function PS(r){await new Promise((e)=>{process.stdout.write(r,()=>e())})}function g_(r){process.stderr.write(se.yellow(QR(r))+`
`)}async function Xye(){try{let{flushAnalyticsSinks:r}=await import("./chunk-rwcw5rva.js");await r()}catch{}}async function Ss(r){await Xye(),process.exit(r);return}async function ii(r){return await Xye(),mn(r)}async function GP(r){if(r)process.stdout.write(r+`
`);return await Xye(),xH()}
export{R$,mn,xH,PS,g_,Xye,Ss,ii,GP};
