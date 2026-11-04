// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{t}from"./chunk-5nh49npx.js";import{RF}from"./chunk-77pm0hd3.js";import{Z_,TD}from"./chunk-0x9x817t.js";import{iR}from"./chunk-gpjhx94q.js";function n3(e){let o=Z_(),s=!!e.isAutoModeAvailable&&o;if(!s)t(`[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${TD()}`);return s}function ghn(e){return!!e.isBypassPermissionsModeAvailable&&!iR()}function yhn(e,o){switch(e.mode){case"default":return"acceptEdits";case"acceptEdits":return"plan";case"plan":if(ghn(e))return"bypassPermissions";if(n3(e))return"auto";return"default";case"bypassPermissions":if(n3(e))return"auto";return"default";case"dontAsk":return"default";default:return"default"}}function rBo(e,o,s){let n=yhn(e,o);return{nextMode:n,context:RF(e.mode,n,e,s)}}
export{n3,ghn,yhn,rBo};
