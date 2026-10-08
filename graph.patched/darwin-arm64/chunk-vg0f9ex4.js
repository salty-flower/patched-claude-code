// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{t}from"./chunk-b5feae42.js";import{QI}from"./chunk-55mz6czc.js";import{Ub,nH}from"./chunk-nwqfvmza.js";import{XE}from"./chunk-0rgznfkd.js";function wB(e){let o=Ub(),s=!!e.isAutoModeAvailable&&o;if(!s)t(`[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${nH()}`);return s}function oFt(e){return!!e.isBypassPermissionsModeAvailable&&!XE()}function sFt(e,o){switch(e.mode){case"default":return"acceptEdits";case"acceptEdits":return"plan";case"plan":if(oFt(e))return"bypassPermissions";if(wB(e))return"auto";return"default";case"bypassPermissions":if(wB(e))return"auto";return"default";case"dontAsk":return"default";default:return"default"}}function pLr(e,o,s){let n=sFt(e,o);return{nextMode:n,context:QI(e.mode,n,e,s)}}
export{wB,oFt,sFt,pLr};
