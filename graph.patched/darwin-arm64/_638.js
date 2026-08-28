// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{Dgd as k,ygd as s}from"./_811.js";import{Jid as e,Thd as r,Uhd as u,krd as f}from"./_812.js";import{Exd as g,Hxd as o}from"./_839.js";async function S(){try{let t=n.of(e().host).tasks;if(t.length>0)await Promise.race([Promise.allSettled(t),s(200)]),t.length=0;let[{settle1PEventLoggingBeforeExit:a,shutdown1PEventLogging:l},{shutdownDatadog:c},{shutdownErrorTracking:m}]=await Promise.all([import("./chunk-48hfqq72.js"),import("./chunk-mtanykxx.js"),import("./chunk-zgepv7h5.js")]),h=a(),p=[l(),c(),m()];await Promise.race([Promise.all(p),s(500)]),await h}catch{}}class i{tasks=[]}function T(t){n.of(e().host).tasks.push(t.catch(()=>{}))}var n;var w=g(()=>{f();u();k();n=new r(()=>new i)});
export{S as t5b,i as u5b,n as v5b,T as w5b,w as x5b};
