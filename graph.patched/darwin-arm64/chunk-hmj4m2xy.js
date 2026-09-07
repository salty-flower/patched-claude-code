// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import"./chunk-fkz3e4t3.js";import"./chunk-r5q3158s.js";import"./chunk-4rr1ghkj.js";import"./chunk-3qjd0g3g.js";import"./chunk-h7ha2q61.js";import"./chunk-dq2s4wjn.js";import"./chunk-zhtwayh2.js";import"./chunk-7wmynp0n.js";import"./chunk-9g7wf9qr.js";import"./chunk-084v19yj.js";import"./chunk-gnrvsty9.js";import"./chunk-5q90j22t.js";import{Mp}from"./chunk-643msr15.js";import"./chunk-j317bre5.js";import"./chunk-c5ajdz5z.js";import"./chunk-f2w14jf7.js";import"./chunk-gyxp7wp6.js";import{bs}from"./chunk-280vp0mj.js";import"./chunk-bky8qhrb.js";import"./chunk-1y4ds8dy.js";import"./chunk-vtd04czk.js";import{bn}from"./chunk-m0jywms0.js";import{US,Al,Ac,BE}from"./chunk-gydcfs7s.js";import{Xu}from"./chunk-hr6vb1jr.js";import{d0e,Eit}from"./chunk-ehvv1cam.js";import"./chunk-dp4mwkrp.js";import"./chunk-s37nbkm2.js";import{spawn as E}from"child_process";import{closeSync as v}from"fs";import{constants as p}from"os";import{isatty as u}from"tty";function d(){for(let r=0;r<32;r++){if(r===1||r===2)continue;try{if(u(r))v(r)}catch{}}}async function U({proactivity:r}={}){if(await new Promise((e)=>setImmediate(e)),!await BE())return await bn("agent_launcher","relaunch_launcher_not_runnable"),process.stderr.write(`
${Ac()??`${US}: launcher \`${Al()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting), then start claude again`}
`),bs(1);let{cmd:n,prefixArgs:a}=Xu(),c=process.argv.slice(2),t={...process.env};delete t[d0e],Object.assign(t,Eit());let i=E(n,[...a,...c],{stdio:"inherit",env:t});d();let s=["SIGINT","SIGTERM","SIGHUP"];for(let e of s)process.on(e,()=>{try{i.kill(e)}catch{}});return new Promise(()=>{i.on("close",(e,o)=>{let l=o?128+(p.signals[o]??0):0;process.exit(e??l)}),i.on("error",(e)=>{process.stderr.write(`Failed to relaunch Claude Code: ${e.message}
`),Mp("relaunch_child_error"),process.exit(1)})})}export{U as execRelaunch};
