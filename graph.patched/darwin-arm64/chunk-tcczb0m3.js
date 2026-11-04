// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{d}from"./chunk-sktwb66b.js";import{t}from"./chunk-5nh49npx.js";import{nc,xo,Sl,Hv}from"./chunk-fz08tv6f.js";import{noe}from"./chunk-0p1pxkfh.js";async function wYn(r,o){if(!noe())return;try{let e=await xo(r,o);if(!e||!Sl(e)||e.state==="stopped"||Hv(e))return;await nc(r,{...e,state:"stopped",updatedAt:new Date().toISOString()},o)}catch(e){t(`stop not recorded on the job's row: ${d(e)}`,{level:"error"})}}
export{wYn};
