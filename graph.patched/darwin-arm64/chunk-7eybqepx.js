// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{$Ct}from"./chunk-vkm1r9kt.js";import{WP}from"./chunk-996thspe.js";import{d9e,si}from"./chunk-dvmwj6gj.js";import{k8,$$,v3t,vCt}from"./chunk-s50bsytd.js";function Uwt(){return $Ct()||d9e("auto_mode_off")||vCt()||d9e("unattended_serving_off")}function Bwt(n){try{if($Ct())return WP()==="settings"?"settings":"breaker";if(d9e("auto_mode_off"))return"settings";let e=d9e("unattended_serving_off");if(!vCt(n)&&!e)return"none";if($$()||e)return"consent_forced_off";let t=k8();if(t==="declined")return"consent_declined";return t==="accepted"||v3t()?"consent_unknown":"consent_unset"}catch{return"consent_unknown"}}function q6r(n){let e=Bwt();if(e==="none")return;return{key:`served-auto-off-${e==="consent_unset"||e==="consent_declined"?"consent":e}`,text:si.auto_off_notice(n,si[`auto_off.reason.${e}`])}}export{Uwt,Bwt,q6r};
