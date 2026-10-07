// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Qe}from"./chunk-ws170zqm.js";import{vr}from"./chunk-xbg4a11x.js";import{Hhe,VN,iT,Eq,ads,fYt}from"./chunk-3c5rpefa.js";import{execFile as c}from"child_process";var l=1e4,dco=250,o=null,u;function NTs(){return u===!0}function FTs(){return Eq().lastKnown}function $Ts(e){Eq().lastKnown=e}function s(e){return new Promise((n)=>{try{c("security",["find-generic-password","-a",iT(),"-w","-s",e],{encoding:"utf-8",timeout:l,windowsHide:!0},(t,i)=>{let a=Boolean(t&&"killed"in t&&t.killed);n(a?null:{stdout:t?null:i?.trim()||null})})}catch{n(null)}})}function uco(){if(process.env.CLAUDE_CODE_KEYCHAIN_PATH!==void 0||process.env.PATCHED_CLAUDE_CODE_MATERIALIZED_CREDENTIALS==="1")return;let e=vr();if(o||e)return;let n=Eq(),t=n.generation;n.legacyApiKeyPrefetch="pending";let i=s(VN(Hhe)).then((r)=>{if(r?.stdout)fYt(n,!0,t);if(r)ads(r.stdout,t,n)}),a=s(VN()).then((r)=>{if(r&&n.legacyApiKeyPrefetch==="pending")n.legacyApiKeyPrefetch=r});o=Promise.all([i,a]).then(()=>{})}async function pYt(e){if(!o)return;await(e===void 0?o:Qe(o,e))}function kmr(){let e=Eq().legacyApiKeyPrefetch;return e==="pending"?null:e}function Amr(){Eq().legacyApiKeyPrefetch=null}
export{dco,NTs,FTs,$Ts,uco,pYt,kmr,Amr};
