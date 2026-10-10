// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{ten,lbe,DOt,wR,ce}from"./chunk-bk5ct2gw.js";import{Lo}from"./chunk-wtch2p0g.js";import{w_,fe,An}from"./chunk-x0dc37w9.js";var lSe=["theme","editorMode","verbose","preferredNotifChannel","autoCompactEnabled","autoScrollEnabled","fileCheckpointingEnabled","showTurnDuration","showMessageTimestamps","terminalProgressBarEnabled","todoFeatureEnabled","teammateMode","remoteControlAtStartup","autoUploadSessions","inputNeededNotifEnabled","agentPushNotifEnabled"];function hs(n,i){let o=Lo(),r=o.includes("userSettings")&&w_();for(let e=o.length-1;e>=0;e--){let t=o[e];if(t==="projectSettings"&&r)continue;let s=fe(t)?.[n];if(s!==void 0)return{value:s,source:t}}if(lSe.includes(n)){let e=n,t=ce()[e];if(t!==void 0&&t!==wR[e]){let s=ten(e)?DOt(e,t):lbe(e,t);if(s!==void 0)return{value:s,source:"legacyGlobalConfig"}}}return{value:i,source:"default"}}function D6(n,i,o){An("userSettings",{[n]:i},void 0,o)}
export{lSe,hs,D6};
