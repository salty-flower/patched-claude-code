// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{WFe,Mnr,WC,Ma}from"./chunk-sgamszzq.js";import{MQ}from"./chunk-g4c6ggz4.js";import{G7,cSr,iwr,jNn,Jwr,uFn,gvr,LFn,bX,TCr,PIe,_U,vBn,OLt,RRr,jv}from"./chunk-nq62bgfy.js";import{uQn,m8e}from"./chunk-w0wezkwh.js";import{As}from"./chunk-ec199pf4.js";import{SYn}from"./chunk-j63nfvz8.js";import{hWn}from"./chunk-j391hx3t.js";import{GY,UTn}from"./chunk-8xg4zkx9.js";import{Z2e}from"./chunk-acmda15k.js";import{Lfr}from"./chunk-5g0rd29f.js";function $Tn(t,r=new Set,i,o,m,l=!1){let a=r.size>0;if(Jwr(t),m8e(t),hWn.of(t).clear(),UTn(GY),jv(),gvr(r),!a)uFn.peek(t)?.clear();let s=LFn();if(s?.getTeleportCacheState().status==="active")s.revertTeleportCache("transcript_cleared","main");if(bX(t,void 0,i,void 0,void 0,void 0,m),WC("clear"),_U(),WFe(Ma()),!l)UKt();if(vBn(t,"session_start"),G7.of(t).reset(),jNn.of(t).clear(),PIe.of(t).reset(),i?.((e)=>{if(e.storedImagePaths.size===0&&e.imageDescriptions.size===0&&Object.keys(e.displayedMessageContent).length===0)return e;return{...e,storedImagePaths:new Map,imageDescriptions:new Map,displayedMessageContent:{}}}),cSr(),!a)Lfr();if(SYn(),!a)TCr();if(Mnr(r),uQn(),RRr(),OLt().catch(()=>{}),iwr(t),o)o.get(Z2e).clear(),import("./chunk-ce1yhnmm.js").then(({WebFetchCache:e})=>o.get(e).clear()),import("./chunk-z2t15ann.js").then(({ToolSearchDescriptionCache:e})=>o.get(e).clear());import("./chunk-hgayy5xv.js").then(({clearAgentDefinitionsCache:e})=>e())}function UKt(){let t=As();t.bashPromptSkillCommands=void 0,t.workflowAuthoringSkillAvailable=void 0,MQ()}
export{$Tn,UKt};
