// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Kf}from"./chunk-r3adsed5.js";import{he}from"./chunk-3rgses43.js";import{i}from"./chunk-5g5ea6r9.js";import{TT}from"./chunk-tcx7rcpg.js";import{we}from"./chunk-b8h39019.js";import{z}from"./chunk-tmanz2ax.js";import{$xt,uvn}from"./chunk-d0ff2ntk.js";import{ex}from"./chunk-374g520d.js";import{If}from"./chunk-jn776fhs.js";import{Qi}from"./chunk-ymxjmaqy.js";function phn(e,r,t="now"){if(e<=0||e>=128)return;try{z("error","cli_exit_cause",{exit_code:e,cause:r,spawned_by_session:Boolean(i.CLAUDE_CODE_CHILD_SESSION||i.CLAUDECODE)},t)}catch{}}function Cf(e){console.error(we.red(e))}function kn(e,r="cli_error",t="unnamed_cli_error"){if(e)Cf(e);if(!Kf())TT(r);phn(1,t),process.exit(1);return}function GK(e){if(e)process.stdout.write(e+`
`);process.exit(0);return}function mhn(e){process.exit(e);return}async function Rf(e){await new Promise((r)=>{process.stdout.write(e,()=>r())})}function mM(e){process.stderr.write(we.yellow(Qi(e))+`
`)}var n=2000,o=250;async function zK({waitForOAuthRefresh:e=!0}={}){let r=$xt();if(e&&!r)await uvn();await he(ex(),n);try{let{flushAnalyticsSinks:t}=await import("./chunk-j3t5e9kz.js");await t()}catch{}if(e&&r)await uvn(),await he(ex(),o)}async function bo(e){await zK(),process.exit(e);return}function x3s(e){let r=If(()=>void bo(0));e.on("end",r),e.on("error",r)}async function So(e,r){if(e)Cf(e);return await zK(),kn(void 0,void 0,r)}async function qw(e){if(e)process.stdout.write(e+`
`);return await zK(),GK()}
export{phn,Cf,kn,GK,mhn,Rf,mM,zK,bo,x3s,So,qw};
