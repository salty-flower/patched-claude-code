// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{$Ct}from"./chunk-e2xykthf.js";import{aI}from"./chunk-rncrmfyt.js";import{m8e,Ti}from"./chunk-2gh4h0fv.js";import{d9,gV,Oro,MCt}from"./chunk-7j2hzcsm.js";function Qkt(){return $Ct()||m8e("auto_mode_off")||MCt()||m8e("unattended_serving_off")}function Zkt(n){try{if($Ct())return aI()==="settings"?"settings":"breaker";if(m8e("auto_mode_off"))return"settings";let e=m8e("unattended_serving_off");if(!MCt(n)&&!e)return"none";if(gV()||e)return"consent_forced_off";let t=d9();if(t==="declined")return"consent_declined";return t==="accepted"||Oro()?"consent_unknown":"consent_unset"}catch{return"consent_unknown"}}function b8r(n){let e=Zkt();if(e==="none")return;return{key:`served-auto-off-${e==="consent_unset"||e==="consent_declined"?"consent":e}`,text:Ti.auto_off_notice(n,Ti[`auto_off.reason.${e}`])}}export{Qkt,Zkt,b8r};
