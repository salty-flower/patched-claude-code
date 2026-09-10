// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{t}from"./chunk-wbbe5mtc.js";import{hx,JC,EJ}from"./chunk-e55d0yhx.js";import{O_}from"./chunk-ydvy7t16.js";function hN(e){let o=JC(),s=!!e.isAutoModeAvailable&&o;if(!s)t(`[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${EJ()}`);return s}function K3e(e){return!!e.isBypassPermissionsModeAvailable&&!O_()}function Y3e(e,o){switch(e.mode){case"default":return"acceptEdits";case"acceptEdits":return"plan";case"plan":if(K3e(e))return"bypassPermissions";if(hN(e))return"auto";return"default";case"bypassPermissions":if(hN(e))return"auto";return"default";case"dontAsk":return"default";default:return"default"}}function Gon(e,o,s){let n=Y3e(e,o);return{nextMode:n,context:hx(e.mode,n,e,s)}}
export{hN,K3e,Y3e,Gon};
