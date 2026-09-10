// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{pM,ne}from"./chunk-e02s7cks.js";import{zo}from"./chunk-ysx7ez10.js";import{BA,ye,Qt}from"./chunk-yyyfew8j.js";var oje=["theme","editorMode","verbose","preferredNotifChannel","autoCompactEnabled","autoScrollEnabled","fileCheckpointingEnabled","showTurnDuration","showMessageTimestamps","terminalProgressBarEnabled","todoFeatureEnabled","teammateMode","remoteControlAtStartup","autoUploadSessions","inputNeededNotifEnabled","agentPushNotifEnabled"];function To(n,s){let o=zo(),r=o.includes("userSettings")&&BA();for(let t=o.length-1;t>=0;t--){let e=o[t];if(e==="projectSettings"&&r)continue;let i=ye(e)?.[n];if(i!==void 0)return{value:i,source:e}}if(oje.includes(n)){let t=n,e=ne()[t];if(e!==void 0&&e!==pM[t])return{value:e,source:"legacyGlobalConfig"}}return{value:s,source:"default"}}function q0(n,s,o){Qt("userSettings",{[n]:s},void 0,o)}
export{oje,To,q0};
