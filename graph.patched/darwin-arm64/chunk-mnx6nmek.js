// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{es}from"./chunk-ersar6wn.js";import{X}from"./chunk-3kevgx4j.js";import{W}from"./chunk-3y73jbfr.js";async function g4(){try{let s=t();if(s.length>0)await Promise.race([Promise.allSettled(s),X(200)]),s.length=0;let[{settle1PEventLoggingBeforeExit:e,shutdown1PEventLogging:r},{shutdownDatadog:n},{shutdownErrorTracking:a}]=await Promise.all([import("./chunk-68b16gtm.js"),import("./chunk-jvxf55jx.js"),import("./chunk-6gnpksw2.js")]),i=e(),c=[r(),n(),a()];await Promise.race([Promise.all(c),X(500)]),await i}catch{}}class o{tasks=[]}var u=new W(()=>new o);function t(){return es(u).tasks}function izo(s){t().push(s.catch(()=>{}))}
export{g4,izo};
