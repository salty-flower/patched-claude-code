// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Xe}from"./chunk-k2e8p61g.js";import{yr}from"./chunk-ce4b81xm.js";import{A_e,FF,FT,PK,$Ss,mQt}from"./chunk-ayvdek13.js";import{execFile as c}from"child_process";var l=1e4,uyo=250,o=null,u;function WLs(){return u===!0}function GLs(){return PK().lastKnown}function zLs(e){PK().lastKnown=e}function s(e){return new Promise((n)=>{try{c("security",["find-generic-password","-a",FT(),"-w","-s",e],{encoding:"utf-8",timeout:l,windowsHide:!0},(t,i)=>{let a=Boolean(t&&"killed"in t&&t.killed);n(a?null:{stdout:t?null:i?.trim()||null})})}catch{n(null)}})}function pyo(){if(process.env.CLAUDE_CODE_KEYCHAIN_PATH!==void 0||process.env.PATCHED_CLAUDE_CODE_MATERIALIZED_CREDENTIALS==="1")return;let e=yr();if(o||e)return;let n=PK(),t=n.generation;n.legacyApiKeyPrefetch="pending";let i=s(FF(A_e)).then((r)=>{if(r?.stdout)mQt(n,!0,t);if(r)$Ss(r.stdout,t,n)}),a=s(FF()).then((r)=>{if(r&&n.legacyApiKeyPrefetch==="pending")n.legacyApiKeyPrefetch=r});o=Promise.all([i,a]).then(()=>{})}async function fQt(e){if(!o)return;await(e===void 0?o:Xe(o,e))}function dwr(){let e=PK().legacyApiKeyPrefetch;return e==="pending"?null:e}function uwr(){PK().legacyApiKeyPrefetch=null}
export{uyo,WLs,GLs,zLs,pyo,fQt,dwr,uwr};
