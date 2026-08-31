// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{J,W}from"./chunk-30zk17wm.js";import{ne}from"./chunk-rv2kd9jf.js";async function sB(){try{let t=GZn.of(W().host).tasks;if(t.length>0)await Promise.race([Promise.allSettled(t),ne(200)]),t.length=0;let[{settle1PEventLoggingBeforeExit:o,shutdown1PEventLogging:s},{shutdownDatadog:e},{shutdownErrorTracking:r}]=await Promise.all([import("./chunk-rg5npjav.js"),import("./chunk-jycvc0sr.js"),import("./chunk-sam9mnat.js")]),i=o(),n=[s(),e(),r()];await Promise.race([Promise.all(n),ne(500)]),await i}catch{}}class zZn{tasks=[]}var GZn=new J(()=>new zZn);function g_n(t){GZn.of(W().host).tasks.push(t.catch(()=>{}))}
export{sB,zZn,GZn,g_n};
