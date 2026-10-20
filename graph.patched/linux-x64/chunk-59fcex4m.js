// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{bs}from"./chunk-dxktn51d.js";import{Y}from"./chunk-wk0rbc8w.js";import{W}from"./chunk-2fbnw5gg.js";async function l4(){try{let s=t();if(s.length>0)await Promise.race([Promise.allSettled(s),Y(200)]),s.length=0;let[{settle1PEventLoggingBeforeExit:e,shutdown1PEventLogging:r},{shutdownDatadog:n},{shutdownErrorTracking:i}]=await Promise.all([import("./chunk-yybky31w.js"),import("./chunk-wma8vthz.js"),import("./chunk-6q4hfzpn.js")]),a=e(),l=[r(),n(),i()];await Promise.race([Promise.all(l),Y(500)]),await a}catch{}}class o{tasks=[]}var c=new W(()=>new o);function t(){return bs(c).tasks}function LDo(s){t().push(s.catch(()=>{}))}
export{l4,LDo};
