// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{l}from"./chunk-qq9jq5dz.js";import{Jt}from"./chunk-gyqjm99t.js";import{ke}from"./chunk-aj022wxj.js";import{F}from"./chunk-n93bke93.js";import{w,t}from"./chunk-qmm87fyw.js";import{we}from"./chunk-jxdnn2j1.js";import{ch,WV}from"./chunk-gk6kz4gh.js";import{bt}from"./chunk-f1vfx2c9.js";import{join as u}from"path";function Lwt(){return u(we(),"daemon.status.json")}function Mwt(){return ke.state("daemon-status")}async function yir(o,e){let n={supervisorPid:process.pid,supervisorProcStart:WV(),writtenAt:Date.now(),workers:o};if(F()&&e!==void 0){try{let r=await e.write(Mwt(),w(n,null,2),{mode:438&~process.umask()});if(!r.ok)t(`writeDaemonStatus: ${r.error.code}`)}catch(r){t(`writeDaemonStatus: ${l(r)}`)}return}try{await Jt().atomicWrite(Lwt(),w(n,null,2))}catch{}}async function _ir(o){if(F()&&o!==void 0){try{let e=await o.delete(Mwt());if(!e.ok)t(`removeDaemonStatus: ${e.error.code}`)}catch(e){t(`removeDaemonStatus: ${l(e)}`)}return}try{await Jt().delete(Lwt())}catch{}}async function Sir(o){let e;if(F()&&o!==void 0){let a;try{a=await o.readText([Mwt()])}catch{return null}if(!a.ok)return null;let s=a.value.items[0];if(!s.found)return null;e=s.value}else try{e=await Jt().read(Lwt())}catch{return null}let n=bt(e,!1);if(!n||typeof n!=="object")return null;let r=n;if(typeof r.supervisorPid!=="number"||typeof r.workers!=="object"||r.workers===null)return null;try{process.kill(r.supervisorPid,0)}catch{return null}let i=typeof r.supervisorProcStart==="string"?r.supervisorProcStart:void 0;if(!await ch(r.supervisorPid,i))return null;return n}
export{Lwt,Mwt,yir,_ir,Sir};
