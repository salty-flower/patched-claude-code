// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{oXt,Wye,fRt,RT,ce}from"./chunk-gcyvvtkw.js";import{Wo}from"./chunk-2r0ph8pf.js";import{Qy,me,Sn}from"./chunk-48by85wp.js";var zhe=["theme","editorMode","verbose","preferredNotifChannel","autoCompactEnabled","autoScrollEnabled","fileCheckpointingEnabled","showTurnDuration","showMessageTimestamps","terminalProgressBarEnabled","todoFeatureEnabled","teammateMode","remoteControlAtStartup","autoUploadSessions","inputNeededNotifEnabled","agentPushNotifEnabled"];function os(n,i){let o=Wo(),r=o.includes("userSettings")&&Qy();for(let e=o.length-1;e>=0;e--){let t=o[e];if(t==="projectSettings"&&r)continue;let s=me(t)?.[n];if(s!==void 0)return{value:s,source:t}}if(zhe.includes(n)){let e=n,t=ce()[e];if(t!==void 0&&t!==RT[e]){let s=oXt(e)?fRt(e,t):Wye(e,t);if(s!==void 0)return{value:s,source:"legacyGlobalConfig"}}}return{value:i,source:"default"}}function s6(n,i,o){Sn("userSettings",{[n]:i},void 0,o)}
export{zhe,os,s6};
