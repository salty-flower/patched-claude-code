// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{G,Ls}from"./chunk-aywwjcwq.js";import{ee}from"./chunk-0mwsqxme.js";async function n0(){try{let s=t();if(s.length>0)await Promise.race([Promise.allSettled(s),ee(200)]),s.length=0;let[{settle1PEventLoggingBeforeExit:e,shutdown1PEventLogging:r},{shutdownDatadog:n},{shutdownErrorTracking:i}]=await Promise.all([import("./chunk-atxgvmmn.js"),import("./chunk-g2ywrht4.js"),import("./chunk-4ngf1ke9.js")]),a=e(),l=[r(),n(),i()];await Promise.race([Promise.all(l),ee(500)]),await a}catch{}}class o{tasks=[]}var c=new G(()=>new o);function t(){return Ls(c).tasks}function _Qr(s){t().push(s.catch(()=>{}))}
export{n0,_Qr};
