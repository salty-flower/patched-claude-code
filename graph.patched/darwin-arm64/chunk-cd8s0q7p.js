// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{t}from"./chunk-wvb0gwjm.js";import{QO,yb,kne}from"./chunk-wnf49mj5.js";import{Fb}from"./chunk-5a6jmhh9.js";function iM(e){let o=yb(),s=!!e.isAutoModeAvailable&&o;if(!s)t(`[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${kne()}`);return s}function Sgt(e){return!!e.isBypassPermissionsModeAvailable&&!Fb()}function bgt(e,o){switch(e.mode){case"default":return"acceptEdits";case"acceptEdits":return"plan";case"plan":if(Sgt(e))return"bypassPermissions";if(iM(e))return"auto";return"default";case"bypassPermissions":if(iM(e))return"auto";return"default";case"dontAsk":return"default";default:return"default"}}function dYn(e,o,s){let n=bgt(e,o);return{nextMode:n,context:QO(e.mode,n,e,s)}}
export{iM,Sgt,bgt,dYn};
