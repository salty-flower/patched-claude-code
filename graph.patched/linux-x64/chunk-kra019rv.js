// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{rL,ne}from"./chunk-ce4ppmnp.js";import{Wo}from"./chunk-8fer6cmv.js";import{UE,ye,Qt}from"./chunk-sp4f0zv3.js";var qje=["theme","editorMode","verbose","preferredNotifChannel","autoCompactEnabled","autoScrollEnabled","fileCheckpointingEnabled","showTurnDuration","showMessageTimestamps","terminalProgressBarEnabled","todoFeatureEnabled","teammateMode","remoteControlAtStartup","autoUploadSessions","inputNeededNotifEnabled","agentPushNotifEnabled"];function To(n,s){let o=Wo(),r=o.includes("userSettings")&&UE();for(let t=o.length-1;t>=0;t--){let e=o[t];if(e==="projectSettings"&&r)continue;let i=ye(e)?.[n];if(i!==void 0)return{value:i,source:e}}if(qje.includes(n)){let t=n,e=ne()[t];if(e!==void 0&&e!==rL[t])return{value:e,source:"legacyGlobalConfig"}}return{value:s,source:"default"}}function $P(n,s,o){Qt("userSettings",{[n]:s},void 0,o)}
export{qje,To,$P};
