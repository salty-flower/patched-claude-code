// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Be}from"./chunk-r2xfgg0x.js";import{br}from"./chunk-c61xdsy8.js";import{i5n,fge,a2,Jht,gzs,hzs}from"./chunk-4zax65nq.js";import{execFile as c}from"child_process";var l=1e4,i0o=250,o=null,u;function Jri(){return u===!0}function Qri(){return Jht().lastKnown}function Zri(n){Jht().lastKnown=n}function s(n){return new Promise((e)=>{try{c("security",["find-generic-password","-a",a2(),"-w","-s",n],{encoding:"utf-8",timeout:l,windowsHide:!0},(t,i)=>{let a=Boolean(t&&"killed"in t&&t.killed);e(a?null:{stdout:t?null:i?.trim()||null})})}catch{e(null)}})}function a0o(){let n=br();if(o||n)return;let e=Jht(),t=e.generation;return}async function Xdn(n){if(!o)return;await(n===void 0?o:Be(o,n))}function ALr(){Jht().legacyApiKeyPrefetch=null}
export{i0o,Jri,Qri,Zri,a0o,Xdn,ALr};
