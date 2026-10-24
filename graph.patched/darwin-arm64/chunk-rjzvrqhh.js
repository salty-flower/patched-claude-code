// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{t}from"./chunk-d7b0m8qy.js";import{wD}from"./chunk-nbjc7zk5.js";import{sS,bO}from"./chunk-31gxg38t.js";import{QC}from"./chunk-vacbe373.js";function i6(e){let o=sS(),s=!!e.isAutoModeAvailable&&o;if(!s)t(`[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${bO()}`);return s}function W7t(e){return!!e.isBypassPermissionsModeAvailable&&!QC()}function G7t(e,o){switch(e.mode){case"default":return"acceptEdits";case"acceptEdits":return"plan";case"plan":if(W7t(e))return"bypassPermissions";if(i6(e))return"auto";return"default";case"bypassPermissions":if(i6(e))return"auto";return"default";case"dontAsk":return"default";default:return"default"}}function Wco(e,o,s){let n=G7t(e,o);return{nextMode:n,context:wD(e.mode,n,e,s)}}
export{i6,W7t,G7t,Wco};
