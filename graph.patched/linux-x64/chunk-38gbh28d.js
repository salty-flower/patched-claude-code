// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{t}from"./chunk-p46wpkfz.js";import{XI}from"./chunk-pbrbnfk3.js";import{FS,QM}from"./chunk-g263vvvn.js";import{Kv}from"./chunk-ggf1x049.js";function c1(e){let o=FS(),s=!!e.isAutoModeAvailable&&o;if(!s)t(`[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${QM()}`);return s}function zNt(e){return!!e.isBypassPermissionsModeAvailable&&!Kv()}function GNt(e,o){switch(e.mode){case"default":return"acceptEdits";case"acceptEdits":return"plan";case"plan":if(zNt(e))return"bypassPermissions";if(c1(e))return"auto";return"default";case"bypassPermissions":if(c1(e))return"auto";return"default";case"dontAsk":return"default";default:return"default"}}function $0r(e,o,s){let n=GNt(e,o);return{nextMode:n,context:XI(e.mode,n,e,s)}}
export{c1,zNt,GNt,$0r};
