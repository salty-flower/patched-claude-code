// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{t}from"./chunk-f8eqwxpt.js";import{kI,cv,v2}from"./chunk-5vgtbtkf.js";import{TE}from"./chunk-g91118eq.js";function vU(e){let o=cv(),s=!!e.isAutoModeAvailable&&o;if(!s)t(`[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${v2()}`);return s}function gMt(e){return!!e.isBypassPermissionsModeAvailable&&!TE()}function hMt(e,o){switch(e.mode){case"default":return"acceptEdits";case"acceptEdits":return"plan";case"plan":if(gMt(e))return"bypassPermissions";if(vU(e))return"auto";return"default";case"bypassPermissions":if(vU(e))return"auto";return"default";case"dontAsk":return"default";default:return"default"}}function Wxr(e,o,s){let n=hMt(e,o);return{nextMode:n,context:kI(e.mode,n,e,s)}}
export{vU,gMt,hMt,Wxr};
