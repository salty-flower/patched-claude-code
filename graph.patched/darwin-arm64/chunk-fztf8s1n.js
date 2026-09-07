// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{l}from"./chunk-084v19yj.js";import{Gt}from"./chunk-6mr2v1ks.js";import{Ae}from"./chunk-dhrcn786.js";import{L}from"./chunk-7wmynp0n.js";import{S,t}from"./chunk-5q90j22t.js";import{Se}from"./chunk-4rr1ghkj.js";import{km,aj}from"./chunk-ehv9s8sq.js";import{xt}from"./chunk-2rhkgebc.js";import{join as u}from"path";function got(){return u(Se(),"daemon.status.json")}function hot(){return Ae.state("daemon-status")}async function XNn(o,e){let n={supervisorPid:process.pid,supervisorProcStart:aj(),writtenAt:Date.now(),workers:o};if(L()&&e!==void 0){try{let r=await e.write(hot(),S(n,null,2),{mode:438&~process.umask()});if(!r.ok)t(`writeDaemonStatus: ${r.error.code}`)}catch(r){t(`writeDaemonStatus: ${l(r)}`)}return}try{await Gt().atomicWrite(got(),S(n,null,2))}catch{}}async function YNn(o){if(L()&&o!==void 0){try{let e=await o.delete(hot());if(!e.ok)t(`removeDaemonStatus: ${e.error.code}`)}catch(e){t(`removeDaemonStatus: ${l(e)}`)}return}try{await Gt().delete(got())}catch{}}async function JNn(o){let e;if(L()&&o!==void 0){let a;try{a=await o.readText([hot()])}catch{return null}if(!a.ok)return null;let s=a.value.items[0];if(!s.found)return null;e=s.value}else try{e=await Gt().read(got())}catch{return null}let n=xt(e,!1);if(!n||typeof n!=="object")return null;let r=n;if(typeof r.supervisorPid!=="number"||typeof r.workers!=="object"||r.workers===null)return null;try{process.kill(r.supervisorPid,0)}catch{return null}let i=typeof r.supervisorProcStart==="string"?r.supervisorProcStart:void 0;if(!await km(r.supervisorPid,i))return null;return n}
export{got,hot,XNn,YNn,JNn};
