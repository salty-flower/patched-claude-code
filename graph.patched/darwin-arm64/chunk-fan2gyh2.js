// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{OMt}from"./chunk-nbjc7zk5.js";import{bO}from"./chunk-31gxg38t.js";import{LJe,vi}from"./chunk-0s3jtbsx.js";import{f7,wq,_go,Sgo,AMt}from"./chunk-tnt0dnyd.js";function LPt(){return OMt()||LJe("auto_mode_off")||AMt()||LJe("unattended_serving_off")}function NPt(n){try{if(OMt())return bO()==="settings"?"settings":"breaker";if(LJe("auto_mode_off"))return"settings";let e=LJe("unattended_serving_off");if(!AMt(n)&&!e)return"none";if(wq()||e)return"consent_forced_off";let t=f7();if(t==="declined")return"consent_declined";if(t==="accepted"||_go())return"consent_unknown";return Sgo()?"sandbox_off":"consent_unset"}catch{return"consent_unknown"}}function koo(n){let e=NPt();if(e==="none")return;return{key:`served-auto-off-${e==="consent_unset"||e==="consent_declined"?"consent":e}`,text:vi.auto_off_notice(n,vi[`auto_off.reason.${e}`])}}export{LPt,NPt,koo};
