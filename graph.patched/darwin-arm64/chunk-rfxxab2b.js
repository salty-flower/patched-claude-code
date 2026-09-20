// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{vF,ie}from"./chunk-g4c6ggz4.js";import{Yo}from"./chunk-a38xyc22.js";import{OC,ye,tn}from"./chunk-k515hq0v.js";var Mqe=["theme","editorMode","verbose","preferredNotifChannel","autoCompactEnabled","autoScrollEnabled","fileCheckpointingEnabled","showTurnDuration","showMessageTimestamps","terminalProgressBarEnabled","todoFeatureEnabled","teammateMode","remoteControlAtStartup","autoUploadSessions","inputNeededNotifEnabled","agentPushNotifEnabled"];function To(n,s){let o=Yo(),r=o.includes("userSettings")&&OC();for(let t=o.length-1;t>=0;t--){let e=o[t];if(e==="projectSettings"&&r)continue;let i=ye(e)?.[n];if(i!==void 0)return{value:i,source:e}}if(Mqe.includes(n)){let t=n,e=ie()[t];if(e!==void 0&&e!==vF[t])return{value:e,source:"legacyGlobalConfig"}}return{value:s,source:"default"}}function eM(n,s,o){tn("userSettings",{[n]:s},void 0,o)}
export{Mqe,To,eM};
