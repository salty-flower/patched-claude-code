// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{j9t,Nye,nRt,TC,ce}from"./chunk-cxjvwxsa.js";import{Wo}from"./chunk-8ky01sys.js";import{Jy,me,bn}from"./chunk-gsa86a2x.js";var Fhe=["theme","editorMode","verbose","preferredNotifChannel","autoCompactEnabled","autoScrollEnabled","fileCheckpointingEnabled","showTurnDuration","showMessageTimestamps","terminalProgressBarEnabled","todoFeatureEnabled","teammateMode","remoteControlAtStartup","autoUploadSessions","inputNeededNotifEnabled","agentPushNotifEnabled"];function os(n,i){let o=Wo(),r=o.includes("userSettings")&&Jy();for(let e=o.length-1;e>=0;e--){let t=o[e];if(t==="projectSettings"&&r)continue;let s=me(t)?.[n];if(s!==void 0)return{value:s,source:t}}if(Fhe.includes(n)){let e=n,t=ce()[e];if(t!==void 0&&t!==TC[e]){let s=j9t(e)?nRt(e,t):Nye(e,t);if(s!==void 0)return{value:s,source:"legacyGlobalConfig"}}}return{value:i,source:"default"}}function KG(n,i,o){bn("userSettings",{[n]:i},void 0,o)}
export{Fhe,os,KG};
