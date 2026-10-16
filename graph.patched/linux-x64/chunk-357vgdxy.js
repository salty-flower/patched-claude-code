// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{t}from"./chunk-cwsn6mdf.js";import{SH}from"./chunk-511q1ycy.js";import{qh,FP}from"./chunk-38nf1dnm.js";import{xk}from"./chunk-e5319c5q.js";function rz(e){let o=qh(),s=!!e.isAutoModeAvailable&&o;if(!s)t(`[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${FP()}`);return s}function nqt(e){return!!e.isBypassPermissionsModeAvailable&&!xk()}function rqt(e,o){switch(e.mode){case"default":return"acceptEdits";case"acceptEdits":return"plan";case"plan":if(nqt(e))return"bypassPermissions";if(rz(e))return"auto";return"default";case"bypassPermissions":if(rz(e))return"auto";return"default";case"dontAsk":return"default";default:return"default"}}function C3r(e,o,s){let n=rqt(e,o);return{nextMode:n,context:SH(e.mode,n,e,s)}}
export{rz,nqt,rqt,C3r};
