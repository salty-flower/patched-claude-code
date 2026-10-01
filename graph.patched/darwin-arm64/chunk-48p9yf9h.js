// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import"./chunk-g5e6pf8s.js";import"./chunk-g9zw99sb.js";import"./chunk-hs50vfa7.js";import"./chunk-jm8r4kd0.js";import"./chunk-2j7zyd8v.js";import"./chunk-h1eby6n2.js";import"./chunk-dsp1md5e.js";import"./chunk-sxefq60x.js";import"./chunk-1fpwxv0g.js";import"./chunk-ypa64mmn.js";import"./chunk-a7cah040.js";import"./chunk-nynxm73s.js";import"./chunk-vmffs68f.js";import"./chunk-3wz0srxw.js";import{Th}from"./chunk-dard33vx.js";import"./chunk-62dhtzrb.js";import"./chunk-zwbw6dvp.js";import"./chunk-mpc9nxv5.js";import"./chunk-58nkm0fd.js";import{Jo}from"./chunk-xs0g0734.js";import"./chunk-n8h76tq4.js";import"./chunk-aykv0zbt.js";import{rn}from"./chunk-sc069zjc.js";import{i4t}from"./chunk-mc379p8a.js";import{GE,fu,Pu,PI}from"./chunk-5n7d074b.js";import{Wu}from"./chunk-6t4mk6pp.js";import{det,o4t}from"./chunk-nt522987.js";import"./chunk-m6ehjtd1.js";import"./chunk-r4ra030x.js";import{spawn as E}from"child_process";import{closeSync as p}from"fs";import{constants as v}from"os";import{isatty as u}from"tty";function d(){for(let r=0;r<32;r++){if(r===1||r===2)continue;try{if(u(r))p(r)}catch{}}}async function B({proactivity:r}={}){if(await new Promise((e)=>setImmediate(e)),!await PI())return await rn("agent_launcher","relaunch_launcher_not_runnable"),process.stderr.write(`
${Pu()??`${GE}: launcher \`${fu()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting), then start claude again`}
`),Jo(1);let{cmd:n,prefixArgs:c}=Wu(),s=process.argv.slice(2),t={...process.env};delete t[det],Object.assign(t,o4t()),i4t();let i=E(n,[...c,...s],{stdio:"inherit",env:t});d();let a=["SIGINT","SIGTERM","SIGHUP"];for(let e of a)process.on(e,()=>{try{i.kill(e)}catch{}});return new Promise(()=>{i.on("close",(e,o)=>{let l=o?128+(v.signals[o]??0):0;process.exit(e??l)}),i.on("error",(e)=>{process.stderr.write(`Failed to relaunch Claude Code: ${e.message}
`),Th("relaunch_child_error"),process.exit(1)})})}export{B as execRelaunch};
