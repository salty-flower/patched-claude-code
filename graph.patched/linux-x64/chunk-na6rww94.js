// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{K,z}from"./chunk-2vv5hpw3.js";import{ne}from"./chunk-m09j9ze8.js";async function m$(){try{let t=I1n.of(z().host).tasks;if(t.length>0)await Promise.race([Promise.allSettled(t),ne(200)]),t.length=0;let[{settle1PEventLoggingBeforeExit:o,shutdown1PEventLogging:s},{shutdownDatadog:e},{shutdownErrorTracking:r}]=await Promise.all([import("./chunk-3tbk2rgx.js"),import("./chunk-g3atdb5t.js"),import("./chunk-7fsqs7se.js")]),i=o(),n=[s(),e(),r()];await Promise.race([Promise.all(n),ne(500)]),await i}catch{}}class x1n{tasks=[]}var I1n=new K(()=>new x1n);function QZt(t){I1n.of(z().host).tasks.push(t.catch(()=>{}))}
export{m$,x1n,I1n,QZt};
