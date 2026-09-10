// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{l}from"./chunk-wkyng8j1.js";import{Kt}from"./chunk-az7e2tjv.js";import{Ce}from"./chunk-tfmhv9d3.js";import{M}from"./chunk-wmtek349.js";import{b,t}from"./chunk-w930ag8r.js";import{be}from"./chunk-3kadfzjs.js";import{Jm,GW}from"./chunk-hjmm0v46.js";import{Rt}from"./chunk-mrb6zwbg.js";import{join as u}from"path";function klt(){return u(be(),"daemon.status.json")}function Rlt(){return Ce.state("daemon-status")}async function Wjn(o,e){let n={supervisorPid:process.pid,supervisorProcStart:GW(),writtenAt:Date.now(),workers:o};if(M()&&e!==void 0){try{let r=await e.write(Rlt(),b(n,null,2),{mode:438&~process.umask()});if(!r.ok)t(`writeDaemonStatus: ${r.error.code}`)}catch(r){t(`writeDaemonStatus: ${l(r)}`)}return}try{await Kt().atomicWrite(klt(),b(n,null,2))}catch{}}async function zjn(o){if(M()&&o!==void 0){try{let e=await o.delete(Rlt());if(!e.ok)t(`removeDaemonStatus: ${e.error.code}`)}catch(e){t(`removeDaemonStatus: ${l(e)}`)}return}try{await Kt().delete(klt())}catch{}}async function Gjn(o){let e;if(M()&&o!==void 0){let a;try{a=await o.readText([Rlt()])}catch{return null}if(!a.ok)return null;let s=a.value.items[0];if(!s.found)return null;e=s.value}else try{e=await Kt().read(klt())}catch{return null}let n=Rt(e,!1);if(!n||typeof n!=="object")return null;let r=n;if(typeof r.supervisorPid!=="number"||typeof r.workers!=="object"||r.workers===null)return null;try{process.kill(r.supervisorPid,0)}catch{return null}let i=typeof r.supervisorProcStart==="string"?r.supervisorProcStart:void 0;if(!await Jm(r.supervisorPid,i))return null;return n}
export{klt,Rlt,Wjn,zjn,Gjn};
