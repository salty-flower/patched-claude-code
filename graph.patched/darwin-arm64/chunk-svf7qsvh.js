// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{zje,Ui}from"./chunk-2s6nnhcv.js";import{Aut,v2}from"./chunk-5vgtbtkf.js";import{TK,w2,F0r,uut}from"./chunk-pvqvmaqx.js";function Slt(){return Aut()||zje("auto_mode_off")||uut()||zje("unattended_serving_off")}function blt(n){try{if(Aut())return v2()==="settings"?"settings":"breaker";if(zje("auto_mode_off"))return"settings";let e=zje("unattended_serving_off");if(!uut(n)&&!e)return"none";if(w2()||e)return"consent_forced_off";let t=TK();if(t==="declined")return"consent_declined";return t==="accepted"||F0r()?"consent_unknown":"consent_unset"}catch{return"consent_unknown"}}function RCr(n){let e=blt();if(e==="none")return;return{key:`served-auto-off-${e==="consent_unset"||e==="consent_declined"?"consent":e}`,text:Ui.auto_off_notice(n,Ui[`auto_off.reason.${e}`])}}export{Slt,blt,RCr};
