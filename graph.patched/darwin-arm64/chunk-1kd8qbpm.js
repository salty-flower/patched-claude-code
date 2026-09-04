// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{t}from"./chunk-84crg0gy.js";import{Jk,qC,IY}from"./chunk-5e9qk3ys.js";import{Sy}from"./chunk-z3d1n4vr.js";function p9(e){let o=qC(),s=!!e.isAutoModeAvailable&&o;if(!s)t(`[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${IY()}`);return s}function cen(e){return!!e.isBypassPermissionsModeAvailable&&!Sy()}function WWe(e,o){switch(e.mode){case"default":return"acceptEdits";case"acceptEdits":return"plan";case"plan":if(cen(e))return"bypassPermissions";if(p9(e))return"auto";return"default";case"bypassPermissions":if(p9(e))return"auto";return"default";case"dontAsk":return"default";default:return"default"}}function uen(e,o,s){let n=WWe(e,o);return{nextMode:n,context:Jk(e.mode,n,e,s)}}
export{p9,cen,WWe,uen};
