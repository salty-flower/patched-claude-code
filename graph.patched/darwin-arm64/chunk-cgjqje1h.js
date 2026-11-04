// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Jo}from"./chunk-ecyypctx.js";import{J}from"./chunk-wrh0fk6w.js";import{W}from"./chunk-8915xd28.js";async function N4(){try{let s=t();if(s.length>0)await Promise.race([Promise.allSettled(s),J(200)]),s.length=0;let[{settle1PEventLoggingBeforeExit:e,shutdown1PEventLogging:r},{shutdownDatadog:n},{shutdownErrorTracking:a}]=await Promise.all([import("./chunk-928774t1.js"),import("./chunk-gdysvm5s.js"),import("./chunk-wt7dwj0b.js")]),i=e(),c=[r(),n(),a()];await Promise.race([Promise.all(c),J(500)]),await i}catch{}}class o{tasks=[]}var u=new W(()=>new o);function t(){return Jo(u).tasks}function VSs(s){t().push(s.catch(()=>{}))}
export{N4,VSs};
