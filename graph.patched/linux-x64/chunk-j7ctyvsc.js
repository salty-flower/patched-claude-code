// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import"./chunk-mnk1rjxv.js";import"./chunk-3whp6z2x.js";import"./chunk-e1n9j4jc.js";import"./chunk-3qjd0g3g.js";import"./chunk-efxr56q3.js";import"./chunk-td8fcebs.js";import"./chunk-bj7g1p32.js";import"./chunk-h9wtyp3p.js";import"./chunk-hpnksvcw.js";import"./chunk-7s5qs9ea.js";import"./chunk-vx4qhc14.js";import"./chunk-1tk5haqn.js";import{Of}from"./chunk-mzzfzvay.js";import"./chunk-hvf4zpd9.js";import"./chunk-9g6v0ehs.js";import"./chunk-f2w14jf7.js";import"./chunk-9142y21k.js";import{Ss}from"./chunk-d6xpr8t7.js";import"./chunk-hvd71q4d.js";import"./chunk-1ys2azv7.js";import"./chunk-skkcgpsw.js";import{Sn}from"./chunk-c3bfg9kw.js";import{Fb,Al,wc,BE}from"./chunk-xcxw600k.js";import{Ku}from"./chunk-byf0jsa8.js";import{rxe,uit}from"./chunk-qvkpj3fx.js";import"./chunk-n1qe7nz7.js";import"./chunk-y7bjs1t6.js";import{spawn as E}from"child_process";import{closeSync as v}from"fs";import{constants as p}from"os";import{isatty as u}from"tty";function d(){for(let r=0;r<32;r++){if(r===1||r===2)continue;try{if(u(r))v(r)}catch{}}}async function U({proactivity:r}={}){if(await new Promise((e)=>setImmediate(e)),!await BE())return await Sn("agent_launcher","relaunch_launcher_not_runnable"),process.stderr.write(`
${wc()??`${Fb}: launcher \`${Al()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting), then start claude again`}
`),Ss(1);let{cmd:n,prefixArgs:a}=Ku(),c=process.argv.slice(2),t={...process.env};delete t[rxe],Object.assign(t,uit());let i=E(n,[...a,...c],{stdio:"inherit",env:t});d();let s=["SIGINT","SIGTERM","SIGHUP"];for(let e of s)process.on(e,()=>{try{i.kill(e)}catch{}});return new Promise(()=>{i.on("close",(e,o)=>{let l=o?128+(p.signals[o]??0):0;process.exit(e??l)}),i.on("error",(e)=>{process.stderr.write(`Failed to relaunch Claude Code: ${e.message}
`),Of("relaunch_child_error"),process.exit(1)})})}export{U as execRelaunch};
