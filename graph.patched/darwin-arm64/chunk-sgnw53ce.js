// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{t}from"./chunk-bnfhb7sj.js";import{vH}from"./chunk-vkm1r9kt.js";import{Yh,WP}from"./chunk-996thspe.js";import{Ik}from"./chunk-0ja8zp6z.js";function f2(e){let o=Yh(),s=!!e.isAutoModeAvailable&&o;if(!s)t(`[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${WP()}`);return s}function hqt(e){return!!e.isBypassPermissionsModeAvailable&&!Ik()}function yqt(e,o){switch(e.mode){case"default":return"acceptEdits";case"acceptEdits":return"plan";case"plan":if(hqt(e))return"bypassPermissions";if(f2(e))return"auto";return"default";case"bypassPermissions":if(f2(e))return"auto";return"default";case"dontAsk":return"default";default:return"default"}}function n8r(e,o,s){let n=yqt(e,o);return{nextMode:n,context:vH(e.mode,n,e,s)}}
export{f2,hqt,yqt,n8r};
