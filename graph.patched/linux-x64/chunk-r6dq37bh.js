// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Kje,Ui}from"./chunk-0fybab08.js";import{Tut,mW}from"./chunk-qg5t30n7.js";import{E4,pW,qMr,dut}from"./chunk-0rmawb95.js";function slt(){return Tut()||Kje("auto_mode_off")||dut()||Kje("unattended_serving_off")}function ilt(n){try{if(Tut())return mW()==="settings"?"settings":"breaker";if(Kje("auto_mode_off"))return"settings";let e=Kje("unattended_serving_off");if(!dut(n)&&!e)return"none";if(pW()||e)return"consent_forced_off";let t=E4();if(t==="declined")return"consent_declined";return t==="accepted"||qMr()?"consent_unknown":"consent_unset"}catch{return"consent_unknown"}}function LEr(n){let e=ilt();if(e==="none")return;return{key:`served-auto-off-${e==="consent_unset"||e==="consent_declined"?"consent":e}`,text:Ui.auto_off_notice(n,Ui[`auto_off.reason.${e}`])}}export{slt,ilt,LEr};
