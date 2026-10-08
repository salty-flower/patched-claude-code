// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{sfe,Bzr,jzr,Wzr}from"./chunk-e4m95wdf.js";import{W0r}from"./chunk-48bqxsxd.js";import{gBr}from"./chunk-2sjrn3g3.js";import{C1o}from"./chunk-rhjdxrmc.js";function V4n(t){t((e)=>e.ultrareviewOverageConfirmed?e:{...e,ultrareviewOverageConfirmed:!0})}function s(t){return(e)=>t((o)=>({...o,pendingMemoryUpdates:[...o.pendingMemoryUpdates,e]}))}function n(t){t((e)=>e.prResolvedThisSession?e:{...e,prResolvedThisSession:!0})}function K4n(t){let e=(o)=>t((r)=>{let i=typeof o==="function"?o(r.toolPermissionContext):o;return r.toolPermissionContext===i?r:{...r,toolPermissionContext:i}});return{setToolPermissionContext:e,setSessionToolPermissionContext:e}}function f9e(t,e){return{markPrResolvedThisSession:()=>n(e),isUltrareviewOverageConfirmed:()=>t().ultrareviewOverageConfirmed,markUltrareviewOverageConfirmed:()=>V4n(e),getAdvisorSetting:()=>t().advisorModel,getMcp:()=>t().mcp,getProactivityLevel:()=>t().proactivityLevel,getWebBrowser:()=>t().webBrowser,...K4n(e),setWebBrowserSlice:gBr(e),setArtifactReadVersion:Bzr(e),getArtifactReadObservation:sfe(t),artifactRegistries:W0r(t,e),setArtifactContractTarget:jzr(e),getArtifactContractTarget:Wzr(t),enqueuePendingMemoryUpdate:s(e),agentLifecycle:C1o(t,e)}}
export{V4n,K4n,f9e};
