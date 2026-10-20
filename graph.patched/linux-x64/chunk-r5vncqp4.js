// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{PSe,Hdo,Ddo,Ldo}from"./chunk-b3e25bn6.js";import{yZr}from"./chunk-e2xsetdq.js";import{Ioo}from"./chunk-67yg3qdr.js";import{qus}from"./chunk-bg40afpp.js";function Ncr(t){t((e)=>e.ultrareviewOverageConfirmed?e:{...e,ultrareviewOverageConfirmed:!0})}function s(t){return(e)=>t((o)=>({...o,pendingMemoryUpdates:[...o.pendingMemoryUpdates,e]}))}function n(t){t((e)=>e.prResolvedThisSession?e:{...e,prResolvedThisSession:!0})}function TRn(t){let e=(o)=>t((r)=>{let i=typeof o==="function"?o(r.toolPermissionContext):o;return r.toolPermissionContext===i?r:{...r,toolPermissionContext:i}});return{setToolPermissionContext:e,setSessionToolPermissionContext:e}}function _st(t,e){return{markPrResolvedThisSession:()=>n(e),isUltrareviewOverageConfirmed:()=>t().ultrareviewOverageConfirmed,markUltrareviewOverageConfirmed:()=>Ncr(e),getAdvisorSetting:()=>t().advisorModel,getMcp:()=>t().mcp,getProactivityLevel:()=>t().proactivityLevel,getWebBrowser:()=>t().webBrowser,...TRn(e),setWebBrowserSlice:Ioo(e),setArtifactReadVersion:Hdo(e),getArtifactReadObservation:PSe(t),artifactRegistries:yZr(t,e),setArtifactContractTarget:Ddo(e),getArtifactContractTarget:Ldo(t),enqueuePendingMemoryUpdate:s(e),agentLifecycle:qus(t,e)}}
export{Ncr,TRn,_st};
