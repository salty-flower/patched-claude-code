// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{K}from"./chunk-s8xs8s76.js";import{Vpe,Uze,wEe,Bze,jze}from"./chunk-ddbj4628.js";import{WI}from"./chunk-etkg2s89.js";import{Tde,g5,xS,QPe,w$,EZe}from"./chunk-h3bc7dkc.js";import{ntn}from"./chunk-2rfm190g.js";import{AOe}from"./chunk-8amn3vqy.js";import{sH}from"./chunk-8p48m7y3.js";import{qFe}from"./chunk-b1y7dc8x.js";import{tte}from"./chunk-8vncfd4m.js";import{zEe}from"./chunk-ra17e8eq.js";function zut(e,o,t,i){sH("conversation_reset"),WI("conversation_reset"),xS(g5),Bze(),wEe(),Vpe(),jze(),Uze(),AOe();let r=K();for(let s of zEe(e.sessionHooksRegistry,r))e.sessionHooksRegistry.remove(r,"Stop",s);t(),QPe(),e.markConversationRemote?.(),ntn(e.readFileState,e.loadedNestedMemoryPaths),w$(e.memorySelector),Tde(o),qFe.of(i).emit(r,o.map((s)=>s.uuid)),e.applyMessageOp({type:"replace-all",messages:EZe(o)}),tte(!0)}
export{zut};
