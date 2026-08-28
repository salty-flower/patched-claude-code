// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{kAc as m,mAc as c,nAc as g,pAc as r,sAc as h,uAc as S}from"./_688.js";import{lgd as p,xgd as y}from"./_810.js";import{Agd as f,Dgd as w}from"./_811.js";import{Exd as s}from"./_839.js";var l=()=>{};import{execFile as P}from"child_process";function k(){return d===!0}function H(e){d=e}function B(){return r().lastKnown}function I(e){r().lastKnown=e}function u(e){return new Promise((i)=>{try{P("security",["find-generic-password","-a",g(),"-w","-s",e],{encoding:"utf-8",timeout:A,windowsHide:!0},(t,a)=>{let n=Boolean(t&&"killed"in t&&t.killed);i(n?null:{stdout:t?null:a?.trim()||null})})}catch{i(null)}})}function U(){if(o||p())return;let e=r(),i=e.generation;e.legacyApiKeyPrefetch="pending";let t=u(c(m)).then((n)=>{if(n)h(n.stdout,i,e)}),a=u(c()).then((n)=>{if(n&&e.legacyApiKeyPrefetch==="pending")e.legacyApiKeyPrefetch=n});o=Promise.all([t,a]).then(()=>{})}async function F(e){if(!o)return;await(e===void 0?o:f(o,e))}function D(){let e=r().legacyApiKeyPrefetch;return e==="pending"?null:e}function R(){r().legacyApiKeyPrefetch=null}var A=1e4,T=250,o=null,d;var K=s(()=>{y();w();S();l()});
export{l as $zc,T as aAc,k as bAc,H as cAc,B as dAc,I as eAc,U as fAc,F as gAc,D as hAc,R as iAc,K as jAc};
