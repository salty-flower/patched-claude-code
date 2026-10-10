// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import"./chunk-fdxhcr6b.js";import"./chunk-76anb6yt.js";import"./chunk-886tf6ja.js";import"./chunk-yjc18bey.js";import"./chunk-ae84tp6z.js";import"./chunk-nqc6v990.js";import"./chunk-phz47asr.js";import"./chunk-yvnhkg35.js";import"./chunk-nfna65jh.js";import"./chunk-4bw62nzm.js";import"./chunk-k1419ccf.js";import"./chunk-5b8s3gnd.js";import"./chunk-gyf58rwf.js";import"./chunk-tat46164.js";import"./chunk-ax7r0qj7.js";import"./chunk-gsnbskq4.js";import"./chunk-p9frg3mj.js";import"./chunk-7sdm5x5t.js";import{an}from"./chunk-e7v7g86m.js";import"./chunk-k10m7cdf.js";import"./chunk-xaes9ysz.js";async function i(r,s){let t=o(r.remote,r.inputPrompt);if(t===null)return an("Error: claude -p --cloud needs a task: pass it as the prompt, as --cloud's value, or on stdin.");let{runHeadlessCloudPrint:e}=await import("./chunk-f6kq81eq.js");return e(r,s,{prompt:t,outputFormat:r.outputFormat==="json"?"json":"text"})}function o(r,s){let t=[r??"",typeof s==="string"?s:""].filter((e)=>e.trim()!=="");return t.length===0?null:t.join(`
`)}export{i as runHeadlessCloudPrintArm};
