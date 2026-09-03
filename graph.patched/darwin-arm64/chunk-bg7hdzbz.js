// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{l}from"./chunk-pc7b8z35.js";import{Xt}from"./chunk-p6qksxwe.js";import{Ae}from"./chunk-zjtbqw2e.js";import{L}from"./chunk-ma94d7pd.js";import{S,t}from"./chunk-t2jwg94b.js";import{Se}from"./chunk-2cgtbdj1.js";import{zm,Bj}from"./chunk-m2hw088w.js";import{Dt}from"./chunk-s20s1ge7.js";import{join as u}from"path";function qot(){return u(Se(),"daemon.status.json")}function zot(){return Ae.state("daemon-status")}async function I1n(o,e){let n={supervisorPid:process.pid,supervisorProcStart:Bj(),writtenAt:Date.now(),workers:o};if(L()&&e!==void 0){try{let r=await e.write(zot(),S(n,null,2),{mode:438&~process.umask()});if(!r.ok)t(`writeDaemonStatus: ${r.error.code}`)}catch(r){t(`writeDaemonStatus: ${l(r)}`)}return}try{await Xt().atomicWrite(qot(),S(n,null,2))}catch{}}async function P1n(o){if(L()&&o!==void 0){try{let e=await o.delete(zot());if(!e.ok)t(`removeDaemonStatus: ${e.error.code}`)}catch(e){t(`removeDaemonStatus: ${l(e)}`)}return}try{await Xt().delete(qot())}catch{}}async function O1n(o){let e;if(L()&&o!==void 0){let a;try{a=await o.readText([zot()])}catch{return null}if(!a.ok)return null;let s=a.value.items[0];if(!s.found)return null;e=s.value}else try{e=await Xt().read(qot())}catch{return null}let n=Dt(e,!1);if(!n||typeof n!=="object")return null;let r=n;if(typeof r.supervisorPid!=="number"||typeof r.workers!=="object"||r.workers===null)return null;try{process.kill(r.supervisorPid,0)}catch{return null}let i=typeof r.supervisorProcStart==="string"?r.supervisorProcStart:void 0;if(!await zm(r.supervisorPid,i))return null;return n}
export{qot,zot,I1n,P1n,O1n};
