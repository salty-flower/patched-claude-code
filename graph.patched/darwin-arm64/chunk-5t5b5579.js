// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{pHn}from"./chunk-bqyxmn8a.js";import{vKt}from"./chunk-z8txh3a0.js";import{Ntt,Ftt,$tt,Btt,Utt,jtt,Wtt,ztt,Nfe}from"./chunk-eeg6yaby.js";var i=Object.freeze({}),S=Object.freeze({}),n={bagelActive:void 0,bagelUrl:void 0,bagelPanelVisible:void 0,computerUseMcpState:void 0,denialTracking:void 0,activeGoal:void 0,pendingGoalProposal:void 0,remoteAutocompactState:void 0,queuedGoalOrigin:void 0,frameOpenFailedPath:null,frameOpenFailedSeen:!1,artifactWatchApproved:!1,artifactDbWriteApproved:!1,artifactDbWriteHumanApproved:!1,artifactDbReadConsentSlugs:Ftt,artifactDbReadHumanConsentSlugs:$tt,artifactReadConsentSlugs:Btt,artifactAssetUploadConsentSlugs:Wtt,artifactAssetUploadHumanConsentSlugs:ztt,artifactAssetReadConsentSlugs:Utt,artifactAssetReadHumanConsentSlugs:jtt,artifactRoomJoinConsentSlugs:Nfe,artifactReadPageDataApproved:!1,artifactReadPageDataHumanApproved:!1,artifactPlanPublishConsentPaths:Ntt,prResolvedThisSession:!1,ultrareviewOverageConfirmed:!1,artifactReadVersions:i,artifactReadObservers:S},f=Object.keys(n);function vtt(e){let t=e.webBrowser,r=t.view===void 0&&t.logs.length===0&&t.unreadErrors===0&&t.unreadWarnings===0,s=pHn(e.workshopTelemetry),o=Object.keys(e.artifactReadVersions??{}).length===0&&Object.keys(e.artifactReadObservers??{}).length===0;if(r&&s===e.workshopTelemetry&&o&&f.every((a)=>a==="artifactReadVersions"||a==="artifactReadObservers"||e[a]===n[a]))return e;return{...e,...n,...s!==e.workshopTelemetry&&{workshopTelemetry:s},webBrowser:r?t:{...vKt(),cleanupRegistered:t.cleanupRegistered}}}function wtt(e){if(e().webBrowser.view&&typeof Bun<"u"&&"WebView"in Bun)return Bun.WebView.closeAll(),!0;return!1}
export{vtt,wtt};
