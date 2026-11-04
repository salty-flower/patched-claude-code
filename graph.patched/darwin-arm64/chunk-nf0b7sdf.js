// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{b$n,qLe,Vnn,h0,pe}from"./chunk-axsjfnwn.js";import{Wo}from"./chunk-fx3z0wwe.js";import{Gm,be,Vn}from"./chunk-gbez09mv.js";var jDe=["theme","editorMode","verbose","preferredNotifChannel","autoCompactEnabled","autoScrollEnabled","fileCheckpointingEnabled","showTurnDuration","showMessageTimestamps","terminalProgressBarEnabled","todoFeatureEnabled","teammateMode","remoteControlAtStartup","autoUploadSessions","inputNeededNotifEnabled","agentPushNotifEnabled"];function gi(n,i){let o=Wo();for(let e=o.length-1;e>=0;e--){let t=o[e],s=be(t)?.[n];if(s===void 0)continue;if(t==="projectSettings"&&o.includes("userSettings")&&Gm())continue;return{value:s,source:t}}if(jDe.includes(n)){let e=n,t=pe()[e];if(t!==void 0&&t!==h0[e]){let s=b$n(e)?Vnn(e,t):qLe(e,t);if(s!==void 0)return{value:s,source:"legacyGlobalConfig"}}}return{value:i,source:"default"}}function nX(n,i,o){Vn("userSettings",{[n]:i},void 0,o)}
export{jDe,gi,nX};
