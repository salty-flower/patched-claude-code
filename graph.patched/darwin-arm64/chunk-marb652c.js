// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{bs}from"./chunk-kpqr86hf.js";import{Y}from"./chunk-2ckwvz0j.js";import{W}from"./chunk-cne7d53x.js";async function Sq(){try{let s=t();if(s.length>0)await Promise.race([Promise.allSettled(s),Y(200)]),s.length=0;let[{settle1PEventLoggingBeforeExit:e,shutdown1PEventLogging:r},{shutdownDatadog:n},{shutdownErrorTracking:i}]=await Promise.all([import("./chunk-tfpy94hf.js"),import("./chunk-f6dnb69s.js"),import("./chunk-79egecak.js")]),a=e(),l=[r(),n(),i()];await Promise.race([Promise.all(l),Y(500)]),await a}catch{}}class o{tasks=[]}var c=new W(()=>new o);function t(){return bs(c).tasks}function kDo(s){t().push(s.catch(()=>{}))}
export{Sq,kDo};
