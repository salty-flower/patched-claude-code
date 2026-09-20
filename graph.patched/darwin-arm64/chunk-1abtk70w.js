// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{G,qs}from"./chunk-sgamszzq.js";import{Z}from"./chunk-q2h0fawe.js";async function b6(){try{let s=t();if(s.length>0)await Promise.race([Promise.allSettled(s),Z(200)]),s.length=0;let[{settle1PEventLoggingBeforeExit:e,shutdown1PEventLogging:r},{shutdownDatadog:n},{shutdownErrorTracking:i}]=await Promise.all([import("./chunk-bathz1cr.js"),import("./chunk-xb7egdvg.js"),import("./chunk-6c5rnac7.js")]),a=e(),l=[r(),n(),i()];await Promise.race([Promise.all(l),Z(500)]),await a}catch{}}class o{tasks=[]}var c=new G(()=>new o);function t(){return qs(c).tasks}function Uzn(s){t().push(s.catch(()=>{}))}
export{b6,Uzn};
