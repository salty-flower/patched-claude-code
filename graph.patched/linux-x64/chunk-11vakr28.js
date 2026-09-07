// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{ETt,YPn,Vv,Ptt,Sa}from"./chunk-bj7g1p32.js";import{x8}from"./chunk-3e93vkg3.js";import{g9,RWn,fVn,Ocn,BKn,ddn,ydn,U9,qKn,twe,SM,aht,e8n,Jmn,m3n,_E}from"./chunk-y3swhsrk.js";import{$In,q1e}from"./chunk-6f5agm7e.js";import{SIn}from"./chunk-0pf46r3n.js";import{vi}from"./chunk-n9r1w949.js";import{Byn}from"./chunk-rg5vczwj.js";import{O4,Cen}from"./chunk-yzmrcp0e.js";import{CUn}from"./chunk-s6yfze8p.js";function Ten(t,o=new Set,i,r,l,m=!1){let a=o.size>0;if(m3n(t),q1e(t),Byn.of(t).clear(),Cen(O4),_E(),BKn(o),Ptt(null),!a)ddn.peek(t)?.clear();let s=ydn();if(s?.getTeleportCacheState().status==="active")s.revertTeleportCache("transcript_cleared");if(U9(t,void 0,i,void 0,void 0,void 0,l),Vv("clear"),SM(),ETt(Sa()),!m)BPt();if(Jmn(t,"session_start"),g9.of(t).reset(),Ocn.of(t).clear(),twe.of(t).reset(),i?.((e)=>{if(e.storedImagePaths.size===0&&e.imageDescriptions.size===0&&Object.keys(e.displayedMessageContent).length===0)return e;return{...e,storedImagePaths:new Map,imageDescriptions:new Map,displayedMessageContent:{}}}),RWn(),!a)CUn();if(SIn(),!a)qKn();if(YPn(o),$In(),e8n(),aht().catch(()=>{}),fVn(t),r)import("./chunk-ntmmvzt3.js").then(({WebFetchCache:e})=>r.get(e).clear()),import("./chunk-gf59sjy8.js").then(({ToolSearchDescriptionCache:e})=>r.get(e).clear());import("./chunk-8fzcy20t.js").then(({clearAgentDefinitionsCache:e})=>e())}function BPt(){let t=vi();t.bashPromptSkillCommands=void 0,t.workflowAuthoringSkillAvailable=void 0,x8()}
export{Ten,BPt};
