// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{l}from"./chunk-efckqwp7.js";import{an}from"./chunk-e7r3n0fy.js";import{we}from"./chunk-wsjwtx5h.js";import{S,n}from"./chunk-d0cr5d2v.js";import{He}from"./chunk-sgsf5yd5.js";import{Fm,D2}from"./chunk-bqf28esr.js";import{Bt}from"./chunk-a8be273g.js";import{D}from"./chunk-jw0x5qwf.js";import{join as u}from"path";function qet(){return u(He(),"daemon.status.json")}function Ket(){return we.state("daemon-status")}async function J0n(e,r){let o={supervisorPid:process.pid,supervisorProcStart:D2(),writtenAt:Date.now(),workers:e};if(D()&&r!==void 0){try{let t=await r.write(Ket(),S(o,null,2),{mode:438&~process.umask()});if(!t.ok)n(`writeDaemonStatus: ${t.error.code}`)}catch(t){n(`writeDaemonStatus: ${l(t)}`)}return}try{await an().atomicWrite(qet(),S(o,null,2))}catch{}}async function Q0n(e){if(D()&&e!==void 0){try{let r=await e.delete(Ket());if(!r.ok)n(`removeDaemonStatus: ${r.error.code}`)}catch(r){n(`removeDaemonStatus: ${l(r)}`)}return}try{await an().delete(qet())}catch{}}async function Z0n(e){let r;if(D()&&e!==void 0){let a;try{a=await e.readText([Ket()])}catch{return null}if(!a.ok)return null;let s=a.value.items[0];if(!s.found)return null;r=s.value}else try{r=await an().read(qet())}catch{return null}let o=Bt(r,!1);if(!o||typeof o!=="object")return null;let t=o;if(typeof t.supervisorPid!=="number"||typeof t.workers!=="object"||t.workers===null)return null;try{process.kill(t.supervisorPid,0)}catch{return null}let i=typeof t.supervisorProcStart==="string"?t.supervisorProcStart:void 0;if(!await Fm(t.supervisorPid,i))return null;return o}
export{qet,Ket,J0n,Q0n,Z0n};
