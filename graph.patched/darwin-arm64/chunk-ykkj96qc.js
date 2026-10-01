// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{it}from"./chunk-jm8r4kd0.js";import{fo}from"./chunk-h1eby6n2.js";import{Zde,wN,BT,W6,BBo,eBt}from"./chunk-8h01acb1.js";import{execFile as c}from"child_process";var l=1e4,FWr=250,o=null,u;function cQo(){return u===!0}function dQo(){return W6().lastKnown}function uQo(e){W6().lastKnown=e}function s(e){return new Promise((n)=>{try{c("security",["find-generic-password","-a",BT(),"-w","-s",e],{encoding:"utf-8",timeout:l,windowsHide:!0},(t,i)=>{let a=Boolean(t&&"killed"in t&&t.killed);n(a?null:{stdout:t?null:i?.trim()||null})})}catch{n(null)}})}function $Wr(){if(process.env.CLAUDE_CODE_KEYCHAIN_PATH!==void 0||process.env.PATCHED_CLAUDE_CODE_MATERIALIZED_CREDENTIALS==="1")return;let e=fo();if(o||e)return;let n=W6(),t=n.generation;n.legacyApiKeyPrefetch="pending";let i=s(wN(Zde)).then((r)=>{if(r?.stdout)eBt(n,!0,t);if(r)BBo(r.stdout,t,n)}),a=s(wN()).then((r)=>{if(r&&n.legacyApiKeyPrefetch==="pending")n.legacyApiKeyPrefetch=r});o=Promise.all([i,a]).then(()=>{})}async function ZUt(e){if(!o)return;await(e===void 0?o:it(o,e))}function e8n(){let e=W6().legacyApiKeyPrefetch;return e==="pending"?null:e}function t8n(){W6().legacyApiKeyPrefetch=null}
export{FWr,cQo,dQo,uQo,$Wr,ZUt,e8n,t8n};
