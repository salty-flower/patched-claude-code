// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{n}from"./chunk-akz0cj0f.js";import{AP,QE,f9}from"./chunk-hrvkymct.js";import{yy}from"./chunk-e7tm9qc1.js";function b6(e){let o=QE(),t=!!e.isAutoModeAvailable&&o;if(!t)n(`[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${f9()}`);return t}function i(e){return!!e.isBypassPermissionsModeAvailable&&!yy()}function tAt(e,o){switch(e.mode){case"default":return"acceptEdits";case"acceptEdits":return"plan";case"plan":if(i(e))return"bypassPermissions";if(b6(e))return"auto";return"default";case"bypassPermissions":if(b6(e))return"auto";return"default";case"dontAsk":return"default";default:return"default"}}function iCn(e,o,t){let s=tAt(e,o);return{nextMode:s,context:AP(e.mode,s,e,t)}}
export{b6,tAt,iCn};
