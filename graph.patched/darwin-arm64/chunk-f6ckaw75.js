// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import"./chunk-h4q6j5r2.js";import"./chunk-p3vjhzt0.js";import"./chunk-ty218y69.js";import"./chunk-55w4bsdv.js";import"./chunk-rk5fkewn.js";import"./chunk-g2ngvza5.js";import"./chunk-yhfssb7x.js";import"./chunk-0xdcm8sp.js";import"./chunk-2b9rpf69.js";import"./chunk-dsb06hq9.js";import"./chunk-g1553wr3.js";import"./chunk-84crg0gy.js";import{Zp}from"./chunk-8nmvz1t1.js";import"./chunk-y5gt0775.js";import"./chunk-jx9d5yeb.js";import"./chunk-ck0tqv1m.js";import"./chunk-esj9hv35.js";import{Di}from"./chunk-25rxj29k.js";import"./chunk-ajwm72ve.js";import"./chunk-9e1062yp.js";import"./chunk-v5cr82c7.js";import{kn}from"./chunk-tfyzvdvk.js";import{Cb,Fl,Mc,$A}from"./chunk-mezdzkyd.js";import{cd}from"./chunk-y4jddssv.js";import{iPe,hlt}from"./chunk-6yts2jaf.js";import"./chunk-dadzbrtf.js";import"./chunk-fgjq2155.js";import{spawn as E}from"child_process";import{closeSync as v}from"fs";import{constants as p}from"os";import{isatty as u}from"tty";function d(){for(let r=0;r<32;r++){if(r===1||r===2)continue;try{if(u(r))v(r)}catch{}}}async function U({proactivity:r}={}){if(await new Promise((e)=>setImmediate(e)),!await $A())return await kn("agent_launcher","relaunch_launcher_not_runnable"),process.stderr.write(`
${Mc()??`${Cb}: launcher \`${Fl()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting), then start claude again`}
`),Di(1);let{cmd:n,prefixArgs:a}=cd(),c=process.argv.slice(2),t={...process.env};delete t[iPe],Object.assign(t,hlt());let i=E(n,[...a,...c],{stdio:"inherit",env:t});d();let s=["SIGINT","SIGTERM","SIGHUP"];for(let e of s)process.on(e,()=>{try{i.kill(e)}catch{}});return new Promise(()=>{i.on("close",(e,o)=>{let l=o?128+(p.signals[o]??0):0;process.exit(e??l)}),i.on("error",(e)=>{process.stderr.write(`Failed to relaunch Claude Code: ${e.message}
`),Zp("relaunch_child_error"),process.exit(1)})})}export{U as execRelaunch,d as severTtyInputForRelaunch};
