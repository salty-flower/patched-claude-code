// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{Lkt,HDn,Hv,Dnt,fa}from"./chunk-hdbxv3pp.js";import{o1}from"./chunk-h6md7820.js";import{zz,wGn,Fqn,udn,G4n,Pzn,$dn,qdn,hV,Fzn,Swe,xht,x8n,rN,rhn,eA}from"./chunk-darxmw8c.js";import{hHn,rBe}from"./chunk-pv31m1gp.js";import{sHn}from"./chunk-m6f6yn76.js";import{Os}from"./chunk-hr8wrrm4.js";import{afe}from"./chunk-rmhn6c3w.js";import{iz,Ctn}from"./chunk-vh7p8fje.js";import{xjn}from"./chunk-40vg95vd.js";function Atn(t,o=new Set,i,r,l,m=!1){let a=o.size>0;if(Fqn(t),rBe(t),afe.cache.clear?.(),Ctn(iz),eA(),Pzn(o),Dnt(null),!a)$dn.peek(t)?.clear();let s=qdn();if(s?.getTeleportCacheState().status==="active")s.revertTeleportCache("transcript_cleared");if(hV(t,void 0,i,void 0,void 0,void 0,l),Hv("clear"),rN(),Lkt(fa()),!m)bOt();if(rhn(t,"session_start"),zz.of(t).reset(),udn.of(t).clear(),Swe.of(t).reset(),i?.((e)=>{if(e.storedImagePaths.size===0&&e.imageDescriptions.size===0&&Object.keys(e.displayedMessageContent).length===0)return e;return{...e,storedImagePaths:new Map,imageDescriptions:new Map,displayedMessageContent:{}}}),wGn(),!a)xjn();if(sHn(),!a)Fzn();if(HDn(o),hHn(),x8n(),xht().catch(()=>{}),G4n(t),r)import("./chunk-ra0r6krh.js").then(({WebFetchCache:e})=>r.get(e).clear()),import("./chunk-sjf01f83.js").then(({ToolSearchDescriptionCache:e})=>r.get(e).clear());import("./chunk-6ss0p2rb.js").then(({clearAgentDefinitionsCache:e})=>e())}function bOt(){let t=Os();t.bashPromptSkillCommands=void 0,t.workflowAuthoringSkillAvailable=void 0,o1()}
export{Atn,bOt};
