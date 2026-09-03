// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{X,G}from"./chunk-hdbxv3pp.js";import{re}from"./chunk-gh3qnpny.js";async function HF(){try{let t=K3n.of(G().host).tasks;if(t.length>0)await Promise.race([Promise.allSettled(t),re(200)]),t.length=0;let[{settle1PEventLoggingBeforeExit:o,shutdown1PEventLogging:s},{shutdownDatadog:e},{shutdownErrorTracking:r}]=await Promise.all([import("./chunk-twkrf83y.js"),import("./chunk-zpn3yvhg.js"),import("./chunk-4h5xzcc7.js")]),i=o(),n=[s(),e(),r()];await Promise.race([Promise.all(n),re(500)]),await i}catch{}}class V3n{tasks=[]}var K3n=new X(()=>new V3n);function Ccn(t){K3n.of(G().host).tasks.push(t.catch(()=>{}))}
export{HF,V3n,K3n,Ccn};
