// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{fi,xv}from"./chunk-hdbxv3pp.js";import{a}from"./chunk-pv906ex9.js";import{Kt}from"./chunk-88cgz317.js";import{l}from"./chunk-pc7b8z35.js";import{t}from"./chunk-t2jwg94b.js";import{h$e,eh,Su,$ve}from"./chunk-h6md7820.js";import{skn,ckn,Jie,oE,ukn}from"./chunk-tgbc60ar.js";import{Me,ii}from"./chunk-j64ncx4g.js";import{Nlr}from"./chunk-3yv85b0k.js";function s(e){try{return new URL(e).host}catch{return}}function Lqt(e=a.ANTHROPIC_BASE_URL||Nlr()){if(!e)return!0;let i=s(Kt().BASE_API_URL);return i!==void 0&&s(e)===i}function iU(){skn()}function iv(){let e=Jie();if(e!==void 0)return e;let{eligible:i,ineligibleReason:n}=u(),g=a.CLAUDE_CODE_EVAL_CONFINED===!0,r=!i&&g;ukn(r);let o=i||r;return ckn(o,o?void 0:n)}function u(){if(oE())return{eligible:!0};if(Me()==="gateway"){let n=xv(fi());return{eligible:n,ineligibleReason:n?void 0:"unpinned_gateway"}}if(Me()!=="firstParty")return{eligible:!1,ineligibleReason:"third_party_provider"};if(!ii())return{eligible:!1,ineligibleReason:"custom_base_url"};let e=a.CLAUDE_CODE_ENTRYPOINT;if(e==="local-agent"||e==="remote_cowork"||e?.startsWith("claude-coworker"))return{eligible:!1,ineligibleReason:"sandboxed_entrypoint"};let i=!1;try{i=h$e()}catch(n){t(`Remote settings: could not read the profile store (${l(n)}); not treating this session as profile-authenticated`,{level:"warn"})}if(i)return Lqt()?{eligible:!0}:{eligible:!1,ineligibleReason:"profile_base_url_mismatch"};if(Su()&&$ve()===null)return{eligible:!0};if(Su()&&($ve()==="enterprise"||$ve()==="team"))return{eligible:!0};try{let{key:n}=eh({skipRetrievingKeyFromApiKeyHelper:!0});if(n)return{eligible:!0}}catch{}return{eligible:!1,ineligibleReason:Su()?"unsupported_subscription":"no_auth"}}
export{Lqt,iU,iv};
