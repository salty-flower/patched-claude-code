// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Lde}from"./chunk-vd0a9d2s.js";import{Nr,nt,puo,t_r,n_r,Oqe}from"./chunk-gcyvvtkw.js";import{c}from"./chunk-tdmgys2e.js";import{Pe}from"./chunk-fsnz81vy.js";import{Fyt}from"./chunk-nwqfvmza.js";function ian(n){let e=Fyt()?t_r():void 0,t=nt();if(n(),e===void 0||nt()===t)return;return puo(e,{forContextWindow:!0}),e}function i(n,e,t){let o=import("./chunk-96w8ex6y.js").then(({refreshBootstrapData:r})=>r(n,e,{renderedClientData:t})).then(()=>{},(r)=>c(r));return Zut(o),o}function aan(n,e,t){return i(n,e,t)}function P0o(n){Nr().fetchesClientData=n}function SOr(){return Nr().fetchesClientData&&Pe()==="firstParty"}function Zut(n){let e=n_r(),t=Nr().providerCache.clientDataFetches;if(e!==void 0&&!(t.get(e)instanceof Promise)){let o=Lde();t.set(e,n),n.finally(()=>{if(t.get(e)===n)if(Lde()===o)t.set(e,"over");else t.delete(e)})}}function I0o(n){let e=Nr().providerCache.clientDataFetches;for(let[t,o]of e)if(o===n)e.set(t,"over")}function O0o(n,e){let t=n_r();if(t===void 0||!SOr()||Oqe())return;let o=Nr().providerCache.clientDataFetches.get(t);if(o!==void 0)return o==="over"?void 0:o;return i(n,e,t_r())}
export{ian,aan,P0o,SOr,Zut,I0o,O0o};
