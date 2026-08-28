// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{$An,b7e}from"./chunk-2vv5hpw3.js";import{R_n,HMe}from"./chunk-fa374z64.js";import{A_n}from"./chunk-qc6xt7s1.js";import{eNn,b5,ntn,rBn,iUn,EUn,Lnn,R5,$Un,Ege,_rn,Flt,Sjn,KR,yS}from"./chunk-hrvkymct.js";import{Nae}from"./chunk-cc17q8y4.js";import{EW,aKt}from"./chunk-w5ctbxwv.js";import{EMn}from"./chunk-0fyw97ps.js";function sKt(t,o=new Set,i,r,n){let a=o.size>0;if(iUn(t),HMe(t),Nae.cache.clear?.(),aKt(EW),yS(),EUn(o),b7e(null),!a)_rn.peek(t)?.clear();let s=Lnn();if(s?.getTeleportCacheState().status==="active")s.revertTeleportCache("transcript_cleared");if(R5(t,void 0,i,void 0,void 0,void 0,n),KR(),ntn(t,"session_start"),b5.of(t).reset(),Ege.of(t).reset(),i?.((e)=>{if(e.storedImagePaths.size===0&&e.imageDescriptions.size===0&&Object.keys(e.displayedMessageContent).length===0)return e;return{...e,storedImagePaths:new Map,imageDescriptions:new Map,displayedMessageContent:{}}}),eNn(),!a)EMn();if(A_n(),!a)$Un();if($An(o),R_n(),Sjn(),Flt().catch(()=>{}),rBn(t),r)import("./chunk-hjn8ww6a.js").then(({WebFetchCache:e})=>r.get(e).clear()),import("./chunk-p9ymrg22.js").then(({ToolSearchDescriptionCache:e})=>r.get(e).clear());import("./chunk-2acxdk7j.js").then(({clearAgentDefinitionsCache:e})=>e())}
export{sKt};
