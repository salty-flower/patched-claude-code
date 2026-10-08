// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{fGe,qi}from"./chunk-aqh2c7wz.js";import{zmt}from"./chunk-pbrbnfk3.js";import{QM}from"./chunk-g263vvvn.js";import{PY,Tz,SUr,Pmt}from"./chunk-23sxjvtd.js";function kut(){return zmt()||fGe("auto_mode_off")||Pmt()||fGe("unattended_serving_off")}function Tut(n){try{if(zmt())return QM()==="settings"?"settings":"breaker";if(fGe("auto_mode_off"))return"settings";let e=fGe("unattended_serving_off");if(!Pmt(n)&&!e)return"none";if(Tz()||e)return"consent_forced_off";let t=PY();if(t==="declined")return"consent_declined";return t==="accepted"||SUr()?"consent_unknown":"consent_unset"}catch{return"consent_unknown"}}function lIr(n){let e=Tut();if(e==="none")return;return{key:`served-auto-off-${e==="consent_unset"||e==="consent_declined"?"consent":e}`,text:qi.auto_off_notice(n,qi[`auto_off.reason.${e}`])}}export{kut,Tut,lIr};
