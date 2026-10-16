// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{us}from"./chunk-xzypj06m.js";import{J}from"./chunk-54xe5s81.js";import{z}from"./chunk-r0a9v21k.js";async function PF(){try{let s=t();if(s.length>0)await Promise.race([Promise.allSettled(s),J(200)]),s.length=0;let[{settle1PEventLoggingBeforeExit:e,shutdown1PEventLogging:r},{shutdownDatadog:n},{shutdownErrorTracking:i}]=await Promise.all([import("./chunk-sckx38pm.js"),import("./chunk-8jf52k9s.js"),import("./chunk-h28hekd8.js")]),a=e(),l=[r(),n(),i()];await Promise.race([Promise.all(l),J(500)]),await a}catch{}}class o{tasks=[]}var c=new z(()=>new o);function t(){return us(c).tasks}function pRo(s){t().push(s.catch(()=>{}))}
export{PF,pRo};
