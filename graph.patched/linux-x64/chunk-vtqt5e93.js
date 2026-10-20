// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import"./chunk-grpzqw3p.js";import"./chunk-8nra9hkj.js";import"./chunk-dxktn51d.js";import"./chunk-6arex0x2.js";import"./chunk-m3epja3j.js";import"./chunk-ekgz6skk.js";import"./chunk-wk0rbc8w.js";import"./chunk-h9cj3xp8.js";import"./chunk-2fbnw5gg.js";import"./chunk-jbgr14ef.js";import"./chunk-pbkqy204.js";import"./chunk-cd1a8ced.js";import"./chunk-59xd6a0a.js";import"./chunk-n5v91jc3.js";import"./chunk-nvrstjfg.js";import"./chunk-nt1g7asm.js";import"./chunk-jkcb7qdd.js";import"./chunk-tbekftmt.js";import"./chunk-4ccvyrtz.js";import"./chunk-psz375zg.js";import"./chunk-f5rzvmnh.js";import{ln}from"./chunk-ek2eb2st.js";async function i(r,s){let t=o(r.remote,r.inputPrompt);if(t===null)return ln("Error: claude -p --cloud needs a task: pass it as the prompt, as --cloud's value, or on stdin.");let{runHeadlessCloudPrint:e}=await import("./chunk-y4165rpf.js");return e(r,s,{prompt:t,outputFormat:r.outputFormat==="json"?"json":"text"})}function o(r,s){let t=[r??"",typeof s==="string"?s:""].filter((e)=>e.trim()!=="");return t.length===0?null:t.join(`
`)}export{i as runHeadlessCloudPrintArm};
