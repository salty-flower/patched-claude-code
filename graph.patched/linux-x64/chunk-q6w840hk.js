// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import"./chunk-rs6p8dg3.js";import"./chunk-fr28a3he.js";import"./chunk-w7m8nded.js";import"./chunk-r2xfgg0x.js";import"./chunk-pzq28dp7.js";import"./chunk-c61xdsy8.js";import"./chunk-63mtweh2.js";import"./chunk-xwn0mfnc.js";import"./chunk-bfqfmbd0.js";import"./chunk-eqmywwjn.js";import"./chunk-qeqy4res.js";import"./chunk-8fqmxv14.js";import"./chunk-cwsn6mdf.js";import"./chunk-xc4b32zy.js";import"./chunk-b9getfsf.js";import"./chunk-9pt2nr7j.js";import"./chunk-73603qq3.js";import"./chunk-xsxnmhwb.js";import"./chunk-vt9rkdza.js";import{fn}from"./chunk-vg6brqcx.js";import"./chunk-29rv67gt.js";async function i(r,s){let t=o(r.remote,r.inputPrompt);if(t===null)return fn("Error: claude -p --cloud needs a task: pass it as the prompt, as --cloud's value, or on stdin.");let{runHeadlessCloudPrint:e}=await import("./chunk-nsg0rcxx.js");return e(r,s,{prompt:t,outputFormat:r.outputFormat==="json"?"json":"text"})}function o(r,s){let t=[r??"",typeof s==="string"?s:""].filter((e)=>e.trim()!=="");return t.length===0?null:t.join(`
`)}export{i as runHeadlessCloudPrintArm};
