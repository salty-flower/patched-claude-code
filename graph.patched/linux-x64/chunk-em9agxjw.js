// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Fs}from"./chunk-phgxe032.js";import{yt}from"./chunk-aywwjcwq.js";function p(){return Fs({value:"",active:!1,launchWarning:null,linkSuppliedTexts:new Set,submittedLinkPrefill:null,vimMode:"INSERT",stash:null})}var u=new yt(()=>p());function J0(n){return u.of(n)}function ATr(n){return J0(n).getState().value}function O$e(n,e){n.setState((t)=>{if(t.value===e)return t;if(t.value!==""&&e===""){let r=t.value.trim(),o=t.launchWarning?.type==="deep-link"&&t.launchWarning.text===void 0?new Set(t.linkSuppliedTexts).add(r):t.linkSuppliedTexts;return{...t,value:e,launchWarning:null,linkSuppliedTexts:o,submittedLinkPrefill:o.has(r)?t.value:null}}return{...t,value:e}})}function CTr(n){return J0(n).getState().submittedLinkPrefill}function RTr(n,e,t){J0(n).setState((r)=>{let o=t.trim();if(o===""||r.linkSuppliedTexts.has(o)||!r.linkSuppliedTexts.has(e.trim()))return r;return{...r,linkSuppliedTexts:new Set(r.linkSuppliedTexts).add(o)}})}function xTr(n,e){n.setState((t)=>t.stash===e?t:{...t,stash:e})}function Xnn(n,e){n.setState((t)=>t.active===e?t:{...t,active:e})}function h1n(n,e){Xnn(J0(n),e)}function qOt(n,e){J0(n).setState((t)=>t.vimMode===e?t:{...t,vimMode:e})}function y1n(n,e){n.setState((t)=>{let r=e.type==="deep-link"?e.text?.trim():void 0,o=r===void 0||t.linkSuppliedTexts.has(r)?t.linkSuppliedTexts:new Set(t.linkSuppliedTexts).add(r),i=t.launchWarning?.type===e.type&&t.launchWarning.prefillLength===e.prefillLength?t.launchWarning:e;return i===t.launchWarning&&o===t.linkSuppliedTexts?t:{...t,launchWarning:i,linkSuppliedTexts:o}})}function PTr(n,e){y1n(J0(n),e)}
export{J0,ATr,O$e,CTr,RTr,xTr,Xnn,h1n,qOt,y1n,PTr};
