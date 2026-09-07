// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{t}from"./chunk-5q90j22t.js";import{Ak,XA,hX}from"./chunk-1692k4g5.js";import{z_}from"./chunk-a1w965p7.js";function vL(e){let o=XA(),s=!!e.isAutoModeAvailable&&o;if(!s)t(`[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${hX()}`);return s}function M6e(e){return!!e.isBypassPermissionsModeAvailable&&!z_()}function N6e(e,o){switch(e.mode){case"default":return"acceptEdits";case"acceptEdits":return"plan";case"plan":if(M6e(e))return"bypassPermissions";if(vL(e))return"auto";return"default";case"bypassPermissions":if(vL(e))return"auto";return"default";case"dontAsk":return"default";default:return"default"}}function qYt(e,o,s){let n=N6e(e,o);return{nextMode:n,context:Ak(e.mode,n,e,s)}}
export{vL,M6e,N6e,qYt};
