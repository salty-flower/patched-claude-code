// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{n}from"./chunk-cmkfpkth.js";import{CD,ZT,yV}from"./chunk-j5h9ds58.js";import{_y}from"./chunk-x97r7w1g.js";function _G(e){let o=ZT(),t=!!e.isAutoModeAvailable&&o;if(!t)n(`[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${yV()}`);return t}function i(e){return!!e.isBypassPermissionsModeAvailable&&!_y()}function qTt(e,o){switch(e.mode){case"default":return"acceptEdits";case"acceptEdits":return"plan";case"plan":if(i(e))return"bypassPermissions";if(_G(e))return"auto";return"default";case"bypassPermissions":if(_G(e))return"auto";return"default";case"dontAsk":return"default";default:return"default"}}function Nkn(e,o,t){let s=qTt(e,o);return{nextMode:s,context:CD(e.mode,s,e,t)}}
export{_G,qTt,Nkn};
