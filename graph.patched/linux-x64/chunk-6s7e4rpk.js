// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{qFn}from"./chunk-z3j5ftvc.js";import{eQt}from"./chunk-d2mzz0e0.js";import{mit,git,hit,yit,_it,bit,Sit,Hit,khe}from"./chunk-d0g93vbq.js";var i=Object.freeze({}),S=Object.freeze({}),n={bagelActive:void 0,bagelUrl:void 0,bagelPanelVisible:void 0,computerUseMcpState:void 0,denialTracking:void 0,activeGoal:void 0,pendingGoalProposal:void 0,remoteAutocompactState:void 0,queuedGoalOrigin:void 0,frameOpenFailedPath:null,frameOpenFailedSeen:!1,artifactWatchApproved:!1,artifactDbWriteApproved:!1,artifactDbWriteHumanApproved:!1,artifactDbReadConsentSlugs:git,artifactDbReadHumanConsentSlugs:hit,artifactReadConsentSlugs:yit,artifactAssetUploadConsentSlugs:Sit,artifactAssetUploadHumanConsentSlugs:Hit,artifactAssetReadConsentSlugs:_it,artifactAssetReadHumanConsentSlugs:bit,artifactRoomJoinConsentSlugs:khe,artifactReadPageDataApproved:!1,artifactReadPageDataHumanApproved:!1,artifactPlanPublishConsentPaths:mit,prResolvedThisSession:!1,ultrareviewOverageConfirmed:!1,artifactReadVersions:i,artifactReadObservers:S},f=Object.keys(n);function xrt(e){let t=e.webBrowser,r=t.view===void 0&&t.logs.length===0&&t.unreadErrors===0&&t.unreadWarnings===0,s=qFn(e.workshopTelemetry),o=Object.keys(e.artifactReadVersions??{}).length===0&&Object.keys(e.artifactReadObservers??{}).length===0;if(r&&s===e.workshopTelemetry&&o&&f.every((a)=>a==="artifactReadVersions"||a==="artifactReadObservers"||e[a]===n[a]))return e;return{...e,...n,...s!==e.workshopTelemetry&&{workshopTelemetry:s},webBrowser:r?t:{...eQt(),cleanupRegistered:t.cleanupRegistered}}}function Lrt(e){if(e().webBrowser.view&&typeof Bun<"u"&&"WebView"in Bun)return Bun.WebView.closeAll(),!0;return!1}
export{xrt,Lrt};
