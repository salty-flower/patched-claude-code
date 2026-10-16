// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import"./chunk-3mdayxq0.js";import"./chunk-dnq93t1z.js";import"./chunk-wkh5syvr.js";import"./chunk-54xe5s81.js";import"./chunk-r0a9v21k.js";import"./chunk-6dw7xt0q.js";import"./chunk-yh19hj71.js";import"./chunk-k4g6y57j.js";import"./chunk-bkygtq8f.js";import"./chunk-xzypj06m.js";import"./chunk-278j353c.js";import"./chunk-hbbqggzw.js";import"./chunk-bnfhb7sj.js";import"./chunk-6bcyaxwk.js";import"./chunk-btnsqe7h.js";import"./chunk-e666gr8q.js";import"./chunk-73603qq3.js";import"./chunk-bdh8gqj2.js";import"./chunk-wna8ryc8.js";import{fn}from"./chunk-xtz7d6q5.js";import"./chunk-c1a9wnpp.js";async function i(r,s){let t=o(r.remote,r.inputPrompt);if(t===null)return fn("Error: claude -p --cloud needs a task: pass it as the prompt, as --cloud's value, or on stdin.");let{runHeadlessCloudPrint:e}=await import("./chunk-kcaz5g07.js");return e(r,s,{prompt:t,outputFormat:r.outputFormat==="json"?"json":"text"})}function o(r,s){let t=[r??"",typeof s==="string"?s:""].filter((e)=>e.trim()!=="");return t.length===0?null:t.join(`
`)}export{i as runHeadlessCloudPrintArm};
