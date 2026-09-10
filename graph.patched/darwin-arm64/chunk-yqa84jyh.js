// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import"./chunk-3k7pa7mk.js";import"./chunk-awrvr02y.js";import"./chunk-3kadfzjs.js";import"./chunk-7tpgnqqk.js";import"./chunk-w6n61axt.js";import"./chunk-qymratxs.js";import"./chunk-cet8na02.js";import"./chunk-wmtek349.js";import"./chunk-jww0ztav.js";import"./chunk-jxvdfgn0.js";import"./chunk-wkyng8j1.js";import"./chunk-w930ag8r.js";import{tf}from"./chunk-fz55wskw.js";import"./chunk-0v0wzs89.js";import"./chunk-e0gvmsm3.js";import"./chunk-554z0m6d.js";import"./chunk-t8z8yg5e.js";import{_s}from"./chunk-mq2xkhyj.js";import"./chunk-e3rr1gh2.js";import"./chunk-1swgmcv7.js";import"./chunk-mx473n83.js";import{vn}from"./chunk-qc0xda2j.js";import{xb,Fl,Uc,kC}from"./chunk-86hmwsb6.js";import{dd}from"./chunk-qf7hvpby.js";import{uOe,xut}from"./chunk-5afv91q1.js";import"./chunk-c1qwyngg.js";import"./chunk-5dnafksn.js";import{spawn as E}from"child_process";import{closeSync as v}from"fs";import{constants as p}from"os";import{isatty as u}from"tty";function d(){for(let r=0;r<32;r++){if(r===1||r===2)continue;try{if(u(r))v(r)}catch{}}}async function U({proactivity:r}={}){if(await new Promise((e)=>setImmediate(e)),!await kC())return await vn("agent_launcher","relaunch_launcher_not_runnable"),process.stderr.write(`
${Uc()??`${xb}: launcher \`${Fl()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting), then start claude again`}
`),_s(1);let{cmd:n,prefixArgs:a}=dd(),c=process.argv.slice(2),t={...process.env};delete t[uOe],Object.assign(t,xut());let i=E(n,[...a,...c],{stdio:"inherit",env:t});d();let s=["SIGINT","SIGTERM","SIGHUP"];for(let e of s)process.on(e,()=>{try{i.kill(e)}catch{}});return new Promise(()=>{i.on("close",(e,o)=>{let l=o?128+(p.signals[o]??0):0;process.exit(e??l)}),i.on("error",(e)=>{process.stderr.write(`Failed to relaunch Claude Code: ${e.message}
`),tf("relaunch_child_error"),process.exit(1)})})}export{U as execRelaunch};
