// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{hxn,jv,KQe}from"./chunk-30zk17wm.js";import{tkn,CNe}from"./chunk-0sdpjn9a.js";import{Yvn}from"./chunk-ezy65b9n.js";import{S4,gGn,msn,$Wn,uqn,Ran,O4,Eqn,dbe,wln,oft,d4n,h0,fun,C9n,sw}from"./chunk-h6btyxas.js";import{kue}from"./chunk-vdmasa91.js";import{IK,J7t}from"./chunk-08vvx74d.js";import{TUn}from"./chunk-d0fjm0jr.js";function X7t(t,o=new Set,i,r,m){let a=o.size>0;if(C9n(t),CNe(t),kue.cache.clear?.(),J7t(IK),sw(),uqn(o),KQe(null),!a)wln.peek(t)?.clear();let s=Ran();if(s?.getTeleportCacheState().status==="active")s.revertTeleportCache("transcript_cleared");if(O4(t,void 0,i,void 0,void 0,void 0,m),jv("clear"),h0(),fun(t,"session_start"),S4.of(t).reset(),msn.of(t).clear(),dbe.of(t).reset(),i?.((e)=>{if(e.storedImagePaths.size===0&&e.imageDescriptions.size===0&&Object.keys(e.displayedMessageContent).length===0)return e;return{...e,storedImagePaths:new Map,imageDescriptions:new Map,displayedMessageContent:{}}}),gGn(),!a)TUn();if(Yvn(),!a)Eqn();if(hxn(o),tkn(),d4n(),oft().catch(()=>{}),$Wn(t),r)import("./chunk-1ndpxq8b.js").then(({WebFetchCache:e})=>r.get(e).clear()),import("./chunk-85ynvbh0.js").then(({ToolSearchDescriptionCache:e})=>r.get(e).clear());import("./chunk-fr2x5zw6.js").then(({clearAgentDefinitionsCache:e})=>e())}
export{X7t};
