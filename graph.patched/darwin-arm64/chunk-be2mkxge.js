// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{t}from"./chunk-t2jwg94b.js";import{Fk,PC,QX}from"./chunk-darxmw8c.js";import{cy}from"./chunk-kn1e6cs3.js";function BW(e){let o=PC(),s=!!e.isAutoModeAvailable&&o;if(!s)t(`[auto-mode] canCycleToAuto=false: ctx.isAutoModeAvailable=${e.isAutoModeAvailable} isAutoModeGateEnabled=${o} reason=${QX()}`);return s}function WJt(e){return!!e.isBypassPermissionsModeAvailable&&!cy()}function uje(e,o){switch(e.mode){case"default":return"acceptEdits";case"acceptEdits":return"plan";case"plan":if(WJt(e))return"bypassPermissions";if(BW(e))return"auto";return"default";case"bypassPermissions":if(BW(e))return"auto";return"default";case"dontAsk":return"default";default:return"default"}}function GJt(e,o,s){let n=uje(e,o);return{nextMode:n,context:Fk(e.mode,n,e,s)}}
export{BW,WJt,uje,GJt};
