// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import"./chunk-6cqmwr9m.js";import"./chunk-gas689jj.js";import"./chunk-shf1fjz2.js";import"./chunk-zr6jq9j9.js";import"./chunk-w13amena.js";import"./chunk-4cwgnmh9.js";import"./chunk-1y7zyxh8.js";import"./chunk-njn6k74e.js";import"./chunk-3a4khaz5.js";import"./chunk-w9w461gr.js";import"./chunk-s8xs8s76.js";import"./chunk-37kdx3dg.js";import"./chunk-v9aeg87c.js";import"./chunk-wvb0gwjm.js";import{$g}from"./chunk-81r5kx3r.js";import"./chunk-j370x2tz.js";import"./chunk-0dpks9t0.js";import"./chunk-vzqvvnm0.js";import"./chunk-n3x619p1.js";import{ws}from"./chunk-qdvqpm53.js";import"./chunk-x4gz28fm.js";import"./chunk-9cfndpw0.js";import{fn}from"./chunk-ymkzysdh.js";import{tjt}from"./chunk-hp7rb9qf.js";import{Uw,Md,cp,bP}from"./chunk-8s6d4v7d.js";import{Pp}from"./chunk-nsjn2z3c.js";import{fYe,Z2t}from"./chunk-79qxstkc.js";import"./chunk-85e5bpex.js";import"./chunk-8bc0vvxx.js";import{spawn as E}from"child_process";import{closeSync as p}from"fs";import{constants as v}from"os";import{isatty as u}from"tty";function d(){for(let r=0;r<32;r++){if(r===1||r===2)continue;try{if(u(r))p(r)}catch{}}}async function B({proactivity:r}={}){if(await new Promise((e)=>setImmediate(e)),!await bP())return await fn("agent_launcher","relaunch_launcher_not_runnable"),process.stderr.write(`
${cp()??`${Uw}: launcher \`${Md()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting), then start claude again`}
`),ws(1);let{cmd:n,prefixArgs:c}=Pp(),s=process.argv.slice(2),t={...process.env};delete t[fYe],Object.assign(t,Z2t()),tjt();let i=E(n,[...c,...s],{stdio:"inherit",env:t});d();let a=["SIGINT","SIGTERM","SIGHUP"];for(let e of a)process.on(e,()=>{try{i.kill(e)}catch{}});return new Promise(()=>{i.on("close",(e,o)=>{let l=o?128+(v.signals[o]??0):0;process.exit(e??l)}),i.on("error",(e)=>{process.stderr.write(`Failed to relaunch Claude Code: ${e.message}
`),$g("relaunch_child_error"),process.exit(1)})})}export{B as execRelaunch};
