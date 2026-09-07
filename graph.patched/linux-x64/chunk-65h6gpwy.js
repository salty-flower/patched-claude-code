// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{E0,ee}from"./chunk-3e93vkg3.js";import{ds}from"./chunk-qyjj7h0q.js";import{xw,he,Qt}from"./chunk-33bqb969.js";var JNe=["theme","editorMode","verbose","preferredNotifChannel","autoCompactEnabled","autoScrollEnabled","fileCheckpointingEnabled","showTurnDuration","showMessageTimestamps","terminalProgressBarEnabled","todoFeatureEnabled","teammateMode","remoteControlAtStartup","autoUploadSessions","inputNeededNotifEnabled","agentPushNotifEnabled"];function Ho(n,s){let o=ds(),r=o.includes("userSettings")&&xw();for(let t=o.length-1;t>=0;t--){let e=o[t];if(e==="projectSettings"&&r)continue;let i=he(e)?.[n];if(i!==void 0)return{value:i,source:e}}if(JNe.includes(n)){let t=n,e=ee()[t];if(e!==void 0&&e!==E0[t])return{value:e,source:"legacyGlobalConfig"}}return{value:s,source:"default"}}function vR(n,s,o){Qt("userSettings",{[n]:s},void 0,o)}
export{JNe,Ho,vR};
