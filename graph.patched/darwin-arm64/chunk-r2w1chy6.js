// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import"./chunk-esv3b1gm.js";import"./chunk-bjnpzyk4.js";import"./chunk-kpqr86hf.js";import"./chunk-saccfcs4.js";import"./chunk-ny2cqbmq.js";import"./chunk-nre716m4.js";import"./chunk-2ckwvz0j.js";import"./chunk-f66mhvm1.js";import"./chunk-cne7d53x.js";import"./chunk-jrcdjayr.js";import"./chunk-4nyg9560.js";import"./chunk-h422gpw8.js";import"./chunk-r22r6j92.js";import"./chunk-tdxkq523.js";import"./chunk-pmhx705f.js";import"./chunk-42txhxmf.js";import"./chunk-277zhca1.js";import"./chunk-x352w4g5.js";import"./chunk-4ccvyrtz.js";import"./chunk-9p2h8en7.js";import"./chunk-bj2sgj71.js";import{ln}from"./chunk-2p090vdv.js";async function i(r,s){let t=o(r.remote,r.inputPrompt);if(t===null)return ln("Error: claude -p --cloud needs a task: pass it as the prompt, as --cloud's value, or on stdin.");let{runHeadlessCloudPrint:e}=await import("./chunk-j0mk85x0.js");return e(r,s,{prompt:t,outputFormat:r.outputFormat==="json"?"json":"text"})}function o(r,s){let t=[r??"",typeof s==="string"?s:""].filter((e)=>e.trim()!=="");return t.length===0?null:t.join(`
`)}export{i as runHeadlessCloudPrintArm};
