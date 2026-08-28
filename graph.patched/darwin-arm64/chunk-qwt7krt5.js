// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{FO,oe}from"./chunk-ghnc2x4f.js";import{qv,_e,zt}from"./chunk-jz0pchtb.js";import{yi}from"./chunk-mmj3hbz2.js";var vSe=["theme","editorMode","verbose","preferredNotifChannel","autoCompactEnabled","autoScrollEnabled","fileCheckpointingEnabled","showTurnDuration","showMessageTimestamps","terminalProgressBarEnabled","todoFeatureEnabled","teammateMode","remoteControlAtStartup","autoUploadSessions","inputNeededNotifEnabled","agentPushNotifEnabled"];function go(n,s){let o=yi(),r=o.includes("userSettings")&&qv();for(let t=o.length-1;t>=0;t--){let e=o[t];if(e==="projectSettings"&&r)continue;let i=_e(e)?.[n];if(i!==void 0)return{value:i,source:e}}if(vSe.includes(n)){let t=n,e=oe()[t];if(e!==void 0&&e!==FO[t])return{value:e,source:"legacyGlobalConfig"}}return{value:s,source:"default"}}function mR(n,s,o){zt("userSettings",{[n]:s},void 0,o)}
export{vSe,go,mR};
