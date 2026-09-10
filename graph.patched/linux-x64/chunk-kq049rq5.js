// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{LHe,Sjn,CR,Jat,Ea}from"./chunk-6n7yk222.js";import{Q9}from"./chunk-ce4ppmnp.js";import{P5,eYn,lyn,JJn,fbn,U7n,J7n,TSn,a8,JAe,fvt,Htr,fN,ikn,yrr,vk}from"./chunk-2byjyg85.js";import{XNn,cGe}from"./chunk-f4019nt1.js";import{vDn}from"./chunk-nf6pxfyh.js";import{Ai}from"./chunk-7xfwsz67.js";import{gTn}from"./chunk-wb09wmfd.js";import{e5,Dln}from"./chunk-rs5qqvb2.js";import{ZDe}from"./chunk-s9vzry27.js";import{e6n}from"./chunk-c4rh228g.js";function Oln(t,r=new Set,i,o,l,m=!1){let a=r.size>0;if(yrr(t),cGe(t),gTn.of(t).clear(),Dln(e5),vk(),U7n(r),Jat(null),!a)fbn.peek(t)?.clear();let s=TSn();if(s?.getTeleportCacheState().status==="active")s.revertTeleportCache("transcript_cleared");if(a8(t,void 0,i,void 0,void 0,void 0,l),CR("clear"),fN(),LHe(Ea()),!m)qFt();if(ikn(t,"session_start"),P5.of(t).reset(),lyn.of(t).clear(),JAe.of(t).reset(),i?.((e)=>{if(e.storedImagePaths.size===0&&e.imageDescriptions.size===0&&Object.keys(e.displayedMessageContent).length===0)return e;return{...e,storedImagePaths:new Map,imageDescriptions:new Map,displayedMessageContent:{}}}),eYn(),!a)e6n();if(vDn(),!a)J7n();if(Sjn(r),XNn(),Htr(),fvt().catch(()=>{}),JJn(t),o)o.get(ZDe).clear(),import("./chunk-xat8sbfc.js").then(({WebFetchCache:e})=>o.get(e).clear()),import("./chunk-x4xsg64a.js").then(({ToolSearchDescriptionCache:e})=>o.get(e).clear());import("./chunk-za8q7c7g.js").then(({clearAgentDefinitionsCache:e})=>e())}function qFt(){let t=Ai();t.bashPromptSkillCommands=void 0,t.workflowAuthoringSkillAvailable=void 0,Q9()}
export{Oln,qFt};
