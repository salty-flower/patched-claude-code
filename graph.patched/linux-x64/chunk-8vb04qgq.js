// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import"./chunk-gj513b2z.js";import"./chunk-d3xvzk7s.js";import"./chunk-k4wnp212.js";import"./chunk-67jj8qay.js";import"./chunk-q3f1bdx8.js";import"./chunk-q2vrcqny.js";import"./chunk-txfrkyzp.js";import"./chunk-qztrb7e5.js";import"./chunk-40wq8hf6.js";import"./chunk-p9tbyvzw.js";import"./chunk-cnzbk8gg.js";import"./chunk-847hpqqs.js";import{fm}from"./chunk-hdk9febf.js";import"./chunk-kh3dq6rw.js";import"./chunk-1cx6bcw0.js";import"./chunk-psm40xqz.js";import{is}from"./chunk-c3f4jppy.js";import"./chunk-39xz88rg.js";import"./chunk-5a4y4a7y.js";import{gn}from"./chunk-61g2sn1g.js";import{ZEt}from"./chunk-ftw3hx3b.js";import{Mv,Rc,$u,YT}from"./chunk-dqs62gec.js";import{nd}from"./chunk-481806bp.js";import{wBe,JEt}from"./chunk-cghfq4p4.js";import"./chunk-yssqp134.js";import{spawn as E}from"child_process";import{closeSync as p}from"fs";import{constants as v}from"os";import{isatty as u}from"tty";function d(){for(let r=0;r<32;r++){if(r===1||r===2)continue;try{if(u(r))p(r)}catch{}}}async function B({proactivity:r}={}){if(await new Promise((e)=>setImmediate(e)),!await YT())return await gn("agent_launcher","relaunch_launcher_not_runnable"),process.stderr.write(`
${$u()??`${Mv}: launcher \`${Rc()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting), then start claude again`}
`),is(1);let{cmd:n,prefixArgs:c}=nd(),s=process.argv.slice(2),t={...process.env};delete t[wBe],Object.assign(t,JEt()),ZEt();let i=E(n,[...c,...s],{stdio:"inherit",env:t});d();let a=["SIGINT","SIGTERM","SIGHUP"];for(let e of a)process.on(e,()=>{try{i.kill(e)}catch{}});return new Promise(()=>{i.on("close",(e,o)=>{let l=o?128+(v.signals[o]??0):0;process.exit(e??l)}),i.on("error",(e)=>{process.stderr.write(`Failed to relaunch Claude Code: ${e.message}
`),fm("relaunch_child_error"),process.exit(1)})})}export{B as execRelaunch};
