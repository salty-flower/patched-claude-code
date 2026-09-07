// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{l}from"./chunk-7s5qs9ea.js";import{zt}from"./chunk-wcpxyz2e.js";import{Ee}from"./chunk-fpk3t24b.js";import{O}from"./chunk-h9wtyp3p.js";import{b,t}from"./chunk-1tk5haqn.js";import{be}from"./chunk-e1n9j4jc.js";import{km,J2}from"./chunk-d2fvt8sx.js";import{It}from"./chunk-k5nqc3a8.js";import{join as u}from"path";function tot(){return u(be(),"daemon.status.json")}function not(){return Ee.state("daemon-status")}async function bOn(o,e){let n={supervisorPid:process.pid,supervisorProcStart:J2(),writtenAt:Date.now(),workers:o};if(O()&&e!==void 0){try{let r=await e.write(not(),b(n,null,2),{mode:438&~process.umask()});if(!r.ok)t(`writeDaemonStatus: ${r.error.code}`)}catch(r){t(`writeDaemonStatus: ${l(r)}`)}return}try{await zt().atomicWrite(tot(),b(n,null,2))}catch{}}async function SOn(o){if(O()&&o!==void 0){try{let e=await o.delete(not());if(!e.ok)t(`removeDaemonStatus: ${e.error.code}`)}catch(e){t(`removeDaemonStatus: ${l(e)}`)}return}try{await zt().delete(tot())}catch{}}async function HOn(o){let e;if(O()&&o!==void 0){let a;try{a=await o.readText([not()])}catch{return null}if(!a.ok)return null;let s=a.value.items[0];if(!s.found)return null;e=s.value}else try{e=await zt().read(tot())}catch{return null}let n=It(e,!1);if(!n||typeof n!=="object")return null;let r=n;if(typeof r.supervisorPid!=="number"||typeof r.workers!=="object"||r.workers===null)return null;try{process.kill(r.supervisorPid,0)}catch{return null}let i=typeof r.supervisorProcStart==="string"?r.supervisorProcStart:void 0;if(!await km(r.supervisorPid,i))return null;return n}
export{tot,not,bOn,SOn,HOn};
