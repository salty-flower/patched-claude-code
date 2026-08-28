// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{oXb as s,pXb as B}from"./_611.js";import{gBc as y,kBc as g,rBc as j}from"./_694.js";import{DZc as x,xZc as S}from"./_762.js";import{b2c as f,j2c as b}from"./_768.js";import{Eed as D,tfd as n,wed as u,yfd as h}from"./_806.js";import{cgd as d,xgd as P}from"./_810.js";import{etd as a,gtd as k}from"./_825.js";import{Nvd as v,_ud as m}from"./_834.js";B();k();b();h();P();v();j();x();D();import{join as F}from"path";function c(){return F(d(),"daemon.status.json")}function l(){return f.state("daemon-status")}async function T(e,r){let o={supervisorPid:process.pid,supervisorProcStart:g(),writtenAt:Date.now(),workers:e};if(a()&&r!==void 0){try{let t=await r.write(l(),u(o,null,2),{mode:438&~process.umask()});if(!t.ok)n(`writeDaemonStatus: ${t.error.code}`)}catch(t){n(`writeDaemonStatus: ${m(t)}`)}return}try{await s().atomicWrite(c(),u(o,null,2))}catch{}}async function q(e){if(a()&&e!==void 0){try{let r=await e.delete(l());if(!r.ok)n(`removeDaemonStatus: ${r.error.code}`)}catch(r){n(`removeDaemonStatus: ${m(r)}`)}return}try{await s().delete(c())}catch{}}async function z(e){let r;if(a()&&e!==void 0){let i;try{i=await e.readText([l()])}catch{return null}if(!i.ok)return null;let p=i.value.items[0];if(!p.found)return null;r=p.value}else try{r=await s().read(c())}catch{return null}let o=S(r,!1);if(!o||typeof o!=="object")return null;let t=o;if(typeof t.supervisorPid!=="number"||typeof t.workers!=="object"||t.workers===null)return null;try{process.kill(t.supervisorPid,0)}catch{return null}let w=typeof t.supervisorProcStart==="string"?t.supervisorProcStart:void 0;if(!await y(t.supervisorPid,w))return null;return o}
export{c as Yg,l as Zg,T as _g,q as $g,z as ah};
