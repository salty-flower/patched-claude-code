// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{J,G}from"./chunk-38213y7h.js";import{ne}from"./chunk-tey8avmn.js";async function jF(){try{let t=NJn.of(G().host).tasks;if(t.length>0)await Promise.race([Promise.allSettled(t),ne(200)]),t.length=0;let[{settle1PEventLoggingBeforeExit:o,shutdown1PEventLogging:s},{shutdownDatadog:e},{shutdownErrorTracking:r}]=await Promise.all([import("./chunk-sy8n7jax.js"),import("./chunk-wk6hwjwz.js"),import("./chunk-r777bh5z.js")]),i=o(),n=[s(),e(),r()];await Promise.race([Promise.all(n),ne(500)]),await i}catch{}}class MJn{tasks=[]}var NJn=new J(()=>new MJn);function chn(t){NJn.of(G().host).tasks.push(t.catch(()=>{}))}
export{jF,MJn,NJn,chn};
