// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{fln,GEe,sFt,Ax,ue}from"./chunk-k16gymf7.js";import{Bo}from"./chunk-9t95885m.js";import{fb,me,In}from"./chunk-a502zyxr.js";var qve=["theme","editorMode","verbose","preferredNotifChannel","autoCompactEnabled","autoScrollEnabled","fileCheckpointingEnabled","showTurnDuration","showMessageTimestamps","terminalProgressBarEnabled","todoFeatureEnabled","teammateMode","remoteControlAtStartup","autoUploadSessions","inputNeededNotifEnabled","agentPushNotifEnabled"];function ks(n,i){let o=Bo(),r=o.includes("userSettings")&&fb();for(let e=o.length-1;e>=0;e--){let t=o[e];if(t==="projectSettings"&&r)continue;let s=me(t)?.[n];if(s!==void 0)return{value:s,source:t}}if(qve.includes(n)){let e=n,t=ue()[e];if(t!==void 0&&t!==Ax[e]){let s=fln(e)?sFt(e,t):GEe(e,t);if(s!==void 0)return{value:s,source:"legacyGlobalConfig"}}}return{value:i,source:"default"}}function wq(n,i,o){In("userSettings",{[n]:i},void 0,o)}
export{qve,ks,wq};
