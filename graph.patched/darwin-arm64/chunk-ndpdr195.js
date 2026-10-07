// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{n5t,Xge,zCt,KA,ce}from"./chunk-s46qgfx7.js";import{Fo}from"./chunk-9s9xt61j.js";import{xy,me,_n}from"./chunk-861a7whf.js";var tge=["theme","editorMode","verbose","preferredNotifChannel","autoCompactEnabled","autoScrollEnabled","fileCheckpointingEnabled","showTurnDuration","showMessageTimestamps","terminalProgressBarEnabled","todoFeatureEnabled","teammateMode","remoteControlAtStartup","autoUploadSessions","inputNeededNotifEnabled","agentPushNotifEnabled"];function Zo(n,i){let o=Fo(),r=o.includes("userSettings")&&xy();for(let e=o.length-1;e>=0;e--){let t=o[e];if(t==="projectSettings"&&r)continue;let s=me(t)?.[n];if(s!==void 0)return{value:s,source:t}}if(tge.includes(n)){let e=n,t=ce()[e];if(t!==void 0&&t!==KA[e]){let s=n5t(e)?zCt(e,t):Xge(e,t);if(s!==void 0)return{value:s,source:"legacyGlobalConfig"}}}return{value:i,source:"default"}}function YW(n,i,o){_n("userSettings",{[n]:i},void 0,o)}
export{tge,Zo,YW};
