// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{G,hi}from"./chunk-bj7g1p32.js";import{Z}from"./chunk-3whp6z2x.js";async function qN(){try{let s=t();if(s.length>0)await Promise.race([Promise.allSettled(s),Z(200)]),s.length=0;let[{settle1PEventLoggingBeforeExit:e,shutdown1PEventLogging:r},{shutdownDatadog:n},{shutdownErrorTracking:i}]=await Promise.all([import("./chunk-zncx8v2e.js"),import("./chunk-yqha1jne.js"),import("./chunk-w68sg0h2.js")]),a=e(),l=[r(),n(),i()];await Promise.race([Promise.all(l),Z(500)]),await a}catch{}}class o{tasks=[]}var c=new G(()=>new o);function t(){return hi(c).tasks}function Gan(s){t().push(s.catch(()=>{}))}
export{qN,Gan};
