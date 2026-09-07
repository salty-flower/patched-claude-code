// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{jRt,kOn,YC,Xtt,ba}from"./chunk-zhtwayh2.js";import{$K}from"./chunk-n495pc0t.js";import{Ez,l9n,G3n,cun,y4n,Ndn,Wdn,Xz,C4n,cTe,kM,Eht,PKn,Tgn,z5n,SE}from"./chunk-1692k4g5.js";import{gHn,aBe}from"./chunk-1rkars97.js";import{eHn}from"./chunk-jd1wva8b.js";import{Ci}from"./chunk-kk1kt2t6.js";import{gyn}from"./chunk-2vfkm4wf.js";import{V4,atn}from"./chunk-ykcswxxr.js";import{g2n}from"./chunk-abw4xca5.js";function itn(t,o=new Set,i,r,l,m=!1){let a=o.size>0;if(z5n(t),aBe(t),gyn.of(t).clear(),atn(V4),SE(),y4n(o),Xtt(null),!a)Ndn.peek(t)?.clear();let s=Wdn();if(s?.getTeleportCacheState().status==="active")s.revertTeleportCache("transcript_cleared");if(Xz(t,void 0,i,void 0,void 0,void 0,l),YC("clear"),kM(),jRt(ba()),!m)aOt();if(Tgn(t,"session_start"),Ez.of(t).reset(),cun.of(t).clear(),cTe.of(t).reset(),i?.((e)=>{if(e.storedImagePaths.size===0&&e.imageDescriptions.size===0&&Object.keys(e.displayedMessageContent).length===0)return e;return{...e,storedImagePaths:new Map,imageDescriptions:new Map,displayedMessageContent:{}}}),l9n(),!a)g2n();if(eHn(),!a)C4n();if(kOn(o),gHn(),PKn(),Eht().catch(()=>{}),G3n(t),r)import("./chunk-h8kq9g3e.js").then(({WebFetchCache:e})=>r.get(e).clear()),import("./chunk-e8wq0cvj.js").then(({ToolSearchDescriptionCache:e})=>r.get(e).clear());import("./chunk-abs2w7sq.js").then(({clearAgentDefinitionsCache:e})=>e())}function aOt(){let t=Ci();t.bashPromptSkillCommands=void 0,t.workflowAuthoringSkillAvailable=void 0,$K()}
export{itn,aOt};
