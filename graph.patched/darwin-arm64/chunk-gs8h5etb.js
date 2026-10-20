// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{t}from"./chunk-tdxkq523.js";import{nH}from"./chunk-k5vb4gwq.js";import{P_,uI}from"./chunk-na9nw575.js";import{oC}from"./chunk-zjtt1xp5.js";function J2(e){let o=P_(),s=!!e.isAutoModeAvailable&&o;if(!s)t(`[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${uI()}`);return s}function i4t(e){return!!e.isBypassPermissionsModeAvailable&&!oC()}function a4t(e,o){switch(e.mode){case"default":return"acceptEdits";case"acceptEdits":return"plan";case"plan":if(i4t(e))return"bypassPermissions";if(J2(e))return"auto";return"default";case"bypassPermissions":if(J2(e))return"auto";return"default";case"dontAsk":return"default";default:return"default"}}function IZr(e,o,s){let n=a4t(e,o);return{nextMode:n,context:nH(e.mode,n,e,s)}}
export{J2,i4t,a4t,IZr};
