// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Rt}from"./chunk-r5q3158s.js";import{lo}from"./chunk-4rr1ghkj.js";import{t5,fx,NC,lU,Vor}from"./chunk-ghd3nyd4.js";import{execFile as c}from"child_process";var s=1e4,PRn=250,r=null,l;function r_r(){return l===!0}function o_r(){return lU().lastKnown}function s_r(e){lU().lastKnown=e}function a(e){return new Promise((o)=>{try{c("security",["find-generic-password","-a",NC(),"-w","-s",e],{encoding:"utf-8",timeout:s,windowsHide:!0},(t,i)=>{let n=Boolean(t&&"killed"in t&&t.killed);o(n?null:{stdout:t?null:i?.trim()||null})})}catch{o(null)}})}function ORn(){if(process.env.CLAUDE_CODE_KEYCHAIN_PATH!==void 0||process.env.PATCHED_CLAUDE_CODE_MATERIALIZED_CREDENTIALS==="1")return;if(r||lo())return;let e=lU(),o=e.generation;e.legacyApiKeyPrefetch="pending";let t=a(fx(t5)).then((n)=>{if(n)Vor(n.stdout,o,e)}),i=a(fx()).then((n)=>{if(n&&e.legacyApiKeyPrefetch==="pending")e.legacyApiKeyPrefetch=n});r=Promise.all([t,i]).then(()=>{})}async function qQe(e){if(!r)return;await(e===void 0?r:Rt(r,e))}function UVt(){let e=lU().legacyApiKeyPrefetch;return e==="pending"?null:e}function BVt(){lU().legacyApiKeyPrefetch=null}
export{PRn,r_r,o_r,s_r,ORn,qQe,UVt,BVt};
