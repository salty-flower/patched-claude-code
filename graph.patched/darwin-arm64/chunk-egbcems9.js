// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import"./chunk-vx7e38ke.js";import"./chunk-q2h0fawe.js";import"./chunk-jxdnn2j1.js";import"./chunk-67jj8qay.js";import"./chunk-7greh2d8.js";import"./chunk-wkhfcbsj.js";import"./chunk-sgamszzq.js";import"./chunk-n93bke93.js";import"./chunk-tq3ft6e6.js";import"./chunk-k6smmjsm.js";import"./chunk-qq9jq5dz.js";import"./chunk-qmm87fyw.js";import{mm}from"./chunk-pfxvy4ay.js";import"./chunk-vzm3bfp5.js";import"./chunk-1cx6bcw0.js";import"./chunk-d5zyj0vt.js";import{is}from"./chunk-bzd488vq.js";import"./chunk-gyyhh83h.js";import"./chunk-jxv3x25k.js";import{gn}from"./chunk-4akrhkry.js";import{fAt}from"./chunk-4ccad79k.js";import{ME,Rc,Fu,JT}from"./chunk-rab1mtgb.js";import{nd}from"./chunk-rfypvnfk.js";import{HBe,dAt}from"./chunk-7qwkt3hj.js";import"./chunk-ngfw0fb9.js";import{spawn as E}from"child_process";import{closeSync as p}from"fs";import{constants as v}from"os";import{isatty as u}from"tty";function d(){for(let r=0;r<32;r++){if(r===1||r===2)continue;try{if(u(r))p(r)}catch{}}}async function B({proactivity:r}={}){if(await new Promise((e)=>setImmediate(e)),!await JT())return await gn("agent_launcher","relaunch_launcher_not_runnable"),process.stderr.write(`
${Fu()??`${ME}: launcher \`${Rc()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting), then start claude again`}
`),is(1);let{cmd:n,prefixArgs:c}=nd(),s=process.argv.slice(2),t={...process.env};delete t[HBe],Object.assign(t,dAt()),fAt();let i=E(n,[...c,...s],{stdio:"inherit",env:t});d();let a=["SIGINT","SIGTERM","SIGHUP"];for(let e of a)process.on(e,()=>{try{i.kill(e)}catch{}});return new Promise(()=>{i.on("close",(e,o)=>{let l=o?128+(v.signals[o]??0):0;process.exit(e??l)}),i.on("error",(e)=>{process.stderr.write(`Failed to relaunch Claude Code: ${e.message}
`),mm("relaunch_child_error"),process.exit(1)})})}export{B as execRelaunch};
