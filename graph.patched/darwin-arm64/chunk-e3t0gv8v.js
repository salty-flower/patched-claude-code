// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{UEe,CGn,kGn,RGn}from"./chunk-0a9fy477.js";import{WTn}from"./chunk-83vskkw6.js";import{WCn}from"./chunk-s2rxrddb.js";import{Our}from"./chunk-dd17cevk.js";function iKt(t){t((e)=>e.ultrareviewOverageConfirmed?e:{...e,ultrareviewOverageConfirmed:!0})}function s(t){t((e)=>e.prResolvedThisSession?e:{...e,prResolvedThisSession:!0})}function aKt(t){let e=(r)=>t((o)=>{let i=typeof r==="function"?r(o.toolPermissionContext):r;return o.toolPermissionContext===i?o:{...o,toolPermissionContext:i}});return{setToolPermissionContext:e,setSessionToolPermissionContext:e}}function QRe(t,e){return{markPrResolvedThisSession:()=>s(e),isUltrareviewOverageConfirmed:()=>t().ultrareviewOverageConfirmed,markUltrareviewOverageConfirmed:()=>iKt(e),getAdvisorSetting:()=>t().advisorModel,getMcp:()=>t().mcp,getProactivityLevel:()=>t().proactivityLevel,getWebBrowser:()=>t().webBrowser,...aKt(e),setWebBrowserSlice:WTn(e),setArtifactReadVersion:CGn(e),getArtifactReadObservation:UEe(t),artifactRegistries:WCn(t,e),setArtifactContractTarget:kGn(e),getArtifactContractTarget:RGn(t),agentLifecycle:Our(t,e)}}
export{iKt,aKt,QRe};
