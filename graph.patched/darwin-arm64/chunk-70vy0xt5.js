// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{jt}from"./chunk-tey8avmn.js";import{Co}from"./chunk-4j4893mq.js";import{s5,a0,xC,B$,$or}from"./chunk-p0zc8jmz.js";import{execFile as s}from"child_process";var l=1e4,PEn=250,r=null,c;function n0r(){return c===!0}function r0r(e){c=e}function o0r(){return B$().lastKnown}function i0r(e){B$().lastKnown=e}function a(e){return new Promise((o)=>{try{s("security",["find-generic-password","-a",xC(),"-w","-s",e],{encoding:"utf-8",timeout:l,windowsHide:!0},(t,i)=>{let n=Boolean(t&&"killed"in t&&t.killed);o(n?null:{stdout:t?null:i?.trim()||null})})}catch{o(null)}})}function DEn(){if(process.env.CLAUDE_CODE_KEYCHAIN_PATH!==void 0||process.env.PATCHED_CLAUDE_CODE_MATERIALIZED_CREDENTIALS==="1")return;if(r||Co())return;let e=B$(),o=e.generation;e.legacyApiKeyPrefetch="pending";let t=a(a0(s5)).then((n)=>{if(n)$or(n.stdout,o,e)}),i=a(a0()).then((n)=>{if(n&&e.legacyApiKeyPrefetch==="pending")e.legacyApiKeyPrefetch=n});r=Promise.all([t,i]).then(()=>{})}async function CXe(e){if(!r)return;await(e===void 0?r:jt(r,e))}function Tqt(){let e=B$().legacyApiKeyPrefetch;return e==="pending"?null:e}function Eqt(){B$().legacyApiKeyPrefetch=null}
export{PEn,n0r,r0r,o0r,i0r,DEn,CXe,Tqt,Eqt};
