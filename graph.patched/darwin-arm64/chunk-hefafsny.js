// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Et}from"./chunk-0yrss36a.js";import{fo}from"./chunk-g6gcsnnp.js";import{bY,gH,GT,s2,Shr}from"./chunk-hsr41a8w.js";import{execFile as c}from"child_process";var s=1e4,CLn=250,r=null,l;function sHr(){return l===!0}function iHr(){return s2().lastKnown}function aHr(e){s2().lastKnown=e}function a(e){return new Promise((o)=>{try{c("security",["find-generic-password","-a",GT(),"-w","-s",e],{encoding:"utf-8",timeout:s,windowsHide:!0},(t,i)=>{let n=Boolean(t&&"killed"in t&&t.killed);o(n?null:{stdout:t?null:i?.trim()||null})})}catch{o(null)}})}function TLn(){if(process.env.CLAUDE_CODE_KEYCHAIN_PATH!==void 0||process.env.PATCHED_CLAUDE_CODE_MATERIALIZED_CREDENTIALS==="1")return;if(r||fo())return;let e=s2(),o=e.generation;e.legacyApiKeyPrefetch="pending";let t=a(gH(bY)).then((n)=>{if(n)Shr(n.stdout,o,e)}),i=a(gH()).then((n)=>{if(n&&e.legacyApiKeyPrefetch==="pending")e.legacyApiKeyPrefetch=n});r=Promise.all([t,i]).then(()=>{})}async function Mot(e){if(!r)return;await(e===void 0?r:Et(r,e))}function dQt(){let e=s2().legacyApiKeyPrefetch;return e==="pending"?null:e}function pQt(){s2().legacyApiKeyPrefetch=null}
export{CLn,sHr,iHr,aHr,TLn,Mot,dQt,pQt};
