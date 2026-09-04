// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{IHt,INn,Bv,lot,Ia}from"./chunk-yhfssb7x.js";import{O5}from"./chunk-vtwn1md5.js";import{vV,Izn,KVn,tmn,i5n,t8n,Lmn,Bmn,JV,a8n,DEe,Syt,QYn,yN,rSn,pA}from"./chunk-5e9qk3ys.js";import{_Pn,F2e}from"./chunk-an958hxz.js";import{sPn}from"./chunk-390631gb.js";import{Ps}from"./chunk-hmvddskw.js";import{PTn}from"./chunk-2f05fs7x.js";import{Vz,_on}from"./chunk-nwbxns1v.js";import{O9n}from"./chunk-q8qd9gh6.js";function hon(t,o=new Set,i,r,l,m=!1){let a=o.size>0;if(KVn(t),F2e(t),PTn.of(t).clear(),_on(Vz),pA(),t8n(o),lot(null),!a)Lmn.peek(t)?.clear();let s=Bmn();if(s?.getTeleportCacheState().status==="active")s.revertTeleportCache("transcript_cleared");if(JV(t,void 0,i,void 0,void 0,void 0,l),Bv("clear"),yN(),IHt(Ia()),!m)ULt();if(rSn(t,"session_start"),vV.of(t).reset(),tmn.of(t).clear(),DEe.of(t).reset(),i?.((e)=>{if(e.storedImagePaths.size===0&&e.imageDescriptions.size===0&&Object.keys(e.displayedMessageContent).length===0)return e;return{...e,storedImagePaths:new Map,imageDescriptions:new Map,displayedMessageContent:{}}}),Izn(),!a)O9n();if(sPn(),!a)a8n();if(INn(o),_Pn(),QYn(),Syt().catch(()=>{}),i5n(t),r)import("./chunk-gnsc3ter.js").then(({WebFetchCache:e})=>r.get(e).clear()),import("./chunk-xepx5tac.js").then(({ToolSearchDescriptionCache:e})=>r.get(e).clear());import("./chunk-3jkfdrpx.js").then(({clearAgentDefinitionsCache:e})=>e())}function ULt(){let t=Ps();t.bashPromptSkillCommands=void 0,t.workflowAuthoringSkillAvailable=void 0,O5()}
export{hon,ULt};
