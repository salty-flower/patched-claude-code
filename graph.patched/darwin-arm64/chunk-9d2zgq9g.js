// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{PD,ee}from"./chunk-n495pc0t.js";import{ds}from"./chunk-sxccpdbg.js";import{PT,he,Qt}from"./chunk-pe4nmbcg.js";var uFe=["theme","editorMode","verbose","preferredNotifChannel","autoCompactEnabled","autoScrollEnabled","fileCheckpointingEnabled","showTurnDuration","showMessageTimestamps","terminalProgressBarEnabled","todoFeatureEnabled","teammateMode","remoteControlAtStartup","autoUploadSessions","inputNeededNotifEnabled","agentPushNotifEnabled"];function wo(n,s){let o=ds(),r=o.includes("userSettings")&&PT();for(let t=o.length-1;t>=0;t--){let e=o[t];if(e==="projectSettings"&&r)continue;let i=he(e)?.[n];if(i!==void 0)return{value:i,source:e}}if(uFe.includes(n)){let t=n,e=ee()[t];if(e!==void 0&&e!==PD[t])return{value:e,source:"legacyGlobalConfig"}}return{value:s,source:"default"}}function MH(n,s,o){Qt("userSettings",{[n]:s},void 0,o)}
export{uFe,wo,MH};
