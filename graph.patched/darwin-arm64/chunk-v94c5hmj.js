// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{y6r}from"./chunk-f3ced139.js";import{t}from"./chunk-gyf58rwf.js";import{rl}from"./chunk-vmgyazz0.js";function ijs(e){let r=rl(),d=r.lastSentPreferredDeviceId,i=r.browserHints!==void 0&&r.browserHints.preferredDeviceId===void 0&&d!==void 0&&e.preferredDeviceId===d;r.lastSentPreferredDeviceId=e.preferredDeviceId,r.browserHints=e.preferredDeviceId===void 0&&e.localDeviceIds.length===0?void 0:i?{...e,preferredDeviceId:void 0}:e,t(`[Claude in Chrome] browser hints: preferred=${e.preferredDeviceId?.slice(0,8)??"none"} local=${e.localDeviceIds.length}${i?" (re-send; in-session pick stands)":""}`);let n=r.bridgeBinding;if(n&&e.preferredDeviceId!==void 0&&e.preferredDeviceId!==d&&n.socketClient.getSelectedDeviceId?.()!==e.preferredDeviceId)y6r(n.socketClient)}function aBr(e){let r=rl(),d=r.browserHints;if(!d||d.preferredDeviceId===void 0||d.preferredDeviceId===e)return;r.browserHints={...d,preferredDeviceId:void 0}}function lBr(e){return rl().browserHints?.preferredDeviceId??e()}function cBr(){let e=rl().browserHints;if(!e)return;return new Map(e.localDeviceIds.map((r)=>[r,"live"]))}function dBr(){return rl().browserHints?.hostPlatform}
export{ijs,aBr,lBr,cBr,dBr};
