// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{OGe,Vi}from"./chunk-zwe9vtev.js";import{Gmt}from"./chunk-55mz6czc.js";import{nH}from"./chunk-nwqfvmza.js";import{M3,MW,u1r,Pmt}from"./chunk-ezvprnjr.js";function vut(){return Gmt()||OGe("auto_mode_off")||Pmt()||OGe("unattended_serving_off")}function kut(n){try{if(Gmt())return nH()==="settings"?"settings":"breaker";if(OGe("auto_mode_off"))return"settings";let e=OGe("unattended_serving_off");if(!Pmt(n)&&!e)return"none";if(MW()||e)return"consent_forced_off";let t=M3();if(t==="declined")return"consent_declined";return t==="accepted"||u1r()?"consent_unknown":"consent_unset"}catch{return"consent_unknown"}}function aIr(n){let e=kut();if(e==="none")return;return{key:`served-auto-off-${e==="consent_unset"||e==="consent_declined"?"consent":e}`,text:Vi.auto_off_notice(n,Vi[`auto_off.reason.${e}`])}}export{vut,kut,aIr};
