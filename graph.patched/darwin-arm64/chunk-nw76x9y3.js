// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{t}from"./chunk-gyf58rwf.js";import{i0}from"./chunk-xv9wnb67.js";import{O_,_M}from"./chunk-sfn1dbxq.js";import{Iv}from"./chunk-np2hxx6s.js";function Dj(e){let o=O_(),s=!!e.isAutoModeAvailable&&o;if(!s)t(`[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${_M()}`);return s}function UBt(e){return!!e.isBypassPermissionsModeAvailable&&!Iv()}function BBt(e,o){switch(e.mode){case"default":return"acceptEdits";case"acceptEdits":return"plan";case"plan":if(UBt(e))return"bypassPermissions";if(Dj(e))return"auto";return"default";case"bypassPermissions":if(Dj(e))return"auto";return"default";case"dontAsk":return"default";default:return"default"}}function sjr(e,o,s){let n=BBt(e,o);return{nextMode:n,context:i0(e.mode,n,e,s)}}
export{Dj,UBt,BBt,sjr};
