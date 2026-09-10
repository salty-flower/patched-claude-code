// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{l}from"./chunk-rgs4nrpq.js";import{Kt}from"./chunk-hv7xv8k9.js";import{ve}from"./chunk-d6akndrs.js";import{N}from"./chunk-95e36pja.js";import{b,t}from"./chunk-wbbe5mtc.js";import{be}from"./chunk-g6gcsnnp.js";import{ag,fz}from"./chunk-ssbk02ew.js";import{Rt}from"./chunk-br5w3my7.js";import{join as u}from"path";function cut(){return u(be(),"daemon.status.json")}function uut(){return ve.state("daemon-status")}async function Ozn(o,e){let n={supervisorPid:process.pid,supervisorProcStart:fz(),writtenAt:Date.now(),workers:o};if(N()&&e!==void 0){try{let r=await e.write(uut(),b(n,null,2),{mode:438&~process.umask()});if(!r.ok)t(`writeDaemonStatus: ${r.error.code}`)}catch(r){t(`writeDaemonStatus: ${l(r)}`)}return}try{await Kt().atomicWrite(cut(),b(n,null,2))}catch{}}async function Dzn(o){if(N()&&o!==void 0){try{let e=await o.delete(uut());if(!e.ok)t(`removeDaemonStatus: ${e.error.code}`)}catch(e){t(`removeDaemonStatus: ${l(e)}`)}return}try{await Kt().delete(cut())}catch{}}async function Lzn(o){let e;if(N()&&o!==void 0){let a;try{a=await o.readText([uut()])}catch{return null}if(!a.ok)return null;let s=a.value.items[0];if(!s.found)return null;e=s.value}else try{e=await Kt().read(cut())}catch{return null}let n=Rt(e,!1);if(!n||typeof n!=="object")return null;let r=n;if(typeof r.supervisorPid!=="number"||typeof r.workers!=="object"||r.workers===null)return null;try{process.kill(r.supervisorPid,0)}catch{return null}let i=typeof r.supervisorProcStart==="string"?r.supervisorProcStart:void 0;if(!await ag(r.supervisorPid,i))return null;return n}
export{cut,uut,Ozn,Dzn,Lzn};
