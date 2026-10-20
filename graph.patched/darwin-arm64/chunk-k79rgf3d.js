// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Bpn,hCe,SBt,nP,ue}from"./chunk-bvn0epzr.js";import{Fo}from"./chunk-58pv6r0f.js";import{dh,me,Ln}from"./chunk-qwytg6a7.js";var Ake=["theme","editorMode","verbose","preferredNotifChannel","autoCompactEnabled","autoScrollEnabled","fileCheckpointingEnabled","showTurnDuration","showMessageTimestamps","terminalProgressBarEnabled","todoFeatureEnabled","teammateMode","remoteControlAtStartup","autoUploadSessions","inputNeededNotifEnabled","agentPushNotifEnabled"];function ks(n,i){let o=Fo(),r=o.includes("userSettings")&&dh();for(let e=o.length-1;e>=0;e--){let t=o[e];if(t==="projectSettings"&&r)continue;let s=me(t)?.[n];if(s!==void 0)return{value:s,source:t}}if(Ake.includes(n)){let e=n,t=ue()[e];if(t!==void 0&&t!==nP[e]){let s=Bpn(e)?SBt(e,t):hCe(e,t);if(s!==void 0)return{value:s,source:"legacyGlobalConfig"}}}return{value:i,source:"default"}}function _q(n,i,o){Ln("userSettings",{[n]:i},void 0,o)}
export{Ake,ks,_q};
