// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{K,W}from"./chunk-g4zaymy2.js";import{ne}from"./chunk-fnn4jyg7.js";async function hM(){try{let t=LNn.of(W().host).tasks;if(t.length>0)await Promise.race([Promise.allSettled(t),ne(200)]),t.length=0;let[{settle1PEventLoggingBeforeExit:o,shutdown1PEventLogging:s},{shutdownDatadog:e},{shutdownErrorTracking:r}]=await Promise.all([import("./chunk-gjz1p7kt.js"),import("./chunk-fxmbxcxr.js"),import("./chunk-k8p8fwac.js")]),i=o(),n=[s(),e(),r()];await Promise.race([Promise.all(n),ne(500)]),await i}catch{}}class DNn{tasks=[]}var LNn=new K(()=>new DNn);function een(t){LNn.of(W().host).tasks.push(t.catch(()=>{}))}
export{hM,DNn,LNn,een};
