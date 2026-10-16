// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Be}from"./chunk-54xe5s81.js";import{gr}from"./chunk-6dw7xt0q.js";import{Tke,v1,$x,n9,Q2s,fcn}from"./chunk-n98x2tj8.js";import{execFile as c}from"child_process";var l=1e4,LDo=250,o=null,u;function Loi(){return u===!0}function Noi(){return n9().lastKnown}function Foi(e){n9().lastKnown=e}function s(e){return new Promise((n)=>{try{c("security",["find-generic-password","-a",$x(),"-w","-s",e],{encoding:"utf-8",timeout:l,windowsHide:!0},(t,i)=>{let a=Boolean(t&&"killed"in t&&t.killed);n(a?null:{stdout:t?null:i?.trim()||null})})}catch{n(null)}})}function NDo(){if(process.env.CLAUDE_CODE_KEYCHAIN_PATH!==void 0||process.env.PATCHED_CLAUDE_CODE_MATERIALIZED_CREDENTIALS==="1")return;let e=gr();if(o||e)return;let n=n9(),t=n.generation;n.legacyApiKeyPrefetch="pending";let i=s(v1(Tke)).then((r)=>{if(r?.stdout)fcn(n,!0,t);if(r)Q2s(r.stdout,t,n)}),a=s(v1()).then((r)=>{if(r&&n.legacyApiKeyPrefetch==="pending")n.legacyApiKeyPrefetch=r});o=Promise.all([i,a]).then(()=>{})}async function pcn(e){if(!o)return;await(e===void 0?o:Be(o,e))}function KLr(){let e=n9().legacyApiKeyPrefetch;return e==="pending"?null:e}function YLr(){n9().legacyApiKeyPrefetch=null}
export{LDo,Loi,Noi,Foi,NDo,pcn,KLr,YLr};
