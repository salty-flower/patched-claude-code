// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{z,Ls}from"./chunk-8mvda08c.js";import{ee}from"./chunk-ws170zqm.js";async function iD(){try{let s=t();if(s.length>0)await Promise.race([Promise.allSettled(s),ee(200)]),s.length=0;let[{settle1PEventLoggingBeforeExit:e,shutdown1PEventLogging:r},{shutdownDatadog:n},{shutdownErrorTracking:i}]=await Promise.all([import("./chunk-8zaf832h.js"),import("./chunk-th0f40fy.js"),import("./chunk-jtefvshk.js")]),a=e(),l=[r(),n(),i()];await Promise.race([Promise.all(l),ee(500)]),await a}catch{}}class o{tasks=[]}var c=new z(()=>new o);function t(){return Ls(c).tasks}function zJr(s){t().push(s.catch(()=>{}))}
export{iD,zJr};
