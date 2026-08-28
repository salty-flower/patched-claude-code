// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{l}from"./chunk-7h2h1m4y.js";import{Qt}from"./chunk-apqzzgp2.js";import{ve}from"./chunk-fz00m7zs.js";import{v,n}from"./chunk-akz0cj0f.js";import{ge}from"./chunk-xj8gnzar.js";import{um,BU}from"./chunk-0nb3y211.js";import{Ft}from"./chunk-vryz951p.js";import{D}from"./chunk-6fnbbyjg.js";import{join as u}from"path";function AJe(){return u(ge(),"daemon.status.json")}function kJe(){return ve.state("daemon-status")}async function gHn(e,r){let o={supervisorPid:process.pid,supervisorProcStart:BU(),writtenAt:Date.now(),workers:e};if(D()&&r!==void 0){try{let t=await r.write(kJe(),v(o,null,2),{mode:438&~process.umask()});if(!t.ok)n(`writeDaemonStatus: ${t.error.code}`)}catch(t){n(`writeDaemonStatus: ${l(t)}`)}return}try{await Qt().atomicWrite(AJe(),v(o,null,2))}catch{}}async function yHn(e){if(D()&&e!==void 0){try{let r=await e.delete(kJe());if(!r.ok)n(`removeDaemonStatus: ${r.error.code}`)}catch(r){n(`removeDaemonStatus: ${l(r)}`)}return}try{await Qt().delete(AJe())}catch{}}async function bHn(e){let r;if(D()&&e!==void 0){let a;try{a=await e.readText([kJe()])}catch{return null}if(!a.ok)return null;let s=a.value.items[0];if(!s.found)return null;r=s.value}else try{r=await Qt().read(AJe())}catch{return null}let o=Ft(r,!1);if(!o||typeof o!=="object")return null;let t=o;if(typeof t.supervisorPid!=="number"||typeof t.workers!=="object"||t.workers===null)return null;try{process.kill(t.supervisorPid,0)}catch{return null}let i=typeof t.supervisorProcStart==="string"?t.supervisorProcStart:void 0;if(!await um(t.supervisorPid,i))return null;return o}
export{AJe,kJe,gHn,yHn,bHn};
