// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{d}from"./chunk-5p3mkpyy.js";import{ws}from"./chunk-732yb76j.js";import{t,_}from"./chunk-ray9kegj.js";import{Vn}from"./chunk-xv2ysf5h.js";import{Hae}from"./chunk-vc9y5g3b.js";import{iva}from"./chunk-4pvgrp72.js";import{unlinkSync as s}from"fs";import{mkdir as c}from"fs/promises";import{join as i}from"path";function lbs(){return i(iva(),"claude","locks")}function QQe(){return!ws(void 0)}async function Jvr(){let r=Hae(process.execPath);if(r===void 0||!QQe())return;try{let o=lbs(),e=i(o,`${r}@${process.pid}.lock`),n={pid:process.pid,version:r,execPath:process.execPath,acquiredAt:Date.now()};await c(o,{recursive:!0}),await Vn(e,_(n,null,2)),process.on("exit",()=>{try{s(e)}catch{}})}catch(o){t(`Could not write this process's version lock, so a later update may delete the app bundle it runs from: ${d(o)}`,{level:"warn"})}}
export{lbs,QQe,Jvr};
