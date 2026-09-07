// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{j,hi}from"./chunk-zhtwayh2.js";import{Z}from"./chunk-r5q3158s.js";async function nF(){try{let s=t();if(s.length>0)await Promise.race([Promise.allSettled(s),Z(200)]),s.length=0;let[{settle1PEventLoggingBeforeExit:e,shutdown1PEventLogging:r},{shutdownDatadog:n},{shutdownErrorTracking:i}]=await Promise.all([import("./chunk-3s319dnv.js"),import("./chunk-ht9hj0rm.js"),import("./chunk-0thww5jw.js")]),a=e(),l=[r(),n(),i()];await Promise.race([Promise.all(l),Z(500)]),await a}catch{}}class o{tasks=[]}var c=new j(()=>new o);function t(){return hi(c).tasks}function hln(s){t().push(s.catch(()=>{}))}
export{nF,hln};
