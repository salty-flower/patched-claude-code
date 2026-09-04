// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{_i,Uv}from"./chunk-yhfssb7x.js";import{a}from"./chunk-g2ngvza5.js";import{Jt}from"./chunk-2b9rpf69.js";import{l}from"./chunk-dsb06hq9.js";import{t}from"./chunk-84crg0gy.js";import{KUe,oh,Hu,rke}from"./chunk-vtwn1md5.js";import{s0n,c0n,qse,_E,u0n}from"./chunk-v3s7w1dm.js";import{Me,Qo}from"./chunk-wg76fyda.js";import{gpr}from"./chunk-0e339jxb.js";function s(e){try{return new URL(e).host}catch{return}}function jzt(e=a.ANTHROPIC_BASE_URL||gpr()){if(!e)return!0;let i=s(Jt().BASE_API_URL);return i!==void 0&&s(e)===i}function CU(){s0n()}function FA(){let e=qse();if(e!==void 0)return e;let{eligible:i,ineligibleReason:n}=u(),g=a.CLAUDE_CODE_EVAL_CONFINED===!0,r=!i&&g;u0n(r);let o=i||r;return c0n(o,o?void 0:n)}function u(){if(_E())return{eligible:!0};if(Me()==="gateway"){let n=Uv(_i());return{eligible:n,ineligibleReason:n?void 0:"unpinned_gateway"}}if(Me()!=="firstParty")return{eligible:!1,ineligibleReason:"third_party_provider"};if(!Qo())return{eligible:!1,ineligibleReason:"custom_base_url"};let e=a.CLAUDE_CODE_ENTRYPOINT;if(e==="local-agent"||e==="remote_cowork"||e?.startsWith("claude-coworker"))return{eligible:!1,ineligibleReason:"sandboxed_entrypoint"};let i=!1;try{i=KUe()}catch(n){t(`Remote settings: could not read the profile store (${l(n)}); not treating this session as profile-authenticated`,{level:"warn"})}if(i)return jzt()?{eligible:!0}:{eligible:!1,ineligibleReason:"profile_base_url_mismatch"};if(Hu()&&rke()===null)return{eligible:!0};if(Hu()&&(rke()==="enterprise"||rke()==="team"))return{eligible:!0};try{let{key:n}=oh({skipRetrievingKeyFromApiKeyHelper:!0});if(n)return{eligible:!0}}catch{}return{eligible:!1,ineligibleReason:Hu()?"unsupported_subscription":"no_auth"}}
export{jzt,CU,FA};
