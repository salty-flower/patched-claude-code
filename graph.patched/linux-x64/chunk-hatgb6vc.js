// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{l}from"./chunk-cnzbk8gg.js";import{en}from"./chunk-d6f1t6sb.js";import{Ce}from"./chunk-679ytzs5.js";import{F}from"./chunk-qztrb7e5.js";import{w,t}from"./chunk-847hpqqs.js";import{we}from"./chunk-k4wnp212.js";import{lh,MK}from"./chunk-qk93vtk9.js";import{St}from"./chunk-ayzpxv7a.js";import{join as u}from"path";function ewt(){return u(we(),"daemon.status.json")}function twt(){return Ce.state("daemon-status")}async function Vor(o,e){let n={supervisorPid:process.pid,supervisorProcStart:MK(),writtenAt:Date.now(),workers:o};if(F()&&e!==void 0){try{let r=await e.write(twt(),w(n,null,2),{mode:438&~process.umask()});if(!r.ok)t(`writeDaemonStatus: ${r.error.code}`)}catch(r){t(`writeDaemonStatus: ${l(r)}`)}return}try{await en().atomicWrite(ewt(),w(n,null,2))}catch{}}async function Kor(o){if(F()&&o!==void 0){try{let e=await o.delete(twt());if(!e.ok)t(`removeDaemonStatus: ${e.error.code}`)}catch(e){t(`removeDaemonStatus: ${l(e)}`)}return}try{await en().delete(ewt())}catch{}}async function Yor(o){let e;if(F()&&o!==void 0){let a;try{a=await o.readText([twt()])}catch{return null}if(!a.ok)return null;let s=a.value.items[0];if(!s.found)return null;e=s.value}else try{e=await en().read(ewt())}catch{return null}let n=St(e,!1);if(!n||typeof n!=="object")return null;let r=n;if(typeof r.supervisorPid!=="number"||typeof r.workers!=="object"||r.workers===null)return null;try{process.kill(r.supervisorPid,0)}catch{return null}let i=typeof r.supervisorProcStart==="string"?r.supervisorProcStart:void 0;if(!await lh(r.supervisorPid,i))return null;return n}
export{ewt,twt,Vor,Kor,Yor};
