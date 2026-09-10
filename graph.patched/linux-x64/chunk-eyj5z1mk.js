// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{vt}from"./chunk-xg0fb0fx.js";import{fo}from"./chunk-1k8htemc.js";import{gPt,Zye,uee,qze,$gr}from"./chunk-0rxpr8cx.js";import{execFile as c}from"child_process";var s=1e4,JOn=250,r=null,l;function bxr(){return l===!0}function Sxr(){return qze().lastKnown}function wxr(e){qze().lastKnown=e}function a(e){return new Promise((o)=>{try{c("security",["find-generic-password","-a",uee(),"-w","-s",e],{encoding:"utf-8",timeout:s,windowsHide:!0},(t,i)=>{let n=Boolean(t&&"killed"in t&&t.killed);o(n?null:{stdout:t?null:i?.trim()||null})})}catch{o(null)}})}function QOn(){if(r||fo())return;let e=qze(),o=e.generation;return}async function Sot(e){if(!r)return;await(e===void 0?r:vt(r,e))}function G7t(){qze().legacyApiKeyPrefetch=null}
export{JOn,bxr,Sxr,wxr,QOn,Sot,G7t};
