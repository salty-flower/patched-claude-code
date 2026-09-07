// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Tt}from"./chunk-3whp6z2x.js";import{lo}from"./chunk-e1n9j4jc.js";import{PAt,Tme,$7,BBe,Trr}from"./chunk-mzeqwxfp.js";import{execFile as c}from"child_process";var s=1e4,_kn=250,r=null,l;function dhr(){return l===!0}function fhr(){return BBe().lastKnown}function phr(e){BBe().lastKnown=e}function a(e){return new Promise((o)=>{try{c("security",["find-generic-password","-a",$7(),"-w","-s",e],{encoding:"utf-8",timeout:s,windowsHide:!0},(t,i)=>{let n=Boolean(t&&"killed"in t&&t.killed);o(n?null:{stdout:t?null:i?.trim()||null})})}catch{o(null)}})}function bkn(){if(r||lo())return;let e=BBe(),o=e.generation;return}async function mQe(e){if(!r)return;await(e===void 0?r:Tt(r,e))}function s5t(){BBe().legacyApiKeyPrefetch=null}
export{_kn,dhr,fhr,phr,bkn,mQe,s5t};
