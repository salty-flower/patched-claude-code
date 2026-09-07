// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import{Vxt,eMn,mv,jrt,pa}from"./chunk-2x3q7cfh.js";import{T5}from"./chunk-419zdfz3.js";import{sV,WGn,Sdn,C4n,lfn,dfn,HV,yVn,kVn,pEe,Q_t,U8n,VM,L_n,EXn,xE}from"./chunk-wmzgeczq.js";import{MIn,D2e}from"./chunk-gbme4p3n.js";import{bIn}from"./chunk-bk9696gx.js";import{Ei}from"./chunk-9em0d4k5.js";import{YSn}from"./chunk-bt5gmcr2.js";import{k4,wrn}from"./chunk-57axeagj.js";import{LPe}from"./chunk-16992wzt.js";import{lWn}from"./chunk-n4x6jsp3.js";function brn(t,r=new Set,i,o,l,m=!1){let a=r.size>0;if(EXn(t),D2e(t),YSn.of(t).clear(),wrn(k4),xE(),yVn(r),jrt(null),!a)lfn.peek(t)?.clear();let s=dfn();if(s?.getTeleportCacheState().status==="active")s.revertTeleportCache("transcript_cleared");if(HV(t,void 0,i,void 0,void 0,void 0,l),mv("clear"),VM(),Vxt(pa()),!m)pLt();if(L_n(t,"session_start"),sV.of(t).reset(),Sdn.of(t).clear(),pEe.of(t).reset(),i?.((e)=>{if(e.storedImagePaths.size===0&&e.imageDescriptions.size===0&&Object.keys(e.displayedMessageContent).length===0)return e;return{...e,storedImagePaths:new Map,imageDescriptions:new Map,displayedMessageContent:{}}}),WGn(),!a)lWn();if(bIn(),!a)kVn();if(eMn(r),MIn(),U8n(),Q_t().catch(()=>{}),C4n(t),o)o.get(LPe).clear(),import("./chunk-z7w6vd76.js").then(({WebFetchCache:e})=>o.get(e).clear()),import("./chunk-a09241da.js").then(({ToolSearchDescriptionCache:e})=>o.get(e).clear());import("./chunk-1c2fx7n3.js").then(({clearAgentDefinitionsCache:e})=>e())}function pLt(){let t=Ei();t.bashPromptSkillCommands=void 0,t.workflowAuthoringSkillAvailable=void 0,T5()}
export{brn,pLt};
