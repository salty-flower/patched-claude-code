// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{yue,s$r,i$r,a$r}from"./chunk-wp4g6d3x.js";import{Sxr}from"./chunk-c1knb473.js";import{UHr}from"./chunk-fc73wevh.js";import{IHo}from"./chunk-y1hvs5vj.js";function nGn(t){t((e)=>e.ultrareviewOverageConfirmed?e:{...e,ultrareviewOverageConfirmed:!0})}function s(t){return(e)=>t((o)=>({...o,pendingMemoryUpdates:[...o.pendingMemoryUpdates,e]}))}function n(t){t((e)=>e.prResolvedThisSession?e:{...e,prResolvedThisSession:!0})}function rGn(t){let e=(o)=>t((r)=>{let i=typeof o==="function"?o(r.toolPermissionContext):o;return r.toolPermissionContext===i?r:{...r,toolPermissionContext:i}});return{setToolPermissionContext:e,setSessionToolPermissionContext:e}}function yYe(t,e){return{markPrResolvedThisSession:()=>n(e),isUltrareviewOverageConfirmed:()=>t().ultrareviewOverageConfirmed,markUltrareviewOverageConfirmed:()=>nGn(e),getAdvisorSetting:()=>t().advisorModel,getMcp:()=>t().mcp,getProactivityLevel:()=>t().proactivityLevel,getWebBrowser:()=>t().webBrowser,...rGn(e),setWebBrowserSlice:UHr(e),setArtifactReadVersion:s$r(e),getArtifactReadObservation:yue(t),artifactRegistries:Sxr(t,e),setArtifactContractTarget:i$r(e),getArtifactContractTarget:a$r(t),enqueuePendingMemoryUpdate:s(e),agentLifecycle:IHo(t,e)}}
export{nGn,rGn,yYe};
