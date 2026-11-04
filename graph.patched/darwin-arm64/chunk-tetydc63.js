// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{d}from"./chunk-sktwb66b.js";import{Qo}from"./chunk-w5484khd.js";import{_,t}from"./chunk-5nh49npx.js";import{jn}from"./chunk-wn0xt0j2.js";import{bEe}from"./chunk-je144t54.js";import{R$i}from"./chunk-x5h5s1e8.js";import{unlinkSync as s}from"fs";import{mkdir as c}from"fs/promises";import{join as i}from"path";function e9o(){return i(R$i(),"claude","locks")}function u4e(){return!Qo(void 0)}async function Yrr(){let r=bEe(process.execPath);if(r===void 0||!u4e())return;try{let o=e9o(),e=i(o,`${r}@${process.pid}.lock`),n={pid:process.pid,version:r,execPath:process.execPath,acquiredAt:Date.now()};await c(o,{recursive:!0}),await jn(e,_(n,null,2)),process.on("exit",()=>{try{s(e)}catch{}})}catch(o){t(`Could not write this process's version lock, so a later update may delete the app bundle it runs from: ${d(o)}`,{level:"warn"})}}
export{e9o,u4e,Yrr};
