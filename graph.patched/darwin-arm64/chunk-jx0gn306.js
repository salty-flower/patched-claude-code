// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{U_t}from"./chunk-xv9wnb67.js";import{_M}from"./chunk-sfn1dbxq.js";import{TVe,Ni}from"./chunk-n3ykh62m.js";import{Z4,ZG,QGr,k_t}from"./chunk-vq5xch6f.js";function ygt(){return U_t()||TVe("auto_mode_off")||k_t()||TVe("unattended_serving_off")}function _gt(n){try{if(U_t())return _M()==="settings"?"settings":"breaker";if(TVe("auto_mode_off"))return"settings";let e=TVe("unattended_serving_off");if(!k_t(n)&&!e)return"none";if(ZG()||e)return"consent_forced_off";let t=Z4();if(t==="declined")return"consent_declined";return t==="accepted"||QGr()?"consent_unknown":"consent_unset"}catch{return"consent_unknown"}}function iNr(n){let e=_gt();if(e==="none")return;return{key:`served-auto-off-${e==="consent_unset"||e==="consent_declined"?"consent":e}`,text:Ni.auto_off_notice(n,Ni[`auto_off.reason.${e}`])}}export{ygt,_gt,iNr};
