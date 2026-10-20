// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Lbe,dco,cco,uco}from"./chunk-k2k2dszj.js";import{BZr}from"./chunk-sbbanzzs.js";import{nso}from"./chunk-c33gwpjf.js";import{Rps}from"./chunk-ff35ah6n.js";function eur(t){t((e)=>e.ultrareviewOverageConfirmed?e:{...e,ultrareviewOverageConfirmed:!0})}function s(t){return(e)=>t((o)=>({...o,pendingMemoryUpdates:[...o.pendingMemoryUpdates,e]}))}function n(t){t((e)=>e.prResolvedThisSession?e:{...e,prResolvedThisSession:!0})}function FRn(t){let e=(o)=>t((r)=>{let i=typeof o==="function"?o(r.toolPermissionContext):o;return r.toolPermissionContext===i?r:{...r,toolPermissionContext:i}});return{setToolPermissionContext:e,setSessionToolPermissionContext:e}}function Est(t,e){return{markPrResolvedThisSession:()=>n(e),isUltrareviewOverageConfirmed:()=>t().ultrareviewOverageConfirmed,markUltrareviewOverageConfirmed:()=>eur(e),getAdvisorSetting:()=>t().advisorModel,getMcp:()=>t().mcp,getProactivityLevel:()=>t().proactivityLevel,getWebBrowser:()=>t().webBrowser,...FRn(e),setWebBrowserSlice:nso(e),setArtifactReadVersion:dco(e),getArtifactReadObservation:Lbe(t),artifactRegistries:BZr(t,e),setArtifactContractTarget:cco(e),getArtifactContractTarget:uco(t),enqueuePendingMemoryUpdate:s(e),agentLifecycle:Rps(t,e)}}
export{eur,FRn,Est};
