// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{he}from"./chunk-3rgses43.js";import{rr}from"./chunk-fn5hkvxe.js";import{J3r,W0e,L7,ZTe,j0a,W0a}from"./chunk-mqtj3p5g.js";import{execFile as l}from"child_process";var u=1e4,Vti=250,p=[44,36],i=null,f;function nJa(){return f===!0}function rJa(){return ZTe().lastKnown}function oJa(e){ZTe().lastKnown=e}function s(e,n=!1){return new Promise((o)=>{try{l("security",["find-generic-password","-a",L7(),"-w","-s",e],{encoding:"utf-8",timeout:u,windowsHide:!0},(t,a)=>{let r=Boolean(t&&"killed"in t&&t.killed),c=!n||!t||p.includes(t.code);o(r||!c?null:{stdout:t?null:a?.trim()||null})})}catch{o(null)}})}function qti(){let e=rr();if(i||e)return;let n=ZTe(),o=n.generation;return}async function UJn(e){if(!i)return;await(e===void 0?i:he(i,e))}function Dzo(){ZTe().legacyApiKeyPrefetch=null}
export{Vti,nJa,rJa,oJa,qti,UJn,Dzo};
