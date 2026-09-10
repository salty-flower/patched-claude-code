// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{l}from"./chunk-59zxrwfh.js";import{Yt}from"./chunk-b71jaj6f.js";import{ke}from"./chunk-qrernxw9.js";import{N}from"./chunk-mtqrv1h8.js";import{S,t}from"./chunk-cmg3b5hg.js";import{Se}from"./chunk-1k8htemc.js";import{og,rG}from"./chunk-664fvn0k.js";import{Rt}from"./chunk-6ebnzmdf.js";import{join as u}from"path";function Yct(){return u(Se(),"daemon.status.json")}function Xct(){return ke.state("daemon-status")}async function oGn(o,e){let n={supervisorPid:process.pid,supervisorProcStart:rG(),writtenAt:Date.now(),workers:o};if(N()&&e!==void 0){try{let r=await e.write(Xct(),S(n,null,2),{mode:438&~process.umask()});if(!r.ok)t(`writeDaemonStatus: ${r.error.code}`)}catch(r){t(`writeDaemonStatus: ${l(r)}`)}return}try{await Yt().atomicWrite(Yct(),S(n,null,2))}catch{}}async function sGn(o){if(N()&&o!==void 0){try{let e=await o.delete(Xct());if(!e.ok)t(`removeDaemonStatus: ${e.error.code}`)}catch(e){t(`removeDaemonStatus: ${l(e)}`)}return}try{await Yt().delete(Yct())}catch{}}async function iGn(o){let e;if(N()&&o!==void 0){let a;try{a=await o.readText([Xct()])}catch{return null}if(!a.ok)return null;let s=a.value.items[0];if(!s.found)return null;e=s.value}else try{e=await Yt().read(Yct())}catch{return null}let n=Rt(e,!1);if(!n||typeof n!=="object")return null;let r=n;if(typeof r.supervisorPid!=="number"||typeof r.workers!=="object"||r.workers===null)return null;try{process.kill(r.supervisorPid,0)}catch{return null}let i=typeof r.supervisorProcStart==="string"?r.supervisorProcStart:void 0;if(!await og(r.supervisorPid,i))return null;return n}
export{Yct,Xct,oGn,sGn,iGn};
