// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Xe}from"./chunk-670y7hd9.js";import{br}from"./chunk-4z5wz91m.js";import{s$n,Oce,fW,lat,Yys,Xys}from"./chunk-8x6enyhq.js";import{execFile as c}from"child_process";var l=1e4,Mmo=250,o=null,u;function rLs(){return u===!0}function oLs(){return lat().lastKnown}function sLs(n){lat().lastKnown=n}function s(n){return new Promise((e)=>{try{c("security",["find-generic-password","-a",fW(),"-w","-s",n],{encoding:"utf-8",timeout:l,windowsHide:!0},(t,i)=>{let a=Boolean(t&&"killed"in t&&t.killed);e(a?null:{stdout:t?null:i?.trim()||null})})}catch{e(null)}})}function Hmo(){let n=br();if(o||n)return;let e=lat(),t=e.generation;return}async function qJt(n){if(!o)return;await(n===void 0?o:Xe(o,n))}function Cbr(){lat().legacyApiKeyPrefetch=null}
export{Mmo,rLs,oLs,sLs,Hmo,qJt,Cbr};
