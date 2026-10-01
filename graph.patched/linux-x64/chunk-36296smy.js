// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import"./chunk-fkak21hw.js";import"./chunk-aap6zsd0.js";import"./chunk-vqpmen5t.js";import"./chunk-dmpcy5p5.js";import"./chunk-actz3rxp.js";import"./chunk-v34cw0y6.js";import"./chunk-z10rc4tf.js";import"./chunk-qs4mqgaa.js";import"./chunk-5054mktj.js";import"./chunk-b1a55n2g.js";import"./chunk-bxhyh54r.js";import"./chunk-k3gp1qmc.js";import"./chunk-vtytg7jt.js";import"./chunk-055ns4k8.js";import{Th}from"./chunk-jsyn1gcs.js";import"./chunk-rg63yke9.js";import"./chunk-hjabkkf1.js";import"./chunk-mpc9nxv5.js";import"./chunk-wr9nx1kq.js";import{Jo}from"./chunk-t230ska5.js";import"./chunk-gph9jdam.js";import"./chunk-gn6mgw10.js";import{rn}from"./chunk-dpwtsz9f.js";import{G5t}from"./chunk-e3hz1vxg.js";import{Wv,pu,Iu,TP}from"./chunk-5my546sf.js";import{Wu}from"./chunk-9paqaf5m.js";import{tet,W5t}from"./chunk-chwg86z2.js";import"./chunk-5czfzexq.js";import"./chunk-8z30qdkb.js";import{spawn as E}from"child_process";import{closeSync as p}from"fs";import{constants as v}from"os";import{isatty as u}from"tty";function d(){for(let r=0;r<32;r++){if(r===1||r===2)continue;try{if(u(r))p(r)}catch{}}}async function B({proactivity:r}={}){if(await new Promise((e)=>setImmediate(e)),!await TP())return await rn("agent_launcher","relaunch_launcher_not_runnable"),process.stderr.write(`
${Iu()??`${Wv}: launcher \`${pu()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting), then start claude again`}
`),Jo(1);let{cmd:n,prefixArgs:c}=Wu(),s=process.argv.slice(2),t={...process.env};delete t[tet],Object.assign(t,W5t()),G5t();let i=E(n,[...c,...s],{stdio:"inherit",env:t});d();let a=["SIGINT","SIGTERM","SIGHUP"];for(let e of a)process.on(e,()=>{try{i.kill(e)}catch{}});return new Promise(()=>{i.on("close",(e,o)=>{let l=o?128+(v.signals[o]??0):0;process.exit(e??l)}),i.on("error",(e)=>{process.stderr.write(`Failed to relaunch Claude Code: ${e.message}
`),Th("relaunch_child_error"),process.exit(1)})})}export{B as execRelaunch};
