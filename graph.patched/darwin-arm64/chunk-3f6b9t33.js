// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{d}from"./chunk-wryttfdq.js";import{ws}from"./chunk-5p4f0tx0.js";import{t,_}from"./chunk-bdfv2ky4.js";import{Vn}from"./chunk-0fwqg61r.js";import{Gae}from"./chunk-nqkdvfv9.js";import{YEa}from"./chunk-fshjaegf.js";import{unlinkSync as s}from"fs";import{mkdir as c}from"fs/promises";import{join as i}from"path";function VSs(){return i(YEa(),"claude","locks")}function aZe(){return!ws(void 0)}async function xvr(){let r=Gae(process.execPath);if(r===void 0||!aZe())return;try{let o=VSs(),e=i(o,`${r}@${process.pid}.lock`),n={pid:process.pid,version:r,execPath:process.execPath,acquiredAt:Date.now()};await c(o,{recursive:!0}),await Vn(e,_(n,null,2)),process.on("exit",()=>{try{s(e)}catch{}})}catch(o){t(`Could not write this process's version lock, so a later update may delete the app bundle it runs from: ${d(o)}`,{level:"warn"})}}
export{VSs,aZe,xvr};
