// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{t}from"./chunk-cmg3b5hg.js";import{cx,YA,m7}from"./chunk-2byjyg85.js";import{I_}from"./chunk-vayxn3ng.js";function l$(e){let o=YA(),s=!!e.isAutoModeAvailable&&o;if(!s)t(`[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${m7()}`);return s}function $Ve(e){return!!e.isBypassPermissionsModeAvailable&&!I_()}function NVe(e,o){switch(e.mode){case"default":return"acceptEdits";case"acceptEdits":return"plan";case"plan":if($Ve(e))return"bypassPermissions";if(l$(e))return"auto";return"default";case"bypassPermissions":if(l$(e))return"auto";return"default";case"dontAsk":return"default";default:return"default"}}function won(e,o,s){let n=NVe(e,o);return{nextMode:n,context:cx(e.mode,n,e,s)}}
export{l$,$Ve,NVe,won};
