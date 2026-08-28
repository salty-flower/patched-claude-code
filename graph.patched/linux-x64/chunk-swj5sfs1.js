// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{$o}from"./chunk-xj8gnzar.js";import{un}from"./chunk-m09j9ze8.js";import{Cyt,Kce,yY,$Se,oXn}from"./chunk-q7r209hm.js";import{execFile as s}from"child_process";var l=1e4,Cgn=250,r=null,c;function cSr(){return c===!0}function uSr(e){c=e}function dSr(){return $Se().lastKnown}function pSr(e){$Se().lastKnown=e}function a(e){return new Promise((o)=>{try{s("security",["find-generic-password","-a",yY(),"-w","-s",e],{encoding:"utf-8",timeout:l,windowsHide:!0},(t,i)=>{let n=Boolean(t&&"killed"in t&&t.killed);o(n?null:{stdout:t?null:i?.trim()||null})})}catch{o(null)}})}function xgn(){if(r||$o())return;let e=$Se(),o=e.generation;return}async function N8e(e){if(!r)return;await(e===void 0?r:un(r,e))}function fSr(){let e=$Se().legacyApiKeyPrefetch;return e==="pending"?null:e}function Ojt(){$Se().legacyApiKeyPrefetch=null}
export{Cgn,cSr,uSr,dSr,pSr,xgn,N8e,fSr,Ojt};
