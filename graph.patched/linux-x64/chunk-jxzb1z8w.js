// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{RTt}from"./chunk-511q1ycy.js";import{FP}from"./chunk-38nf1dnm.js";import{t3e,si}from"./chunk-7f1jmyrt.js";import{g8,MF,dYt,pTt}from"./chunk-ndrjwkf9.js";function Awt(){return RTt()||t3e("auto_mode_off")||pTt()||t3e("unattended_serving_off")}function Cwt(n){try{if(RTt())return FP()==="settings"?"settings":"breaker";if(t3e("auto_mode_off"))return"settings";let e=t3e("unattended_serving_off");if(!pTt(n)&&!e)return"none";if(MF()||e)return"consent_forced_off";let t=g8();if(t==="declined")return"consent_declined";return t==="accepted"||dYt()?"consent_unknown":"consent_unset"}catch{return"consent_unknown"}}function aVr(n){let e=Cwt();if(e==="none")return;return{key:`served-auto-off-${e==="consent_unset"||e==="consent_declined"?"consent":e}`,text:si.auto_off_notice(n,si[`auto_off.reason.${e}`])}}export{Awt,Cwt,aVr};
