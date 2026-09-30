// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{E1t,Ide,jft,bR,ce}from"./chunk-er6f56rj.js";import{as}from"./chunk-vratfdfe.js";import{ov,ge,fn}from"./chunk-e561d543.js";var mke=["theme","editorMode","verbose","preferredNotifChannel","autoCompactEnabled","autoScrollEnabled","fileCheckpointingEnabled","showTurnDuration","showMessageTimestamps","terminalProgressBarEnabled","todoFeatureEnabled","teammateMode","remoteControlAtStartup","autoUploadSessions","inputNeededNotifEnabled","agentPushNotifEnabled"];function Do(n,i){let o=as(),r=o.includes("userSettings")&&ov();for(let e=o.length-1;e>=0;e--){let t=o[e];if(t==="projectSettings"&&r)continue;let s=ge(t)?.[n];if(s!==void 0)return{value:s,source:t}}if(mke.includes(n)){let e=n,t=ce()[e];if(t!==void 0&&t!==bR[e]){let s=E1t(e)?jft(e,t):Ide(e,t);if(s!==void 0)return{value:s,source:"legacyGlobalConfig"}}}return{value:i,source:"default"}}function HB(n,i,o){fn("userSettings",{[n]:i},void 0,o)}
export{mke,Do,HB};
