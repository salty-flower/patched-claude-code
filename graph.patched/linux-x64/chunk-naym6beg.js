// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import"./chunk-d8qjp6nk.js";import"./chunk-xg0fb0fx.js";import"./chunk-1k8htemc.js";import"./chunk-vp9rx3bq.js";import"./chunk-xenybawd.js";import"./chunk-1bwwmttj.js";import"./chunk-6n7yk222.js";import"./chunk-mtqrv1h8.js";import"./chunk-kse90n8m.js";import"./chunk-0rpkhv24.js";import"./chunk-59zxrwfh.js";import"./chunk-cmg3b5hg.js";import{df}from"./chunk-c413mrzf.js";import"./chunk-p9k2m8jj.js";import"./chunk-4thwge0q.js";import"./chunk-8yrsa1e1.js";import{vs}from"./chunk-v9gw8e9x.js";import"./chunk-vzc7jamd.js";import"./chunk-v17gpk1z.js";import"./chunk-nx6yj2w6.js";import{En}from"./chunk-t5df5mky.js";import{npt}from"./chunk-ngmx61yc.js";import{$S,Nl,Wc,Bk}from"./chunk-asw9cf3e.js";import{md}from"./chunk-8crr9zsa.js";import{COe,ept}from"./chunk-697mge0w.js";import"./chunk-4g6n3ads.js";import"./chunk-5md0kwdx.js";import{spawn as E}from"child_process";import{closeSync as p}from"fs";import{constants as v}from"os";import{isatty as u}from"tty";function d(){for(let r=0;r<32;r++){if(r===1||r===2)continue;try{if(u(r))p(r)}catch{}}}async function B({proactivity:r}={}){if(await new Promise((e)=>setImmediate(e)),!await Bk())return await En("agent_launcher","relaunch_launcher_not_runnable"),process.stderr.write(`
${Wc()??`${$S}: launcher \`${Nl()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting), then start claude again`}
`),vs(1);let{cmd:n,prefixArgs:c}=md(),s=process.argv.slice(2),t={...process.env};delete t[COe],Object.assign(t,ept()),npt();let i=E(n,[...c,...s],{stdio:"inherit",env:t});d();let a=["SIGINT","SIGTERM","SIGHUP"];for(let e of a)process.on(e,()=>{try{i.kill(e)}catch{}});return new Promise(()=>{i.on("close",(e,o)=>{let l=o?128+(v.signals[o]??0):0;process.exit(e??l)}),i.on("error",(e)=>{process.stderr.write(`Failed to relaunch Claude Code: ${e.message}
`),df("relaunch_child_error"),process.exit(1)})})}export{B as execRelaunch};
