// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Ne}from"./chunk-2ckwvz0j.js";import{_r}from"./chunk-jrcdjayr.js";import{zCe,uB,dP,J9,a8s,Pmn}from"./chunk-xkz94qys.js";import{execFile as c}from"child_process";var l=1e4,rWo=250,o=null,u;function jgi(){return u===!0}function Wgi(){return J9().lastKnown}function Ggi(e){J9().lastKnown=e}function s(e){return new Promise((n)=>{try{c("security",["find-generic-password","-a",dP(),"-w","-s",e],{encoding:"utf-8",timeout:l,windowsHide:!0},(t,i)=>{let a=Boolean(t&&"killed"in t&&t.killed);n(a?null:{stdout:t?null:i?.trim()||null})})}catch{n(null)}})}function oWo(){if(process.env.CLAUDE_CODE_KEYCHAIN_PATH!==void 0||process.env.PATCHED_CLAUDE_CODE_MATERIALIZED_CREDENTIALS==="1")return;let e=_r();if(o||e)return;let n=J9(),t=n.generation;n.legacyApiKeyPrefetch="pending";let i=s(uB(zCe)).then((r)=>{if(r?.stdout)Pmn(n,!0,t);if(r)a8s(r.stdout,t,n)}),a=s(uB()).then((r)=>{if(r&&n.legacyApiKeyPrefetch==="pending")n.legacyApiKeyPrefetch=r});o=Promise.all([i,a]).then(()=>{})}async function xmn(e){if(!o)return;await(e===void 0?o:Ne(o,e))}function ijr(){let e=J9().legacyApiKeyPrefetch;return e==="pending"?null:e}function ajr(){J9().legacyApiKeyPrefetch=null}
export{rWo,jgi,Wgi,Ggi,oWo,xmn,ijr,ajr};
