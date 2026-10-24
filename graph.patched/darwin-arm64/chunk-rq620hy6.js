// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{BSn,yRe,q6t,pI,ue}from"./chunk-27xjmczp.js";import{Ro}from"./chunk-t4r22my8.js";import{mg,fe,Un}from"./chunk-32v5ghb4.js";var bAe=["theme","editorMode","verbose","preferredNotifChannel","autoCompactEnabled","autoScrollEnabled","fileCheckpointingEnabled","showTurnDuration","showMessageTimestamps","terminalProgressBarEnabled","todoFeatureEnabled","teammateMode","remoteControlAtStartup","autoUploadSessions","inputNeededNotifEnabled","agentPushNotifEnabled"];function js(n,i){let o=Ro(),r=o.includes("userSettings")&&mg();for(let e=o.length-1;e>=0;e--){let t=o[e];if(t==="projectSettings"&&r)continue;let s=fe(t)?.[n];if(s!==void 0)return{value:s,source:t}}if(bAe.includes(n)){let e=n,t=ue()[e];if(t!==void 0&&t!==pI[e]){let s=BSn(e)?q6t(e,t):yRe(e,t);if(s!==void 0)return{value:s,source:"legacyGlobalConfig"}}}return{value:i,source:"default"}}function m4(n,i,o){Un("userSettings",{[n]:i},void 0,o)}
export{bAe,js,m4};
