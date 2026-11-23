// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Kf}from"./chunk-m8nhymg4.js";import{he}from"./chunk-0cvfymxt.js";import{i}from"./chunk-428zme0n.js";import{RT}from"./chunk-cr30fncm.js";import{we}from"./chunk-65t70pys.js";import{z}from"./chunk-n44szebn.js";import{Vxt,CEn}from"./chunk-2eg1hxx8.js";import{nx}from"./chunk-gywtf5sd.js";import{If}from"./chunk-3s06mjrb.js";import{Qi}from"./chunk-fnq7zv74.js";function xhn(e,r,t="now"){if(e<=0||e>=128)return;try{z("error","cli_exit_cause",{exit_code:e,cause:r,spawned_by_session:Boolean(i.CLAUDE_CODE_CHILD_SESSION||i.CLAUDECODE)},t)}catch{}}function Rf(e){console.error(we.red(e))}function vn(e,r="cli_error",t="unnamed_cli_error"){if(e)Rf(e);if(!Kf())RT(r);xhn(1,t),process.exit(1);return}function Y4(e){if(e)process.stdout.write(e+`
`);process.exit(0);return}function Phn(e){process.exit(e);return}async function xf(e){await new Promise((r)=>{process.stdout.write(e,()=>r())})}function _0(e){process.stderr.write(we.yellow(Qi(e))+`
`)}var n=2000,o=250;async function X4({waitForOAuthRefresh:e=!0}={}){let r=Vxt();if(e&&!r)await CEn();await he(nx(),n);try{let{flushAnalyticsSinks:t}=await import("./chunk-frvj1mnc.js");await t()}catch{}if(e&&r)await CEn(),await he(nx(),o)}async function So(e){await X4(),process.exit(e);return}function H5n(e){let r=If(()=>void So(0));e.on("end",r),e.on("error",r)}async function bo(e,r){if(e)Rf(e);return await X4(),vn(void 0,void 0,r)}async function Kw(e){if(e)process.stdout.write(e+`
`);return await X4(),Y4()}
export{xhn,Rf,vn,Y4,Phn,xf,_0,X4,So,H5n,bo,Kw};
