// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Pve,JGn,ZGn,eqn}from"./chunk-dbsa1yc5.js";import{wTn}from"./chunk-513vp68q.js";import{EAn}from"./chunk-tjh1byzg.js";import{sur}from"./chunk-e1y7j0t6.js";function G3t(t){t((e)=>e.ultrareviewOverageConfirmed?e:{...e,ultrareviewOverageConfirmed:!0})}function s(t){t((e)=>e.prResolvedThisSession?e:{...e,prResolvedThisSession:!0})}function q3t(t){let e=(r)=>t((o)=>{let i=typeof r==="function"?r(o.toolPermissionContext):r;return o.toolPermissionContext===i?o:{...o,toolPermissionContext:i}});return{setToolPermissionContext:e,setSessionToolPermissionContext:e}}function KRe(t,e){return{markPrResolvedThisSession:()=>s(e),isUltrareviewOverageConfirmed:()=>t().ultrareviewOverageConfirmed,markUltrareviewOverageConfirmed:()=>G3t(e),getAdvisorSetting:()=>t().advisorModel,getMcp:()=>t().mcp,getProactivityLevel:()=>t().proactivityLevel,getWebBrowser:()=>t().webBrowser,...q3t(e),setWebBrowserSlice:wTn(e),setArtifactReadVersion:JGn(e),getArtifactReadObservation:Pve(t),artifactRegistries:EAn(t,e),setArtifactContractTarget:ZGn(e),getArtifactContractTarget:eqn(t),agentLifecycle:sur(t,e)}}
export{G3t,q3t,KRe};
