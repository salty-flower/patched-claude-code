// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Oge,K3r,Y3r,X3r}from"./chunk-d3mr9n6t.js";import{fjr}from"./chunk-rz0ctgzy.js";import{P6r}from"./chunk-9zg6208n.js";import{T3o}from"./chunk-yx9wnc2f.js";function ZYn(t){t((e)=>e.ultrareviewOverageConfirmed?e:{...e,ultrareviewOverageConfirmed:!0})}function s(t){return(e)=>t((o)=>({...o,pendingMemoryUpdates:[...o.pendingMemoryUpdates,e]}))}function n(t){t((e)=>e.prResolvedThisSession?e:{...e,prResolvedThisSession:!0})}function eXn(t){let e=(o)=>t((r)=>{let i=typeof o==="function"?o(r.toolPermissionContext):o;return r.toolPermissionContext===i?r:{...r,toolPermissionContext:i}});return{setToolPermissionContext:e,setSessionToolPermissionContext:e}}function LJe(t,e){return{markPrResolvedThisSession:()=>n(e),isUltrareviewOverageConfirmed:()=>t().ultrareviewOverageConfirmed,markUltrareviewOverageConfirmed:()=>ZYn(e),getAdvisorSetting:()=>t().advisorModel,getMcp:()=>t().mcp,getProactivityLevel:()=>t().proactivityLevel,getWebBrowser:()=>t().webBrowser,...eXn(e),setWebBrowserSlice:P6r(e),setArtifactReadVersion:K3r(e),getArtifactReadObservation:Oge(t),artifactRegistries:fjr(t,e),setArtifactContractTarget:Y3r(e),getArtifactContractTarget:X3r(t),enqueuePendingMemoryUpdate:s(e),agentLifecycle:T3o(t,e)}}
export{ZYn,eXn,LJe};
