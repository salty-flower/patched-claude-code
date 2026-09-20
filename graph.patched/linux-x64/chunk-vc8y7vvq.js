// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{mt}from"./chunk-d3xvzk7s.js";import{_o}from"./chunk-k4wnp212.js";import{p2t,Xke,yW,M5e,N1r}from"./chunk-scqpsn3c.js";import{execFile as c}from"child_process";var s=1e4,w9n=250,r=null,l;function V8r(){return l===!0}function K8r(){return M5e().lastKnown}function Y8r(e){M5e().lastKnown=e}function a(e){return new Promise((o)=>{try{c("security",["find-generic-password","-a",yW(),"-w","-s",e],{encoding:"utf-8",timeout:s,windowsHide:!0},(t,i)=>{let n=Boolean(t&&"killed"in t&&t.killed);o(n?null:{stdout:t?null:i?.trim()||null})})}catch{o(null)}})}function v9n(){if(r||_o())return;let e=M5e(),o=e.generation;return}async function Pgt(e){if(!r)return;await(e===void 0?r:mt(r,e))}function Qmn(){M5e().legacyApiKeyPrefetch=null}
export{w9n,V8r,K8r,Y8r,v9n,Pgt,Qmn};
