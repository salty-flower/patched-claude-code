// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Exn,GC,QQe}from"./chunk-38213y7h.js";import{uvn,P1e}from"./chunk-dckv2srq.js";import{ovn}from"./chunk-xhf6e4gc.js";import{EG,bWn,hsn,U9n,g4n,Pan,UG,k4n,gSe,Aln,spt,hGn,bD,mun,Dzn,sT}from"./chunk-fy12d89p.js";import{Eue}from"./chunk-2z83fvw5.js";import{Iq,qJt}from"./chunk-rmj6rr1f.js";import{SBn}from"./chunk-fa9z8hwt.js";function WJt(t,o=new Set,i,r,m){let a=o.size>0;if(Dzn(t),P1e(t),Eue.cache.clear?.(),qJt(Iq),sT(),g4n(o),QQe(null),!a)Aln.peek(t)?.clear();let s=Pan();if(s?.getTeleportCacheState().status==="active")s.revertTeleportCache("transcript_cleared");if(UG(t,void 0,i,void 0,void 0,void 0,m),GC("clear"),bD(),mun(t,"session_start"),EG.of(t).reset(),hsn.of(t).clear(),gSe.of(t).reset(),i?.((e)=>{if(e.storedImagePaths.size===0&&e.imageDescriptions.size===0&&Object.keys(e.displayedMessageContent).length===0)return e;return{...e,storedImagePaths:new Map,imageDescriptions:new Map,displayedMessageContent:{}}}),bWn(),!a)SBn();if(ovn(),!a)k4n();if(Exn(o),uvn(),hGn(),spt().catch(()=>{}),U9n(t),r)import("./chunk-tat3whnd.js").then(({WebFetchCache:e})=>r.get(e).clear()),import("./chunk-y6q8x4ap.js").then(({ToolSearchDescriptionCache:e})=>r.get(e).clear());import("./chunk-9wah747q.js").then(({clearAgentDefinitionsCache:e})=>e())}
export{WJt};
