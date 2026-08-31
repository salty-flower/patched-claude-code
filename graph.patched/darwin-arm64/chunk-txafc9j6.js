// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{n}from"./chunk-ynzt0fm1.js";import{V0,hE,A7}from"./chunk-fy12d89p.js";import{oy}from"./chunk-brd9ebb9.js";function Fj(e){let o=hE(),t=!!e.isAutoModeAvailable&&o;if(!t)n(`[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${A7()}`);return t}function F8t(e){return!!e.isBypassPermissionsModeAvailable&&!oy()}function ekt(e,o){switch(e.mode){case"default":return"acceptEdits";case"acceptEdits":return"plan";case"plan":if(F8t(e))return"bypassPermissions";if(Fj(e))return"auto";return"default";case"bypassPermissions":if(Fj(e))return"auto";return"default";case"dontAsk":return"default";default:return"default"}}function yOn(e,o,t){let s=ekt(e,o);return{nextMode:s,context:V0(e.mode,s,e,t)}}
export{Fj,F8t,ekt,yOn};
