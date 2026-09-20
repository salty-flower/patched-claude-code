// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{t}from"./chunk-qmm87fyw.js";import{NI,yT,wX}from"./chunk-nq62bgfy.js";import{Eb}from"./chunk-ttgp160k.js";function a$(e){let o=yT(),s=!!e.isAutoModeAvailable&&o;if(!s)t(`[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${wX()}`);return s}function VXe(e){return!!e.isBypassPermissionsModeAvailable&&!Eb()}function qXe(e,o){switch(e.mode){case"default":return"acceptEdits";case"acceptEdits":return"plan";case"plan":if(VXe(e))return"bypassPermissions";if(a$(e))return"auto";return"default";case"bypassPermissions":if(a$(e))return"auto";return"default";case"dontAsk":return"default";default:return"default"}}function Pvn(e,o,s){let n=qXe(e,o);return{nextMode:n,context:NI(e.mode,n,e,s)}}
export{a$,VXe,qXe,Pvn};
