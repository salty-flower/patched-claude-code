// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{iL,ie}from"./chunk-vtwn1md5.js";import{Ii}from"./chunk-v3s7w1dm.js";import{mE,be,nn}from"./chunk-03hrg0m9.js";var sRe=["theme","editorMode","verbose","preferredNotifChannel","autoCompactEnabled","autoScrollEnabled","fileCheckpointingEnabled","showTurnDuration","showMessageTimestamps","terminalProgressBarEnabled","todoFeatureEnabled","teammateMode","remoteControlAtStartup","autoUploadSessions","inputNeededNotifEnabled","agentPushNotifEnabled"];function Io(n,s){let o=Ii(),r=o.includes("userSettings")&&mE();for(let t=o.length-1;t>=0;t--){let e=o[t];if(e==="projectSettings"&&r)continue;let i=be(e)?.[n];if(i!==void 0)return{value:i,source:e}}if(sRe.includes(n)){let t=n,e=ie()[t];if(e!==void 0&&e!==iL[t])return{value:e,source:"legacyGlobalConfig"}}return{value:s,source:"default"}}function w0(n,s,o){nn("userSettings",{[n]:s},void 0,o)}
export{sRe,Io,w0};
