// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{rt}from"./chunk-zr6jq9j9.js";import{uo}from"./chunk-4cwgnmh9.js";import{Sae,CL,FA,cz,TAo,iLt}from"./chunk-eh0c72zp.js";import{execFile as c}from"child_process";var s=1e4,CHr=250,o=null,u;function k1o(){return u===!0}function T1o(){return cz().lastKnown}function R1o(e){cz().lastKnown=e}function a(e){return new Promise((r)=>{try{c("security",["find-generic-password","-a",FA(),"-w","-s",e],{encoding:"utf-8",timeout:s,windowsHide:!0},(t,i)=>{let n=Boolean(t&&"killed"in t&&t.killed);r(n?null:{stdout:t?null:i?.trim()||null})})}catch{r(null)}})}function AHr(){if(process.env.CLAUDE_CODE_KEYCHAIN_PATH!==void 0||process.env.PATCHED_CLAUDE_CODE_MATERIALIZED_CREDENTIALS==="1")return;if(o||uo())return;let e=cz(),r=e.generation;e.legacyApiKeyPrefetch="pending";let t=a(CL(Sae)).then((n)=>{if(n?.stdout)iLt(e,!0,r);if(n)TAo(n.stdout,r,e)}),i=a(CL()).then((n)=>{if(n&&e.legacyApiKeyPrefetch==="pending")e.legacyApiKeyPrefetch=n});o=Promise.all([t,i]).then(()=>{})}async function sLt(e){if(!o)return;await(e===void 0?o:rt(o,e))}function pWn(){let e=cz().legacyApiKeyPrefetch;return e==="pending"?null:e}function fWn(){cz().legacyApiKeyPrefetch=null}
export{CHr,k1o,T1o,R1o,AHr,sLt,pWn,fWn};
