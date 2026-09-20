// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{t}from"./chunk-847hpqqs.js";import{T0,gT,mJ}from"./chunk-v4zgc4qd.js";import{SS}from"./chunk-a31y19dr.js";function JF(e){let o=gT(),s=!!e.isAutoModeAvailable&&o;if(!s)t(`[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${mJ()}`);return s}function vJe(e){return!!e.isBypassPermissionsModeAvailable&&!SS()}function EJe(e,o){switch(e.mode){case"default":return"acceptEdits";case"acceptEdits":return"plan";case"plan":if(vJe(e))return"bypassPermissions";if(JF(e))return"auto";return"default";case"bypassPermissions":if(JF(e))return"auto";return"default";case"dontAsk":return"default";default:return"default"}}function Nvn(e,o,s){let n=EJe(e,o);return{nextMode:n,context:T0(e.mode,n,e,s)}}
export{JF,vJe,EJe,Nvn};
