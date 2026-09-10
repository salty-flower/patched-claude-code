// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{ZL,ne}from"./chunk-vryy7b5x.js";import{ms}from"./chunk-1qb0n0qf.js";import{AA,_e,Qt}from"./chunk-ja8knfm8.js";var LBe=["theme","editorMode","verbose","preferredNotifChannel","autoCompactEnabled","autoScrollEnabled","fileCheckpointingEnabled","showTurnDuration","showMessageTimestamps","terminalProgressBarEnabled","todoFeatureEnabled","teammateMode","remoteControlAtStartup","autoUploadSessions","inputNeededNotifEnabled","agentPushNotifEnabled"];function Ao(n,s){let o=ms(),r=o.includes("userSettings")&&AA();for(let t=o.length-1;t>=0;t--){let e=o[t];if(e==="projectSettings"&&r)continue;let i=_e(e)?.[n];if(i!==void 0)return{value:i,source:e}}if(LBe.includes(n)){let t=n,e=ne()[t];if(e!==void 0&&e!==ZL[t])return{value:e,source:"legacyGlobalConfig"}}return{value:s,source:"default"}}function P0(n,s,o){Qt("userSettings",{[n]:s},void 0,o)}
export{LBe,Ao,P0};
