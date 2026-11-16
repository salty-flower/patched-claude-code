// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{d}from"./chunk-wryttfdq.js";import{t}from"./chunk-bdfv2ky4.js";import{Nc,Zo,Bl,PE}from"./chunk-rx6swq4t.js";import{Ade}from"./chunk-ak6vatae.js";async function Bhr(r,o){if(!Ade())return;try{let e=await Zo(r,o);if(!e||!Bl(e)||e.state==="stopped"||PE(e))return;await Nc(r,{...e,state:"stopped",updatedAt:new Date().toISOString()},o)}catch(e){t(`stop not recorded on the job's row: ${d(e)}`,{level:"error"})}}
export{Bhr};
