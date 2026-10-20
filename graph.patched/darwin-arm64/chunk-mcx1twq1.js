// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{GAt}from"./chunk-k5vb4gwq.js";import{uI}from"./chunk-na9nw575.js";import{E8e,Ci}from"./chunk-d7eqjts1.js";import{yY,kV,roo,$At}from"./chunk-se7dra0e.js";function Zkt(){return GAt()||E8e("auto_mode_off")||$At()||E8e("unattended_serving_off")}function eCt(n){try{if(GAt())return uI()==="settings"?"settings":"breaker";if(E8e("auto_mode_off"))return"settings";let e=E8e("unattended_serving_off");if(!$At(n)&&!e)return"none";if(kV()||e)return"consent_forced_off";let t=yY();if(t==="declined")return"consent_declined";return t==="accepted"||roo()?"consent_unknown":"consent_unset"}catch{return"consent_unknown"}}function _8r(n){let e=eCt();if(e==="none")return;return{key:`served-auto-off-${e==="consent_unset"||e==="consent_declined"?"consent":e}`,text:Ci.auto_off_notice(n,Ci[`auto_off.reason.${e}`])}}export{Zkt,eCt,_8r};
