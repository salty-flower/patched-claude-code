// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Mo}from"./chunk-j6bwf1es.js";import{un}from"./chunk-fnn4jyg7.js";import{eq,ok,ME,dF,qXn}from"./chunk-z51fvft1.js";import{execFile as s}from"child_process";var l=1e4,uyn=250,r=null,c;function Tvr(){return c===!0}function Evr(e){c=e}function Cvr(){return dF().lastKnown}function Avr(e){dF().lastKnown=e}function a(e){return new Promise((o)=>{try{s("security",["find-generic-password","-a",ME(),"-w","-s",e],{encoding:"utf-8",timeout:l,windowsHide:!0},(t,i)=>{let n=Boolean(t&&"killed"in t&&t.killed);o(n?null:{stdout:t?null:i?.trim()||null})})}catch{o(null)}})}function dyn(){if(r||Mo())return;let e=dF(),o=e.generation;e.legacyApiKeyPrefetch="pending";let t=a(ok(eq)).then((n)=>{if(n)qXn(n.stdout,o,e)}),i=a(ok()).then((n)=>{if(n&&e.legacyApiKeyPrefetch==="pending")e.legacyApiKeyPrefetch=n});r=Promise.all([t,i]).then(()=>{})}async function X8e(e){if(!r)return;await(e===void 0?r:un(r,e))}function V6t(){let e=dF().legacyApiKeyPrefetch;return e==="pending"?null:e}function K6t(){dF().legacyApiKeyPrefetch=null}
export{uyn,Tvr,Evr,Cvr,Avr,dyn,X8e,V6t,K6t};
