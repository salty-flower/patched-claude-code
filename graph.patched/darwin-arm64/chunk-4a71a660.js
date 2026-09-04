// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{Nt}from"./chunk-p3vjhzt0.js";import{_o}from"./chunk-ty218y69.js";import{V5,Gx,Hv,iB,ndr}from"./chunk-3qezkvja.js";import{execFile as s}from"child_process";var l=1e4,AHn=250,r=null,c;function bLr(){return c===!0}function wLr(e){c=e}function TLr(){return iB().lastKnown}function ELr(e){iB().lastKnown=e}function a(e){return new Promise((o)=>{try{s("security",["find-generic-password","-a",Hv(),"-w","-s",e],{encoding:"utf-8",timeout:l,windowsHide:!0},(t,i)=>{let n=Boolean(t&&"killed"in t&&t.killed);o(n?null:{stdout:t?null:i?.trim()||null})})}catch{o(null)}})}function CHn(){if(process.env.CLAUDE_CODE_KEYCHAIN_PATH!==void 0||process.env.PATCHED_CLAUDE_CODE_MATERIALIZED_CREDENTIALS==="1")return;if(r||_o())return;let e=iB(),o=e.generation;e.legacyApiKeyPrefetch="pending";let t=a(Gx(V5)).then((n)=>{if(n)ndr(n.stdout,o,e)}),i=a(Gx()).then((n)=>{if(n&&e.legacyApiKeyPrefetch==="pending")e.legacyApiKeyPrefetch=n});r=Promise.all([t,i]).then(()=>{})}async function xet(e){if(!r)return;await(e===void 0?r:Nt(r,e))}function _8t(){let e=iB().legacyApiKeyPrefetch;return e==="pending"?null:e}function y8t(){iB().legacyApiKeyPrefetch=null}
export{AHn,bLr,wLr,TLr,ELr,CHn,xet,_8t,y8t};
