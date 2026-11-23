// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Kr}from"./chunk-r3adsed5.js";import{X}from"./chunk-3rgses43.js";import{W}from"./chunk-z1a5ffdv.js";async function r7(){try{let s=t();if(s.length>0)await Promise.race([Promise.allSettled(s),X(200)]),s.length=0;let[{settle1PEventLoggingBeforeExit:e,shutdown1PEventLogging:r},{shutdownDatadog:n},{shutdownErrorTracking:a}]=await Promise.all([import("./chunk-a1zra6zc.js"),import("./chunk-a8v62yse.js"),import("./chunk-cj3jwmxx.js")]),i=e(),c=[r(),n(),a()];await Promise.race([Promise.all(c),X(500)]),await i}catch{}}class o{tasks=[]}var u=new W(()=>new o);function t(){return Kr(u).tasks}function L3s(s){t().push(s.catch(()=>{}))}
export{r7,L3s};
