// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import{l}from"./chunk-h4f48kbj.js";import{qt}from"./chunk-km6n9zrg.js";import{Ce}from"./chunk-qe04h4c5.js";import{M}from"./chunk-h62vxw7j.js";import{b,n}from"./chunk-38sny42z.js";import{be}from"./chunk-5ndhfaq9.js";import{Pm,O6}from"./chunk-qjqntsq2.js";import{xt}from"./chunk-aa158d2j.js";import{join as u}from"path";function Zst(){return u(be(),"daemon.status.json")}function eit(){return Ce.state("daemon-status")}async function c$n(e,r){let o={supervisorPid:process.pid,supervisorProcStart:O6(),writtenAt:Date.now(),workers:e};if(M()&&r!==void 0){try{let t=await r.write(eit(),b(o,null,2),{mode:438&~process.umask()});if(!t.ok)n(`writeDaemonStatus: ${t.error.code}`)}catch(t){n(`writeDaemonStatus: ${l(t)}`)}return}try{await qt().atomicWrite(Zst(),b(o,null,2))}catch{}}async function u$n(e){if(M()&&e!==void 0){try{let r=await e.delete(eit());if(!r.ok)n(`removeDaemonStatus: ${r.error.code}`)}catch(r){n(`removeDaemonStatus: ${l(r)}`)}return}try{await qt().delete(Zst())}catch{}}async function d$n(e){let r;if(M()&&e!==void 0){let a;try{a=await e.readText([eit()])}catch{return null}if(!a.ok)return null;let s=a.value.items[0];if(!s.found)return null;r=s.value}else try{r=await qt().read(Zst())}catch{return null}let o=xt(r,!1);if(!o||typeof o!=="object")return null;let t=o;if(typeof t.supervisorPid!=="number"||typeof t.workers!=="object"||t.workers===null)return null;try{process.kill(t.supervisorPid,0)}catch{return null}let i=typeof t.supervisorProcStart==="string"?t.supervisorProcStart:void 0;if(!await Pm(t.supervisorPid,i))return null;return o}
export{Zst,eit,c$n,u$n,d$n};
