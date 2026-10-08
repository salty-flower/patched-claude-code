// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import"./chunk-ndcqd6bh.js";import"./chunk-bkr1h20c.js";import"./chunk-5g6j8x8p.js";import"./chunk-670y7hd9.js";import"./chunk-gwj7v27h.js";import"./chunk-4z5wz91m.js";import"./chunk-70ktd4rm.js";import"./chunk-rptge3r8.js";import"./chunk-28fj72x7.js";import"./chunk-g79wjybr.js";import"./chunk-4p5wb748.js";import"./chunk-941sa7c2.js";import"./chunk-p46wpkfz.js";import"./chunk-gx95ar6n.js";import"./chunk-j6z0j5vh.js";import"./chunk-2j48j0j1.js";import"./chunk-3s94kw4m.js";import"./chunk-7dchs7vj.js";import"./chunk-e84gprty.js";import{sn}from"./chunk-4j1447cd.js";import"./chunk-fxrrfs3q.js";async function i(r,s){let t=o(r.remote,r.inputPrompt);if(t===null)return sn("Error: claude -p --cloud needs a task: pass it as the prompt, as --cloud's value, or on stdin.");let{runHeadlessCloudPrint:e}=await import("./chunk-08q1k5wc.js");return e(r,s,{prompt:t,outputFormat:r.outputFormat==="json"?"json":"text"})}function o(r,s){let t=[r??"",typeof s==="string"?s:""].filter((e)=>e.trim()!=="");return t.length===0?null:t.join(`
`)}export{i as runHeadlessCloudPrintArm};
