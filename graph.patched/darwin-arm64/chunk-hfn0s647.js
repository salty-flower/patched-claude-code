// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{d}from"./chunk-36ysyspx.js";import{t}from"./chunk-d7b0m8qy.js";import{ad,lo,Ga,xv}from"./chunk-yhsjqng1.js";import{Rye}from"./chunk-3jqwtmc6.js";async function oDn(r,o){if(!Rye())return;try{let e=await lo(r,o);if(!e||!Ga(e)||e.state==="stopped"||xv(e))return;await ad(r,{...e,state:"stopped",updatedAt:new Date().toISOString()},o)}catch(e){t(`stop not recorded on the job's row: ${d(e)}`,{level:"error"})}}
export{oDn};
