// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import"./chunk-918t5khf.js";import"./chunk-yffha6me.js";import"./chunk-fdatg9ax.js";import"./chunk-0mwsqxme.js";import"./chunk-gf0t3nd9.js";import"./chunk-bpkzpttw.js";import"./chunk-6rzcw8g2.js";import"./chunk-869zfth6.js";import"./chunk-b7wdy41p.js";import"./chunk-aywwjcwq.js";import"./chunk-f16c4jnr.js";import"./chunk-zs0343th.js";import"./chunk-gvn18sr5.js";import"./chunk-0z5rjdcn.js";import"./chunk-ky8zgwyh.js";import"./chunk-z6am4wsr.js";import"./chunk-z9b8syjk.js";import"./chunk-jppak124.js";import"./chunk-sjbbyery.js";import{ln}from"./chunk-y6heqp0b.js";import"./chunk-vj952p6j.js";async function i(r,s){let t=o(r.remote,r.inputPrompt);if(t===null)return ln("Error: claude -p --cloud needs a task: pass it as the prompt, as --cloud's value, or on stdin.");let{runHeadlessCloudPrint:e}=await import("./chunk-3bcqgryh.js");return e(r,s,{prompt:t,outputFormat:r.outputFormat==="json"?"json":"text"})}function o(r,s){let t=[r??"",typeof s==="string"?s:""].filter((e)=>e.trim()!=="");return t.length===0?null:t.join(`
`)}export{i as runHeadlessCloudPrintArm};
