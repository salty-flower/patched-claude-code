// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import"./chunk-8yfx63va.js";import"./chunk-0yrss36a.js";import"./chunk-g6gcsnnp.js";import"./chunk-vp9rx3bq.js";import"./chunk-2c9ntqb3.js";import"./chunk-dv6tepz3.js";import"./chunk-sgyvc67j.js";import"./chunk-95e36pja.js";import"./chunk-3rs4ng0x.js";import"./chunk-am8gnetv.js";import"./chunk-rgs4nrpq.js";import"./chunk-wbbe5mtc.js";import{df}from"./chunk-kr797g3g.js";import"./chunk-2rebt4am.js";import"./chunk-4thwge0q.js";import"./chunk-azaesbcc.js";import{Es}from"./chunk-dc4m100m.js";import"./chunk-jh8csezs.js";import"./chunk-jngjxeh6.js";import"./chunk-z0p50v56.js";import{An}from"./chunk-a25t2bvk.js";import{fpt}from"./chunk-khw712fe.js";import{Fb,Fl,Gc,jv}from"./chunk-wr7tr3yw.js";import{gd}from"./chunk-j7q682yr.js";import{DDe,dpt}from"./chunk-gnhk6as7.js";import"./chunk-2sq402hd.js";import"./chunk-10wetekf.js";import{spawn as E}from"child_process";import{closeSync as p}from"fs";import{constants as v}from"os";import{isatty as u}from"tty";function d(){for(let r=0;r<32;r++){if(r===1||r===2)continue;try{if(u(r))p(r)}catch{}}}async function B({proactivity:r}={}){if(await new Promise((e)=>setImmediate(e)),!await jv())return await An("agent_launcher","relaunch_launcher_not_runnable"),process.stderr.write(`
${Gc()??`${Fb}: launcher \`${Fl()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting), then start claude again`}
`),Es(1);let{cmd:n,prefixArgs:c}=gd(),s=process.argv.slice(2),t={...process.env};delete t[DDe],Object.assign(t,dpt()),fpt();let i=E(n,[...c,...s],{stdio:"inherit",env:t});d();let a=["SIGINT","SIGTERM","SIGHUP"];for(let e of a)process.on(e,()=>{try{i.kill(e)}catch{}});return new Promise(()=>{i.on("close",(e,o)=>{let l=o?128+(v.signals[o]??0):0;process.exit(e??l)}),i.on("error",(e)=>{process.stderr.write(`Failed to relaunch Claude Code: ${e.message}
`),df("relaunch_child_error"),process.exit(1)})})}export{B as execRelaunch};
