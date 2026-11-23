// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{I7n,tWe,Yyn,dH,pe}from"./chunk-a5a37ds7.js";import{Go}from"./chunk-2vbvs9gw.js";import{Eh,be,tr}from"./chunk-4rkc6f3s.js";var HBe=["theme","editorMode","verbose","preferredNotifChannel","autoCompactEnabled","autoScrollEnabled","fileCheckpointingEnabled","showTurnDuration","showMessageTimestamps","terminalProgressBarEnabled","todoFeatureEnabled","teammateMode","remoteControlAtStartup","autoUploadSessions","inputNeededNotifEnabled","agentPushNotifEnabled"];function Li(n,i){let o=Go();for(let e=o.length-1;e>=0;e--){let t=o[e],s=be(t)?.[n];if(s===void 0)continue;if(t==="projectSettings"&&o.includes("userSettings")&&Eh())continue;return{value:s,source:t}}if(HBe.includes(n)){let e=n,t=pe()[e];if(t!==void 0&&t!==dH[e]){let s=I7n(e)?Yyn(e,t):tWe(e,t);if(s!==void 0)return{value:s,source:"legacyGlobalConfig"}}}return{value:i,source:"default"}}function vZ(n,i,o){tr("userSettings",{[n]:i},void 0,o)}
export{HBe,Li,vZ};
