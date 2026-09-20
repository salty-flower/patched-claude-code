// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{mt}from"./chunk-q2h0fawe.js";import{_o}from"./chunk-jxdnn2j1.js";import{ZQ,xP,XE,CW,wUr}from"./chunk-4hvxqv7y.js";import{execFile as c}from"child_process";var s=1e4,Y8n=250,r=null,l;function P8r(){return l===!0}function I8r(){return CW().lastKnown}function O8r(e){CW().lastKnown=e}function a(e){return new Promise((o)=>{try{c("security",["find-generic-password","-a",XE(),"-w","-s",e],{encoding:"utf-8",timeout:s,windowsHide:!0},(t,i)=>{let n=Boolean(t&&"killed"in t&&t.killed);o(n?null:{stdout:t?null:i?.trim()||null})})}catch{o(null)}})}function X8n(){if(process.env.CLAUDE_CODE_KEYCHAIN_PATH!==void 0||process.env.PATCHED_CLAUDE_CODE_MATERIALIZED_CREDENTIALS==="1")return;if(r||_o())return;let e=CW(),o=e.generation;e.legacyApiKeyPrefetch="pending";let t=a(xP(ZQ)).then((n)=>{if(n)wUr(n.stdout,o,e)}),i=a(xP()).then((n)=>{if(n&&e.legacyApiKeyPrefetch==="pending")e.legacyApiKeyPrefetch=n});r=Promise.all([t,i]).then(()=>{})}async function Vgt(e){if(!r)return;await(e===void 0?r:mt(r,e))}function _gn(){let e=CW().legacyApiKeyPrefetch;return e==="pending"?null:e}function Sgn(){CW().legacyApiKeyPrefetch=null}
export{Y8n,P8r,I8r,O8r,X8n,Vgt,_gn,Sgn};
