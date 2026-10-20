// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{d}from"./chunk-ekgz6skk.js";import{t}from"./chunk-n5v91jc3.js";import{jl,eo,Na,Uv}from"./chunk-cskmvz0m.js";import{EOe}from"./chunk-y16hfawg.js";async function kRn(r,o){if(!EOe())return;try{let e=await eo(r,o);if(!e||!Na(e)||e.state==="stopped"||Uv(e))return;await jl(r,{...e,state:"stopped",updatedAt:new Date().toISOString()},o)}catch(e){t(`stop not recorded on the job's row: ${d(e)}`,{level:"error"})}}
export{kRn};
