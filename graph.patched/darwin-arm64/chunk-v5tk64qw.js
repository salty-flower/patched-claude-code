// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{zD,ie}from"./chunk-h6md7820.js";import{Ci}from"./chunk-tgbc60ar.js";import{tE,be,Qt}from"./chunk-yhqjr2er.js";var GCe=["theme","editorMode","verbose","preferredNotifChannel","autoCompactEnabled","autoScrollEnabled","fileCheckpointingEnabled","showTurnDuration","showMessageTimestamps","terminalProgressBarEnabled","todoFeatureEnabled","teammateMode","remoteControlAtStartup","autoUploadSessions","inputNeededNotifEnabled","agentPushNotifEnabled"];function vo(n,s){let o=Ci(),r=o.includes("userSettings")&&tE();for(let t=o.length-1;t>=0;t--){let e=o[t];if(e==="projectSettings"&&r)continue;let i=be(e)?.[n];if(i!==void 0)return{value:i,source:e}}if(GCe.includes(n)){let t=n,e=ie()[t];if(e!==void 0&&e!==zD[t])return{value:e,source:"legacyGlobalConfig"}}return{value:s,source:"default"}}function s0(n,s,o){Qt("userSettings",{[n]:s},void 0,o)}
export{GCe,vo,s0};
