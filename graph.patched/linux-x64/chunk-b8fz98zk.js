// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{t}from"./chunk-ray9kegj.js";import{XS,NO}from"./chunk-zaxe68t4.js";import{Q1}from"./chunk-yqwmsp2f.js";import{nP}from"./chunk-e82nwtyg.js";function Pq(e){let o=XS(),s=!!e.isAutoModeAvailable&&o;if(!s)t(`[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${NO()}`);return s}function gOn(e){return!!e.isBypassPermissionsModeAvailable&&!nP()}function _On(e,o){switch(e.mode){case"default":return"acceptEdits";case"acceptEdits":return"plan";case"plan":if(gOn(e))return"bypassPermissions";if(Pq(e))return"auto";return"default";case"bypassPermissions":if(Pq(e))return"auto";return"default";case"dontAsk":return"default";default:return"default"}}function fls(e,o,s){let n=_On(e,o);return{nextMode:n,context:Q1(e.mode,n,e,s)}}
export{Pq,gOn,_On,fls};
