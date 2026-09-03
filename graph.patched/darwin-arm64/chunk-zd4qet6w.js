// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{Nt}from"./chunk-gh3qnpny.js";import{fo}from"./chunk-2cgtbdj1.js";import{g5,Ix,yv,UU,Car}from"./chunk-msx8gtcp.js";import{execFile as s}from"child_process";var l=1e4,ERn=250,r=null,c;function CIr(){return c===!0}function vIr(e){c=e}function RIr(){return UU().lastKnown}function kIr(e){UU().lastKnown=e}function a(e){return new Promise((o)=>{try{s("security",["find-generic-password","-a",yv(),"-w","-s",e],{encoding:"utf-8",timeout:l,windowsHide:!0},(t,i)=>{let n=Boolean(t&&"killed"in t&&t.killed);o(n?null:{stdout:t?null:i?.trim()||null})})}catch{o(null)}})}function ARn(){if(process.env.CLAUDE_CODE_KEYCHAIN_PATH!==void 0||process.env.PATCHED_CLAUDE_CODE_MATERIALIZED_CREDENTIALS==="1")return;if(r||fo())return;let e=UU(),o=e.generation;e.legacyApiKeyPrefetch="pending";let t=a(Ix(g5)).then((n)=>{if(n)Car(n.stdout,o,e)}),i=a(Ix()).then((n)=>{if(n&&e.legacyApiKeyPrefetch==="pending")e.legacyApiKeyPrefetch=n});r=Promise.all([t,i]).then(()=>{})}async function QQe(e){if(!r)return;await(e===void 0?r:Nt(r,e))}function rKt(){let e=UU().legacyApiKeyPrefetch;return e==="pending"?null:e}function oKt(){UU().legacyApiKeyPrefetch=null}
export{ERn,CIr,vIr,RIr,kIr,ARn,QQe,rKt,oKt};
