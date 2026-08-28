// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{OL,oe}from"./chunk-ns0ekkj0.js";import{qS,be,Gt}from"./chunk-bcez0qfh.js";import{yi}from"./chunk-8v512hc9.js";var yve=["theme","editorMode","verbose","preferredNotifChannel","autoCompactEnabled","autoScrollEnabled","fileCheckpointingEnabled","showTurnDuration","showMessageTimestamps","terminalProgressBarEnabled","todoFeatureEnabled","teammateMode","remoteControlAtStartup","autoUploadSessions","inputNeededNotifEnabled","agentPushNotifEnabled"];function go(n,s){let o=yi(),r=o.includes("userSettings")&&qS();for(let t=o.length-1;t>=0;t--){let e=o[t];if(e==="projectSettings"&&r)continue;let i=be(e)?.[n];if(i!==void 0)return{value:i,source:e}}if(yve.includes(n)){let t=n,e=oe()[t];if(e!==void 0&&e!==OL[t])return{value:e,source:"legacyGlobalConfig"}}return{value:s,source:"default"}}function uC(n,s,o){Gt("userSettings",{[n]:s},void 0,o)}
export{yve,go,uC};
