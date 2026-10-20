// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Ne}from"./chunk-wk0rbc8w.js";import{Sr}from"./chunk-jbgr14ef.js";import{lJn,Ahe,Y2,Lbt,k3s,T3s}from"./chunk-8hpk64pd.js";import{execFile as c}from"child_process";var l=1e4,Cjo=250,o=null,u;function rgi(){return u===!0}function ogi(){return Lbt().lastKnown}function sgi(n){Lbt().lastKnown=n}function s(n){return new Promise((e)=>{try{c("security",["find-generic-password","-a",Y2(),"-w","-s",n],{encoding:"utf-8",timeout:l,windowsHide:!0},(t,i)=>{let a=Boolean(t&&"killed"in t&&t.killed);e(a?null:{stdout:t?null:i?.trim()||null})})}catch{e(null)}})}function Rjo(){let n=Sr();if(o||n)return;let e=Lbt(),t=e.generation;return}async function fmn(n){if(!o)return;await(n===void 0?o:Ne(o,n))}function $1r(){Lbt().legacyApiKeyPrefetch=null}
export{Cjo,rgi,ogi,sgi,Rjo,fmn,$1r};
