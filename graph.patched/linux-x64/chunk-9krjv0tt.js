// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{n}from"./chunk-d0cr5d2v.js";import{GI,hE,HY}from"./chunk-h6btyxas.js";import{r_}from"./chunk-5ptjv5yf.js";function $z(e){let o=hE(),t=!!e.isAutoModeAvailable&&o;if(!t)n(`[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${HY()}`);return t}function M6t(e){return!!e.isBypassPermissionsModeAvailable&&!r_()}function eCt(e,o){switch(e.mode){case"default":return"acceptEdits";case"acceptEdits":return"plan";case"plan":if(M6t(e))return"bypassPermissions";if($z(e))return"auto";return"default";case"bypassPermissions":if($z(e))return"auto";return"default";case"dontAsk":return"default";default:return"default"}}function pDn(e,o,t){let s=eCt(e,o);return{nextMode:s,context:GI(e.mode,s,e,t)}}
export{$z,M6t,eCt,pDn};
