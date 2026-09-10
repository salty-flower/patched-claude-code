// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{vt}from"./chunk-awrvr02y.js";import{oo}from"./chunk-3kadfzjs.js";import{eY,Jx,HT,LB,zpr}from"./chunk-23qdenmd.js";import{execFile as c}from"child_process";var s=1e4,jPn=250,r=null,l;function Gvr(){return l===!0}function Vvr(){return LB().lastKnown}function qvr(e){LB().lastKnown=e}function a(e){return new Promise((o)=>{try{c("security",["find-generic-password","-a",HT(),"-w","-s",e],{encoding:"utf-8",timeout:s,windowsHide:!0},(t,i)=>{let n=Boolean(t&&"killed"in t&&t.killed);o(n?null:{stdout:t?null:i?.trim()||null})})}catch{o(null)}})}function WPn(){if(process.env.CLAUDE_CODE_KEYCHAIN_PATH!==void 0||process.env.PATCHED_CLAUDE_CODE_MATERIALIZED_CREDENTIALS==="1")return;if(r||oo())return;let e=LB(),o=e.generation;e.legacyApiKeyPrefetch="pending";let t=a(Jx(eY)).then((n)=>{if(n)zpr(n.stdout,o,e)}),i=a(Jx()).then((n)=>{if(n&&e.legacyApiKeyPrefetch==="pending")e.legacyApiKeyPrefetch=n});r=Promise.all([t,i]).then(()=>{})}async function Jnt(e){if(!r)return;await(e===void 0?r:vt(r,e))}function cXt(){let e=LB().legacyApiKeyPrefetch;return e==="pending"?null:e}function uXt(){LB().legacyApiKeyPrefetch=null}
export{jPn,Gvr,Vvr,qvr,WPn,Jnt,cXt,uXt};
