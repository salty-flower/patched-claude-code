// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{t}from"./chunk-w930ag8r.js";import{tx,Mv,sJ}from"./chunk-tavwd3sq.js";import{T_}from"./chunk-jz4faxgn.js";function XM(e){let o=Mv(),s=!!e.isAutoModeAvailable&&o;if(!s)t(`[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${sJ()}`);return s}function AGe(e){return!!e.isBypassPermissionsModeAvailable&&!T_()}function CGe(e,o){switch(e.mode){case"default":return"acceptEdits";case"acceptEdits":return"plan";case"plan":if(AGe(e))return"bypassPermissions";if(XM(e))return"auto";return"default";case"bypassPermissions":if(XM(e))return"auto";return"default";case"dontAsk":return"default";default:return"default"}}function Mnn(e,o,s){let n=CGe(e,o);return{nextMode:n,context:tx(e.mode,n,e,s)}}
export{XM,AGe,CGe,Mnn};
