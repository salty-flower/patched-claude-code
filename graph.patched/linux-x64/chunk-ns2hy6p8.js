// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{d}from"./chunk-5p3mkpyy.js";import{t}from"./chunk-ray9kegj.js";import{Nc,Zo,Bl,xv}from"./chunk-ea1fhjdw.js";import{Sde}from"./chunk-55evghej.js";async function yhr(r,o){if(!Sde())return;try{let e=await Zo(r,o);if(!e||!Bl(e)||e.state==="stopped"||xv(e))return;await Nc(r,{...e,state:"stopped",updatedAt:new Date().toISOString()},o)}catch(e){t(`stop not recorded on the job's row: ${d(e)}`,{level:"error"})}}
export{yhr};
