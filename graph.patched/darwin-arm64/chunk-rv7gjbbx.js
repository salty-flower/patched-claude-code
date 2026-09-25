// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import"./chunk-6cqmwr9m.js";import"./chunk-gas689jj.js";import"./chunk-shf1fjz2.js";import"./chunk-zr6jq9j9.js";import"./chunk-w13amena.js";import"./chunk-4cwgnmh9.js";import"./chunk-1y7zyxh8.js";import"./chunk-njn6k74e.js";import"./chunk-3a4khaz5.js";import"./chunk-w9w461gr.js";import"./chunk-s8xs8s76.js";import"./chunk-37kdx3dg.js";import"./chunk-v9aeg87c.js";import"./chunk-wvb0gwjm.js";import"./chunk-81r5kx3r.js";import"./chunk-j370x2tz.js";import"./chunk-0dpks9t0.js";import"./chunk-vzqvvnm0.js";import"./chunk-n3x619p1.js";import{Yt}from"./chunk-qdvqpm53.js";async function i(r,s){let t=o(r.remote,r.inputPrompt);if(t===null)return Yt("Error: claude -p --cloud needs a task: pass it as the prompt, as --cloud's value, or on stdin.");let{runHeadlessCloudPrint:e}=await import("./chunk-cr5gryeg.js");return e(r,s,{prompt:t,outputFormat:r.outputFormat==="json"?"json":"text"})}function o(r,s){let t=[r??"",typeof s==="string"?s:""].filter((e)=>e.trim()!=="");return t.length===0?null:t.join(`
`)}export{i as runHeadlessCloudPrintArm};
