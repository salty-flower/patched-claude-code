// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{l}from"./chunk-dsb06hq9.js";import{Vt}from"./chunk-7r0gxy5k.js";import{Ce}from"./chunk-a190bznh.js";import{L}from"./chunk-0xdcm8sp.js";import{S,t}from"./chunk-84crg0gy.js";import{ye}from"./chunk-ty218y69.js";import{Vm,lW}from"./chunk-zjsfxnh6.js";import{Dt}from"./chunk-bpcwadmp.js";import{join as u}from"path";function bst(){return u(ye(),"daemon.status.json")}function wst(){return Ce.state("daemon-status")}async function PUn(o,e){let n={supervisorPid:process.pid,supervisorProcStart:lW(),writtenAt:Date.now(),workers:o};if(L()&&e!==void 0){try{let r=await e.write(wst(),S(n,null,2),{mode:438&~process.umask()});if(!r.ok)t(`writeDaemonStatus: ${r.error.code}`)}catch(r){t(`writeDaemonStatus: ${l(r)}`)}return}try{await Vt().atomicWrite(bst(),S(n,null,2))}catch{}}async function OUn(o){if(L()&&o!==void 0){try{let e=await o.delete(wst());if(!e.ok)t(`removeDaemonStatus: ${e.error.code}`)}catch(e){t(`removeDaemonStatus: ${l(e)}`)}return}try{await Vt().delete(bst())}catch{}}async function DUn(o){let e;if(L()&&o!==void 0){let a;try{a=await o.readText([wst()])}catch{return null}if(!a.ok)return null;let s=a.value.items[0];if(!s.found)return null;e=s.value}else try{e=await Vt().read(bst())}catch{return null}let n=Dt(e,!1);if(!n||typeof n!=="object")return null;let r=n;if(typeof r.supervisorPid!=="number"||typeof r.workers!=="object"||r.workers===null)return null;try{process.kill(r.supervisorPid,0)}catch{return null}let i=typeof r.supervisorProcStart==="string"?r.supervisorProcStart:void 0;if(!await Vm(r.supervisorPid,i))return null;return n}
export{bst,wst,PUn,OUn,DUn};
