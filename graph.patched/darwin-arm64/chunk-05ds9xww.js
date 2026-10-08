// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{K,rSe}from"./chunk-vd0a9d2s.js";import{TCe,eot,cDe,tot,not}from"./chunk-jj0rppvm.js";import{_D}from"./chunk-zwe9vtev.js";import{eG,_2e,t_t,xEe,JV,Hw}from"./chunk-nwqfvmza.js";import{JPn}from"./chunk-5gbsra7a.js";import{aze}from"./chunk-ea9he0g1.js";import{QL}from"./chunk-5hg2jcgy.js";import{Rrn}from"./chunk-3txah9ap.js";import{Mue}from"./chunk-t3fznys4.js";import{KMe}from"./chunk-sdp6qxm9.js";function N0t(e,o,t,i){QL("conversation_reset"),_D("conversation_reset"),Hw(JV),tot(),cDe(),TCe(),not(),eot(),aze();let r=K();for(let s of KMe(e.sessionHooksRegistry,r))e.sessionHooksRegistry.remove(r,"Stop",s);t(),_2e(),e.markConversationRemote?.(),JPn(e.readFileState),eG(e.memorySelector),rSe(),xEe(o),Rrn(i,r,o.map((s)=>s.uuid)),e.applyMessageOp({type:"replace-all",messages:t_t(o)}),Mue(!0)}
export{N0t};
