// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{G,Vs}from"./chunk-txfrkyzp.js";import{Z}from"./chunk-d3xvzk7s.js";async function pz(){try{let s=t();if(s.length>0)await Promise.race([Promise.allSettled(s),Z(200)]),s.length=0;let[{settle1PEventLoggingBeforeExit:e,shutdown1PEventLogging:r},{shutdownDatadog:n},{shutdownErrorTracking:i}]=await Promise.all([import("./chunk-f37f1ybt.js"),import("./chunk-9yya65d6.js"),import("./chunk-7zd2qq7q.js")]),a=e(),l=[r(),n(),i()];await Promise.race([Promise.all(l),Z(500)]),await a}catch{}}class o{tasks=[]}var c=new G(()=>new o);function t(){return Vs(c).tasks}function rGn(s){t().push(s.catch(()=>{}))}
export{pz,rGn};
