// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{g0e,S$n,bR,Jst,_a}from"./chunk-cet8na02.js";import{$8}from"./chunk-vryy7b5x.js";import{E5,q5n,wgn,DYn,Syn,Ayn,q5,v7n,L7n,JCe,Fbt,KQn,ZN,Ywn,Ier,lC}from"./chunk-tavwd3sq.js";import{eMn,N6e}from"./chunk-jreee4z9.js";import{FLn}from"./chunk-ex1zbngg.js";import{Si}from"./chunk-gdxma5w6.js";import{dCn}from"./chunk-gv4rx3xv.js";import{G9,tan}from"./chunk-a5cdd54f.js";import{jDe}from"./chunk-dbva7w0z.js";import{FVn}from"./chunk-12nfxwxq.js";function Zin(t,r=new Set,i,o,l,m=!1){let a=r.size>0;if(Ier(t),N6e(t),dCn.of(t).clear(),tan(G9),lC(),v7n(r),Jst(null),!a)Syn.peek(t)?.clear();let s=Ayn();if(s?.getTeleportCacheState().status==="active")s.revertTeleportCache("transcript_cleared");if(q5(t,void 0,i,void 0,void 0,void 0,l),bR("clear"),ZN(),g0e(_a()),!m)pFt();if(Ywn(t,"session_start"),E5.of(t).reset(),wgn.of(t).clear(),JCe.of(t).reset(),i?.((e)=>{if(e.storedImagePaths.size===0&&e.imageDescriptions.size===0&&Object.keys(e.displayedMessageContent).length===0)return e;return{...e,storedImagePaths:new Map,imageDescriptions:new Map,displayedMessageContent:{}}}),q5n(),!a)FVn();if(FLn(),!a)L7n();if(S$n(r),eMn(),KQn(),Fbt().catch(()=>{}),DYn(t),o)o.get(jDe).clear(),import("./chunk-mwy1cfar.js").then(({WebFetchCache:e})=>o.get(e).clear()),import("./chunk-08yjv2w0.js").then(({ToolSearchDescriptionCache:e})=>o.get(e).clear());import("./chunk-0cpmcgxb.js").then(({clearAgentDefinitionsCache:e})=>e())}function pFt(){let t=Si();t.bashPromptSkillCommands=void 0,t.workflowAuthoringSkillAvailable=void 0,$8()}
export{Zin,pFt};
