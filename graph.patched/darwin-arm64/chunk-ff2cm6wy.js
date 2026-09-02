// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{pO,oe}from"./chunk-bsdtxcdc.js";import{FT,ye,rn}from"./chunk-cx07awjk.js";import{xi}from"./chunk-8c6qx8qp.js";var wEe=["theme","editorMode","verbose","preferredNotifChannel","autoCompactEnabled","autoScrollEnabled","fileCheckpointingEnabled","showTurnDuration","showMessageTimestamps","terminalProgressBarEnabled","todoFeatureEnabled","teammateMode","remoteControlAtStartup","autoUploadSessions","inputNeededNotifEnabled","agentPushNotifEnabled"];function Lo(n,s){let o=xi(),r=o.includes("userSettings")&&FT();for(let t=o.length-1;t>=0;t--){let e=o[t];if(e==="projectSettings"&&r)continue;let i=ye(e)?.[n];if(i!==void 0)return{value:i,source:e}}if(wEe.includes(n)){let t=n,e=oe()[t];if(e!==void 0&&e!==pO[t])return{value:e,source:"legacyGlobalConfig"}}return{value:s,source:"default"}}function wH(n,s,o){rn("userSettings",{[n]:s},void 0,o)}
export{wEe,Lo,wH};
