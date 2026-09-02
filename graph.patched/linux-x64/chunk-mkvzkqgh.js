// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{uD,oe}from"./chunk-1e5y3pjf.js";import{Fw,_e,rn}from"./chunk-30zpf1a7.js";import{Ri}from"./chunk-dkknd74f.js";var yEe=["theme","editorMode","verbose","preferredNotifChannel","autoCompactEnabled","autoScrollEnabled","fileCheckpointingEnabled","showTurnDuration","showMessageTimestamps","terminalProgressBarEnabled","todoFeatureEnabled","teammateMode","remoteControlAtStartup","autoUploadSessions","inputNeededNotifEnabled","agentPushNotifEnabled"];function $o(n,s){let o=Ri(),r=o.includes("userSettings")&&Fw();for(let t=o.length-1;t>=0;t--){let e=o[t];if(e==="projectSettings"&&r)continue;let i=_e(e)?.[n];if(i!==void 0)return{value:i,source:e}}if(yEe.includes(n)){let t=n,e=oe()[t];if(e!==void 0&&e!==uD[t])return{value:e,source:"legacyGlobalConfig"}}return{value:s,source:"default"}}function yR(n,s,o){rn("userSettings",{[n]:s},void 0,o)}
export{yEe,$o,yR};
