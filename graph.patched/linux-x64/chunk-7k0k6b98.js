// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{os,zv}from"./chunk-bj7g1p32.js";import{a}from"./chunk-td8fcebs.js";import{Vt}from"./chunk-hpnksvcw.js";import{l}from"./chunk-7s5qs9ea.js";import{t}from"./chunk-1tk5haqn.js";import{rBe,xg,mu,lBe}from"./chunk-3e93vkg3.js";import{qTn,XTn,wse,$w,JTn}from"./chunk-qyjj7h0q.js";import{Le,uo}from"./chunk-0558tzyr.js";import{$nr}from"./chunk-nfmdzyhb.js";function s(e){try{return new URL(e).host}catch{return}}function _Vt(e=a.ANTHROPIC_BASE_URL||$nr()){if(!e)return!0;let i=s(Vt().BASE_API_URL);return i!==void 0&&s(e)===i}function nB(){qTn()}function FE(){let e=wse();if(e!==void 0)return e;let{eligible:i,ineligibleReason:n}=f(),g=a.CLAUDE_CODE_EVAL_CONFINED===!0,r=!i&&g;JTn(r);let o=i||r;return XTn(o,o?void 0:n)}function u(){return Xbn()||mu()&&lBe()===null}function Xbn(){if(!mu())return!1;let e=lBe();return e==="enterprise"||e==="team"}function f(){if($w())return{eligible:!0};if(Le()==="gateway"){let n=zv(os());return{eligible:n,ineligibleReason:n?void 0:"unpinned_gateway"}}if(Le()!=="firstParty")return{eligible:!1,ineligibleReason:"third_party_provider"};if(!uo())return{eligible:!1,ineligibleReason:"custom_base_url"};let e=a.CLAUDE_CODE_ENTRYPOINT;if(e==="local-agent"||e==="remote_cowork"||e?.startsWith("claude-coworker"))return{eligible:!1,ineligibleReason:"sandboxed_entrypoint"};let i=!1;try{i=rBe()}catch(n){t(`Remote settings: could not read the profile store (${l(n)}); not treating this session as profile-authenticated`,{level:"warn"})}if(i)return _Vt()?{eligible:!0}:{eligible:!1,ineligibleReason:"profile_base_url_mismatch"};if(u())return{eligible:!0};try{let{key:n}=xg({skipRetrievingKeyFromApiKeyHelper:!0});if(n)return{eligible:!0}}catch{}return{eligible:!1,ineligibleReason:mu()?"unsupported_subscription":"no_auth"}}
export{_Vt,nB,FE,Xbn};
