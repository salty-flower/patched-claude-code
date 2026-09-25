// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{mOe,bbr,wbr,Ebr}from"./chunk-a8x1493c.js";import{i7n}from"./chunk-04yc772j.js";import{NYn}from"./chunk-jjf7gdjz.js";import{n3r}from"./chunk-9txa53s4.js";function uyn(t){t((e)=>e.ultrareviewOverageConfirmed?e:{...e,ultrareviewOverageConfirmed:!0})}function s(t){t((e)=>e.prResolvedThisSession?e:{...e,prResolvedThisSession:!0})}function pyn(t){let e=(r)=>t((o)=>{let i=typeof r==="function"?r(o.toolPermissionContext):r;return o.toolPermissionContext===i?o:{...o,toolPermissionContext:i}});return{setToolPermissionContext:e,setSessionToolPermissionContext:e}}function F1e(t,e){return{markPrResolvedThisSession:()=>s(e),isUltrareviewOverageConfirmed:()=>t().ultrareviewOverageConfirmed,markUltrareviewOverageConfirmed:()=>uyn(e),getAdvisorSetting:()=>t().advisorModel,getMcp:()=>t().mcp,getProactivityLevel:()=>t().proactivityLevel,getWebBrowser:()=>t().webBrowser,...pyn(e),setWebBrowserSlice:i7n(e),setArtifactReadVersion:bbr(e),getArtifactReadObservation:mOe(t),artifactRegistries:NYn(t,e),setArtifactContractTarget:wbr(e),getArtifactContractTarget:Ebr(t),agentLifecycle:n3r(t,e)}}
export{uyn,pyn,F1e};
