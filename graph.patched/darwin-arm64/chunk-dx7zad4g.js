// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{Pe}from"./chunk-3kevgx4j.js";import{Sr}from"./chunk-21mz1tvc.js";import{zRe,Jj,bI,Qj,lli,Pwn}from"./chunk-tvhr9rka.js";import{execFile as c}from"child_process";var l=1e4,B8o=250,o=null,u;function vIi(){return u===!0}function kIi(){return Qj().lastKnown}function CIi(e){Qj().lastKnown=e}function s(e){return new Promise((n)=>{try{c("security",["find-generic-password","-a",bI(),"-w","-s",e],{encoding:"utf-8",timeout:l,windowsHide:!0},(t,i)=>{let a=Boolean(t&&"killed"in t&&t.killed);n(a?null:{stdout:t?null:i?.trim()||null})})}catch{n(null)}})}function j8o(){if(process.env.CLAUDE_CODE_KEYCHAIN_PATH!==void 0||process.env.PATCHED_CLAUDE_CODE_MATERIALIZED_CREDENTIALS==="1")return;let e=Sr();if(o||e)return;let n=Qj(),t=n.generation;n.legacyApiKeyPrefetch="pending";let i=s(Jj(zRe)).then((r)=>{if(r?.stdout)Pwn(n,!0,t);if(r)lli(r.stdout,t,n)}),a=s(Jj()).then((r)=>{if(r&&n.legacyApiKeyPrefetch==="pending")n.legacyApiKeyPrefetch=r});o=Promise.all([i,a]).then(()=>{})}async function xwn(e){if(!o)return;await(e===void 0?o:Pe(o,e))}function G4r(){let e=Qj().legacyApiKeyPrefetch;return e==="pending"?null:e}function z4r(){Qj().legacyApiKeyPrefetch=null}
export{B8o,vIi,kIi,CIi,j8o,xwn,G4r,z4r};
