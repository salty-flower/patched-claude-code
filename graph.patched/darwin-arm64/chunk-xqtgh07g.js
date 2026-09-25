// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{zs}from"./chunk-pqg61fxq.js";import{Ot}from"./chunk-s8xs8s76.js";function p(){return zs({value:"",active:!1,launchWarning:null,linkSuppliedTexts:new Set,submittedLinkPrefill:null,vimMode:"INSERT",stash:null})}var u=new Ot(()=>p());function qF(n){return u.of(n)}function M8n(n){return qF(n).getState().value}function KTe(n,e){n.setState((t)=>{if(t.value===e)return t;if(t.value!==""&&e===""){let r=t.value.trim(),o=t.launchWarning?.type==="deep-link"&&t.launchWarning.text===void 0?new Set(t.linkSuppliedTexts).add(r):t.linkSuppliedTexts;return{...t,value:e,launchWarning:null,linkSuppliedTexts:o,submittedLinkPrefill:o.has(r)?t.value:null}}return{...t,value:e}})}function N8n(n){return qF(n).getState().submittedLinkPrefill}function F8n(n,e,t){qF(n).setState((r)=>{let o=t.trim();if(o===""||r.linkSuppliedTexts.has(o)||!r.linkSuppliedTexts.has(e.trim()))return r;return{...r,linkSuppliedTexts:new Set(r.linkSuppliedTexts).add(o)}})}function $8n(n,e){n.setState((t)=>t.stash===e?t:{...t,stash:e})}function _2t(n,e){n.setState((t)=>t.active===e?t:{...t,active:e})}function $hn(n,e){_2t(qF(n),e)}function rgt(n,e){qF(n).setState((t)=>t.vimMode===e?t:{...t,vimMode:e})}function U8n(n,e){n.setState((t)=>{let r=e.type==="deep-link"?e.text?.trim():void 0,o=r===void 0||t.linkSuppliedTexts.has(r)?t.linkSuppliedTexts:new Set(t.linkSuppliedTexts).add(r),i=t.launchWarning?.type===e.type&&t.launchWarning.prefillLength===e.prefillLength?t.launchWarning:e;return i===t.launchWarning&&o===t.linkSuppliedTexts?t:{...t,launchWarning:i,linkSuppliedTexts:o}})}function B8n(n,e){U8n(qF(n),e)}
export{qF,M8n,KTe,N8n,F8n,$8n,_2t,$hn,rgt,U8n,B8n};
