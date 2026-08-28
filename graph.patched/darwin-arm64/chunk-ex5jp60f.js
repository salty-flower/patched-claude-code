// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{qEn,DYe}from"./chunk-g4zaymy2.js";import{Bbn,RLe}from"./chunk-j2rn06t5.js";import{Hbn}from"./chunk-v26jyk82.js";import{iFn,v9,otn,l2n,uBn,RBn,Dnn,D9,jBn,Rge,vrn,Blt,A6n,QP,yv}from"./chunk-j5h9ds58.js";import{Zae}from"./chunk-8zcq0330.js";import{A5,_Kt}from"./chunk-496ngfax.js";import{DLn}from"./chunk-nemxemtr.js";function yKt(t,o=new Set,i,r,n){let a=o.size>0;if(uBn(t),RLe(t),Zae.cache.clear?.(),_Kt(A5),yv(),RBn(o),DYe(null),!a)vrn.peek(t)?.clear();let s=Dnn();if(s?.getTeleportCacheState().status==="active")s.revertTeleportCache("transcript_cleared");if(D9(t,void 0,i,void 0,void 0,void 0,n),QP(),otn(t,"session_start"),v9.of(t).reset(),Rge.of(t).reset(),i?.((e)=>{if(e.storedImagePaths.size===0&&e.imageDescriptions.size===0&&Object.keys(e.displayedMessageContent).length===0)return e;return{...e,storedImagePaths:new Map,imageDescriptions:new Map,displayedMessageContent:{}}}),iFn(),!a)DLn();if(Hbn(),!a)jBn();if(qEn(o),Bbn(),A6n(),Blt().catch(()=>{}),l2n(t),r)import("./chunk-cbm6tbfm.js").then(({WebFetchCache:e})=>r.get(e).clear()),import("./chunk-1a7md390.js").then(({ToolSearchDescriptionCache:e})=>r.get(e).clear());import("./chunk-e4ekcx9w.js").then(({clearAgentDefinitionsCache:e})=>e())}
export{yKt};
