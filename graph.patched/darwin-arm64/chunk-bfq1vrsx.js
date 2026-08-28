// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{l}from"./chunk-e5bq01yj.js";import{Qt}from"./chunk-q2p37kwf.js";import{Se}from"./chunk-3vs63y6b.js";import{S,n}from"./chunk-cmkfpkth.js";import{ge}from"./chunk-j6bwf1es.js";import{dm,WB}from"./chunk-r3k3kcs0.js";import{$t}from"./chunk-j7d3ep7z.js";import{H}from"./chunk-9p9ys44p.js";import{join as u}from"path";function CJe(){return u(ge(),"daemon.status.json")}function AJe(){return Se.state("daemon-status")}async function vkn(e,r){let o={supervisorPid:process.pid,supervisorProcStart:WB(),writtenAt:Date.now(),workers:e};if(H()&&r!==void 0){try{let t=await r.write(AJe(),S(o,null,2),{mode:438&~process.umask()});if(!t.ok)n(`writeDaemonStatus: ${t.error.code}`)}catch(t){n(`writeDaemonStatus: ${l(t)}`)}return}try{await Qt().atomicWrite(CJe(),S(o,null,2))}catch{}}async function wkn(e){if(H()&&e!==void 0){try{let r=await e.delete(AJe());if(!r.ok)n(`removeDaemonStatus: ${r.error.code}`)}catch(r){n(`removeDaemonStatus: ${l(r)}`)}return}try{await Qt().delete(CJe())}catch{}}async function Tkn(e){let r;if(H()&&e!==void 0){let a;try{a=await e.readText([AJe()])}catch{return null}if(!a.ok)return null;let s=a.value.items[0];if(!s.found)return null;r=s.value}else try{r=await Qt().read(CJe())}catch{return null}let o=$t(r,!1);if(!o||typeof o!=="object")return null;let t=o;if(typeof t.supervisorPid!=="number"||typeof t.workers!=="object"||t.workers===null)return null;try{process.kill(t.supervisorPid,0)}catch{return null}let i=typeof t.supervisorProcStart==="string"?t.supervisorProcStart:void 0;if(!await dm(t.supervisorPid,i))return null;return o}
export{CJe,AJe,vkn,wkn,Tkn};
