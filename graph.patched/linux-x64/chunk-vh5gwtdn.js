// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import"./chunk-4a5nddj6.js";import"./chunk-rnxz8hs2.js";import"./chunk-2bj5eqbj.js";import"./chunk-7r0w3nmp.js";import"./chunk-35k7s716.js";import"./chunk-8bp13hnn.js";import"./chunk-1y7zyxh8.js";import"./chunk-65nweewy.js";import"./chunk-ay603yys.js";import"./chunk-kp7gknaw.js";import"./chunk-cqc88nqm.js";import"./chunk-7yckkh1m.js";import"./chunk-dqhw8yqd.js";import"./chunk-wfscmafr.js";import"./chunk-kcjajdc8.js";import"./chunk-nqsdwfmt.js";import"./chunk-0n80jtth.js";import"./chunk-vzqvvnm0.js";import"./chunk-5bxxc6dq.js";import{Yt}from"./chunk-0rt7skk2.js";async function i(r,s){let t=o(r.remote,r.inputPrompt);if(t===null)return Yt("Error: claude -p --cloud needs a task: pass it as the prompt, as --cloud's value, or on stdin.");let{runHeadlessCloudPrint:e}=await import("./chunk-60f2bsqc.js");return e(r,s,{prompt:t,outputFormat:r.outputFormat==="json"?"json":"text"})}function o(r,s){let t=[r??"",typeof s==="string"?s:""].filter((e)=>e.trim()!=="");return t.length===0?null:t.join(`
`)}export{i as runHeadlessCloudPrintArm};
