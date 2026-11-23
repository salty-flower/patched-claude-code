// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{tXn,oje,cSn,fH,pe}from"./chunk-e44qnbvj.js";import{Go}from"./chunk-97kv5dxm.js";import{kh,Se,rr}from"./chunk-x4r54n7x.js";var $Be=["theme","editorMode","verbose","preferredNotifChannel","autoCompactEnabled","autoScrollEnabled","fileCheckpointingEnabled","showTurnDuration","showMessageTimestamps","terminalProgressBarEnabled","todoFeatureEnabled","teammateMode","remoteControlAtStartup","autoUploadSessions","inputNeededNotifEnabled","agentPushNotifEnabled"];function Hi(n,i){let o=Go();for(let e=o.length-1;e>=0;e--){let t=o[e],s=Se(t)?.[n];if(s===void 0)continue;if(t==="projectSettings"&&o.includes("userSettings")&&kh())continue;return{value:s,source:t}}if($Be.includes(n)){let e=n,t=pe()[e];if(t!==void 0&&t!==fH[e]){let s=tXn(e)?cSn(e,t):oje(e,t);if(s!==void 0)return{value:s,source:"legacyGlobalConfig"}}}return{value:i,source:"default"}}function IZ(n,i,o){rr("userSettings",{[n]:i},void 0,o)}
export{$Be,Hi,IZ};
