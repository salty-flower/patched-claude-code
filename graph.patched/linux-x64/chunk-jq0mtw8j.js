// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{d}from"./chunk-w7m8nded.js";import{t}from"./chunk-cwsn6mdf.js";import{Hl,Qr,ba,kv}from"./chunk-602wadg8.js";import{VPe}from"./chunk-s8q4ew8s.js";async function yTn(r,o){if(!VPe())return;try{let e=await Qr(r,o);if(!e||!ba(e)||e.state==="stopped"||kv(e))return;await Hl(r,{...e,state:"stopped",updatedAt:new Date().toISOString()},o)}catch(e){t(`stop not recorded on the job's row: ${d(e)}`,{level:"error"})}}
export{yTn};
