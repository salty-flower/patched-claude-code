// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Kr}from"./chunk-m8nhymg4.js";import{X}from"./chunk-0cvfymxt.js";import{W}from"./chunk-z1a5ffdv.js";async function fY(){try{let s=t();if(s.length>0)await Promise.race([Promise.allSettled(s),X(200)]),s.length=0;let[{settle1PEventLoggingBeforeExit:e,shutdown1PEventLogging:r},{shutdownDatadog:n},{shutdownErrorTracking:a}]=await Promise.all([import("./chunk-6sg8rshs.js"),import("./chunk-xqgr3ecx.js"),import("./chunk-z5zp9pq3.js")]),i=e(),c=[r(),n(),a()];await Promise.race([Promise.all(c),X(500)]),await i}catch{}}class o{tasks=[]}var u=new W(()=>new o);function t(){return Kr(u).tasks}function GKs(s){t().push(s.catch(()=>{}))}
export{fY,GKs};
