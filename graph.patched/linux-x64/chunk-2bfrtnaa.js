// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{t}from"./chunk-1tk5haqn.js";import{_C,qA,lX}from"./chunk-y3swhsrk.js";import{Gy}from"./chunk-teghaqzq.js";function _$(e){let o=qA(),s=!!e.isAutoModeAvailable&&o;if(!s)t(`[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${lX()}`);return s}function E2e(e){return!!e.isBypassPermissionsModeAvailable&&!Gy()}function A2e(e,o){switch(e.mode){case"default":return"acceptEdits";case"acceptEdits":return"plan";case"plan":if(E2e(e))return"bypassPermissions";if(_$(e))return"auto";return"default";case"bypassPermissions":if(_$(e))return"auto";return"default";case"dontAsk":return"default";default:return"default"}}function HJt(e,o,s){let n=A2e(e,o);return{nextMode:n,context:_C(e.mode,n,e,s)}}
export{_$,E2e,A2e,HJt};
