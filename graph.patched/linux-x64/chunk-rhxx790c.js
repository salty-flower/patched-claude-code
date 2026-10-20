// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Tpn,cTe,l1t,Zx,ue}from"./chunk-7p6jp6kj.js";import{$o}from"./chunk-4v4w26w4.js";import{dh,me,Ln}from"./chunk-merbp8kx.js";var yke=["theme","editorMode","verbose","preferredNotifChannel","autoCompactEnabled","autoScrollEnabled","fileCheckpointingEnabled","showTurnDuration","showMessageTimestamps","terminalProgressBarEnabled","todoFeatureEnabled","teammateMode","remoteControlAtStartup","autoUploadSessions","inputNeededNotifEnabled","agentPushNotifEnabled"];function Es(n,i){let o=$o(),r=o.includes("userSettings")&&dh();for(let e=o.length-1;e>=0;e--){let t=o[e];if(t==="projectSettings"&&r)continue;let s=me(t)?.[n];if(s!==void 0)return{value:s,source:t}}if(yke.includes(n)){let e=n,t=ue()[e];if(t!==void 0&&t!==Zx[e]){let s=Tpn(e)?l1t(e,t):cTe(e,t);if(s!==void 0)return{value:s,source:"legacyGlobalConfig"}}}return{value:i,source:"default"}}function a4(n,i,o){Ln("userSettings",{[n]:i},void 0,o)}
export{yke,Es,a4};
