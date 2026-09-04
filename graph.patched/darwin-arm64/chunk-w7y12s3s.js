// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{z,Cs}from"./chunk-yhfssb7x.js";import{re}from"./chunk-p3vjhzt0.js";async function qF(){try{let s=o();if(s.length>0)await Promise.race([Promise.allSettled(s),re(200)]),s.length=0;let[{settle1PEventLoggingBeforeExit:t,shutdown1PEventLogging:e},{shutdownDatadog:r},{shutdownErrorTracking:n}]=await Promise.all([import("./chunk-a41rhx5b.js"),import("./chunk-8txnh2ae.js"),import("./chunk-4rnctp7r.js")]),i=t(),a=[e(),r(),n()];await Promise.race([Promise.all(a),re(500)]),await i}catch{}}class rzn{tasks=[]}var Uwr=new z(()=>new rzn);function o(){return Cs(Uwr).tasks}function fpn(s){o().push(s.catch(()=>{}))}
export{qF,rzn,Uwr,fpn};
