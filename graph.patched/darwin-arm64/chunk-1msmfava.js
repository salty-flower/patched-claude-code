// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{t}from"./chunk-3wz0srxw.js";import{nL,vw,eie}from"./chunk-4n78rvw1.js";import{qw}from"./chunk-qvwgdr4y.js";function _F(e){let o=vw(),s=!!e.isAutoModeAvailable&&o;if(!s)t(`[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${eie()}`);return s}function CEt(e){return!!e.isBypassPermissionsModeAvailable&&!qw()}function AEt(e,o){switch(e.mode){case"default":return"acceptEdits";case"acceptEdits":return"plan";case"plan":if(CEt(e))return"bypassPermissions";if(_F(e))return"auto";return"default";case"bypassPermissions":if(_F(e))return"auto";return"default";case"dontAsk":return"default";default:return"default"}}function wlr(e,o,s){let n=AEt(e,o);return{nextMode:n,context:nL(e.mode,n,e,s)}}
export{_F,CEt,AEt,wlr};
