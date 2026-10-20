// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{d}from"./chunk-nre716m4.js";import{t}from"./chunk-tdxkq523.js";import{Wl,eo,Na,BE}from"./chunk-79rentg1.js";import{POe}from"./chunk-13bnrr99.js";async function DRn(r,o){if(!POe())return;try{let e=await eo(r,o);if(!e||!Na(e)||e.state==="stopped"||BE(e))return;await Wl(r,{...e,state:"stopped",updatedAt:new Date().toISOString()},o)}catch(e){t(`stop not recorded on the job's row: ${d(e)}`,{level:"error"})}}
export{DRn};
