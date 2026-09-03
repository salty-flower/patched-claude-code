// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{SCt,s0n,vk,bnt,pa}from"./chunk-b1z7jvb2.js";import{JO}from"./chunk-8qt7d28b.js";import{N9,eqn,hKn,qun,w4n,u9n,wdn,Cdn,l8,h9n,lwe,hht,a6n,YM,Ugn,QE}from"./chunk-vw215j9f.js";import{zIn,z1e}from"./chunk-5nbfs0gy.js";import{$In}from"./chunk-1azd6qmg.js";import{Ps}from"./chunk-n91qqthe.js";import{Zfe}from"./chunk-bv5c0whc.js";import{J4,ytn}from"./chunk-9pnwxgqc.js";import{tGn}from"./chunk-2y594xtg.js";function htn(t,o=new Set,i,r,l,m=!1){let a=o.size>0;if(hKn(t),z1e(t),Zfe.cache.clear?.(),ytn(J4),QE(),u9n(o),bnt(null),!a)wdn.peek(t)?.clear();let s=Cdn();if(s?.getTeleportCacheState().status==="active")s.revertTeleportCache("transcript_cleared");if(l8(t,void 0,i,void 0,void 0,void 0,l),vk("clear"),YM(),SCt(pa()),!m)fDt();if(Ugn(t,"session_start"),N9.of(t).reset(),qun.of(t).clear(),lwe.of(t).reset(),i?.((e)=>{if(e.storedImagePaths.size===0&&e.imageDescriptions.size===0&&Object.keys(e.displayedMessageContent).length===0)return e;return{...e,storedImagePaths:new Map,imageDescriptions:new Map,displayedMessageContent:{}}}),eqn(),!a)tGn();if($In(),!a)h9n();if(s0n(o),zIn(),a6n(),hht().catch(()=>{}),w4n(t),r)import("./chunk-cardbscc.js").then(({WebFetchCache:e})=>r.get(e).clear()),import("./chunk-vd4b45rf.js").then(({ToolSearchDescriptionCache:e})=>r.get(e).clear());import("./chunk-k52y7jwh.js").then(({clearAgentDefinitionsCache:e})=>e())}function fDt(){let t=Ps();t.bashPromptSkillCommands=void 0,t.workflowAuthoringSkillAvailable=void 0,JO()}
export{htn,fDt};
