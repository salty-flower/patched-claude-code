// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{vo,yH}from"./chunk-cet8na02.js";import{a}from"./chunk-qymratxs.js";import{Xt}from"./chunk-jww0ztav.js";import{l}from"./chunk-wkyng8j1.js";import{t}from"./chunk-w930ag8r.js";import{X2e,dh,Hu,nje}from"./chunk-vryy7b5x.js";import{gDn,_Dn,Yae,jS,SDn}from"./chunk-1qb0n0qf.js";import{He,mo}from"./chunk-k2g2a0ht.js";import{jdr}from"./chunk-hndhb8as.js";function s(e){try{return new URL(e).host}catch{return}}function S9t(e=a.ANTHROPIC_BASE_URL||jdr()){if(!e)return!0;let i=s(Xt().BASE_API_URL);return i!==void 0&&s(e)===i}function NU(){gDn()}function TC(){let e=Yae();if(e!==void 0)return e;let{eligible:i,ineligibleReason:n}=f(),g=a.CLAUDE_CODE_EVAL_CONFINED===!0,r=!i&&g;SDn(r);let o=i||r;return _Dn(o,o?void 0:n)}function u(){return Ivn()||Hu()&&nje()===null}function Ivn(){if(!Hu())return!1;let e=nje();return e==="enterprise"||e==="team"}function f(){if(jS())return{eligible:!0};if(He()==="gateway"){let n=yH(vo());return{eligible:n,ineligibleReason:n?void 0:"unpinned_gateway"}}if(He()!=="firstParty")return{eligible:!1,ineligibleReason:"third_party_provider"};if(!mo())return{eligible:!1,ineligibleReason:"custom_base_url"};let e=a.CLAUDE_CODE_ENTRYPOINT;if(e==="local-agent"||e==="remote_cowork"||e?.startsWith("claude-coworker"))return{eligible:!1,ineligibleReason:"sandboxed_entrypoint"};let i=!1;try{i=X2e()}catch(n){t(`Remote settings: could not read the profile store (${l(n)}); not treating this session as profile-authenticated`,{level:"warn"})}if(i)return S9t()?{eligible:!0}:{eligible:!1,ineligibleReason:"profile_base_url_mismatch"};if(u())return{eligible:!0};try{let{key:n}=dh({skipRetrievingKeyFromApiKeyHelper:!0});if(n)return{eligible:!0}}catch{}return{eligible:!1,ineligibleReason:Hu()?"unsupported_subscription":"no_auth"}}
export{S9t,NU,TC,Ivn};
