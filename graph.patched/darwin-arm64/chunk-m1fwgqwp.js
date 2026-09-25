// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{l}from"./chunk-shf1fjz2.js";import{N}from"./chunk-37kdx3dg.js";import{b,t}from"./chunk-wvb0gwjm.js";import{we}from"./chunk-4cwgnmh9.js";import{Zt}from"./chunk-hn35vsf8.js";import{Te}from"./chunk-tcx7fvpc.js";import{e_,nY}from"./chunk-m3rjj2qj.js";import{ft}from"./chunk-fdnv15ej.js";import{join as u}from"path";function X$t(){return u(we(),"daemon.status.json")}function J$t(){return Te.state("daemon-status")}async function VBr(o,r){let s={supervisorPid:process.pid,supervisorProcStart:nY(),writtenAt:Date.now(),workers:o};if(N()&&r!==void 0)try{let e=await r.write(J$t(),b(s,null,2),{mode:438&~process.umask()});if(!e.ok)t(`writeDaemonStatus: ${e.error.code}`);return e.ok}catch(e){return t(`writeDaemonStatus: ${l(e)}`),!1}try{return await Zt().atomicWrite(X$t(),b(s,null,2)),!0}catch(e){return t(`writeDaemonStatus: ${l(e)}`),!1}}async function qBr(o){if(N()&&o!==void 0){try{let r=await o.delete(J$t());if(!r.ok)t(`removeDaemonStatus: ${r.error.code}`)}catch(r){t(`removeDaemonStatus: ${l(r)}`)}return}try{await Zt().delete(X$t())}catch{}}async function KBr(o){let r;if(N()&&o!==void 0){let n;try{n=await o.readText([J$t()])}catch{return null}if(!n.ok)return null;let i=n.value.items[0];if(!i.found)return null;r=i.value}else try{r=await Zt().read(X$t())}catch{return null}let s=ft(r,!1);if(!s||typeof s!=="object")return null;let e=s;if(typeof e.supervisorPid!=="number"||typeof e.workers!=="object"||e.workers===null)return null;try{process.kill(e.supervisorPid,0)}catch{return null}let a=typeof e.supervisorProcStart==="string"?e.supervisorProcStart:void 0;if(!await e_(e.supervisorPid,a))return null;return s}function YBr(o){return[]}
export{X$t,J$t,VBr,qBr,KBr,YBr};
