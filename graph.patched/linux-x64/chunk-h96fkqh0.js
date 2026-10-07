// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Qe}from"./chunk-0mwsqxme.js";import{kr}from"./chunk-bpkzpttw.js";import{zMn,Vae,lj,Xrt,gls,hls}from"./chunk-6ntgn93k.js";import{execFile as c}from"child_process";var l=1e4,Pio=250,o=null,u;function JAs(){return u===!0}function QAs(){return Xrt().lastKnown}function ZAs(n){Xrt().lastKnown=n}function s(n){return new Promise((e)=>{try{c("security",["find-generic-password","-a",lj(),"-w","-s",n],{encoding:"utf-8",timeout:l,windowsHide:!0},(t,i)=>{let a=Boolean(t&&"killed"in t&&t.killed);e(a?null:{stdout:t?null:i?.trim()||null})})}catch{e(null)}})}function Iio(){let n=kr();if(o||n)return;let e=Xrt(),t=e.generation;return}async function G5t(n){if(!o)return;await(n===void 0?o:Qe(o,n))}function Bpr(){Xrt().legacyApiKeyPrefetch=null}
export{Pio,JAs,QAs,ZAs,Iio,G5t,Bpr};
