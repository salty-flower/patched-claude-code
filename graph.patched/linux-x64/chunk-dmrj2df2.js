// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{jt}from"./chunk-rv2kd9jf.js";import{vo}from"./chunk-sgsf5yd5.js";import{RHt,Tfe,OJ,$Ae,qrr}from"./chunk-9qzqdgp0.js";import{execFile as s}from"child_process";var l=1e4,Own=250,r=null,c;function jCr(){return c===!0}function zCr(e){c=e}function GCr(){return $Ae().lastKnown}function WCr(e){$Ae().lastKnown=e}function a(e){return new Promise((o)=>{try{s("security",["find-generic-password","-a",OJ(),"-w","-s",e],{encoding:"utf-8",timeout:l,windowsHide:!0},(t,i)=>{let n=Boolean(t&&"killed"in t&&t.killed);o(n?null:{stdout:t?null:i?.trim()||null})})}catch{o(null)}})}function Nwn(){if(r||vo())return;let e=$Ae(),o=e.generation;return}async function uXe(e){if(!r)return;await(e===void 0?r:jt(r,e))}function VCr(){let e=$Ae().legacyApiKeyPrefetch;return e==="pending"?null:e}function lKt(){$Ae().legacyApiKeyPrefetch=null}
export{Own,jCr,zCr,GCr,WCr,Nwn,uXe,VCr,lKt};
