// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{os,XC}from"./chunk-zhtwayh2.js";import{a}from"./chunk-dq2s4wjn.js";import{zt}from"./chunk-9g7wf9qr.js";import{l}from"./chunk-084v19yj.js";import{t}from"./chunk-5q90j22t.js";import{g$e,Og,hu,b$e}from"./chunk-n495pc0t.js";import{bkn,Ekn,xse,MT,Akn}from"./chunk-sxccpdbg.js";import{Pe,uo}from"./chunk-d5e21f8p.js";import{yrr}from"./chunk-6pky15m5.js";function s(e){try{return new URL(e).host}catch{return}}function $3t(e=a.ANTHROPIC_BASE_URL||yrr()){if(!e)return!0;let i=s(zt().BASE_API_URL);return i!==void 0&&s(e)===i}function d$(){bkn()}function UE(){let e=xse();if(e!==void 0)return e;let{eligible:i,ineligibleReason:n}=f(),g=a.CLAUDE_CODE_EVAL_CONFINED===!0,r=!i&&g;Akn(r);let o=i||r;return Ekn(o,o?void 0:n)}function u(){return Cbn()||hu()&&b$e()===null}function Cbn(){if(!hu())return!1;let e=b$e();return e==="enterprise"||e==="team"}function f(){if(MT())return{eligible:!0};if(Pe()==="gateway"){let n=XC(os());return{eligible:n,ineligibleReason:n?void 0:"unpinned_gateway"}}if(Pe()!=="firstParty")return{eligible:!1,ineligibleReason:"third_party_provider"};if(!uo())return{eligible:!1,ineligibleReason:"custom_base_url"};let e=a.CLAUDE_CODE_ENTRYPOINT;if(e==="local-agent"||e==="remote_cowork"||e?.startsWith("claude-coworker"))return{eligible:!1,ineligibleReason:"sandboxed_entrypoint"};let i=!1;try{i=g$e()}catch(n){t(`Remote settings: could not read the profile store (${l(n)}); not treating this session as profile-authenticated`,{level:"warn"})}if(i)return $3t()?{eligible:!0}:{eligible:!1,ineligibleReason:"profile_base_url_mismatch"};if(u())return{eligible:!0};try{let{key:n}=Og({skipRetrievingKeyFromApiKeyHelper:!0});if(n)return{eligible:!0}}catch{}return{eligible:!1,ineligibleReason:hu()?"unsupported_subscription":"no_auth"}}
export{$3t,d$,UE,Cbn};
