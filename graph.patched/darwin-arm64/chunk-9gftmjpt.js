// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{d}from"./chunk-wkh5syvr.js";import{t}from"./chunk-bnfhb7sj.js";import{Dl,Qr,Sa,CE}from"./chunk-knqsyt69.js";import{ZPe}from"./chunk-fzzejfqk.js";async function DCn(r,o){if(!ZPe())return;try{let e=await Qr(r,o);if(!e||!Sa(e)||e.state==="stopped"||CE(e))return;await Dl(r,{...e,state:"stopped",updatedAt:new Date().toISOString()},o)}catch(e){t(`stop not recorded on the job's row: ${d(e)}`,{level:"error"})}}
export{DCn};
