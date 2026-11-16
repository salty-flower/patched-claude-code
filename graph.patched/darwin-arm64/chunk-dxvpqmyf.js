// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{t}from"./chunk-bdfv2ky4.js";import{Jb,UI}from"./chunk-wqb2b4v0.js";import{tB}from"./chunk-3j048awx.js";import{oP}from"./chunk-fmp4yqpw.js";function MV(e){let o=Jb(),s=!!e.isAutoModeAvailable&&o;if(!s)t(`[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${UI()}`);return s}function IIn(e){return!!e.isBypassPermissionsModeAvailable&&!oP()}function MIn(e,o){switch(e.mode){case"default":return"acceptEdits";case"acceptEdits":return"plan";case"plan":if(IIn(e))return"bypassPermissions";if(MV(e))return"auto";return"default";case"bypassPermissions":if(MV(e))return"auto";return"default";case"dontAsk":return"default";default:return"default"}}function $ls(e,o,s){let n=MIn(e,o);return{nextMode:n,context:tB(e.mode,n,e,s)}}
export{MV,IIn,MIn,$ls};
