// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Pde}from"./chunk-g79wjybr.js";import{Nr,tt,$do,Hyr,Dyr,TKe}from"./chunk-cxjvwxsa.js";import{c}from"./chunk-3s94kw4m.js";import{Pe}from"./chunk-942093b7.js";import{Cyt}from"./chunk-g263vvvn.js";function Xin(n){let e=Cyt()?Hyr():void 0,t=tt();if(n(),e===void 0||tt()===t)return;return $do(e,{forContextWindow:!0}),e}function i(n,e,t){let o=import("./chunk-1ct70zd9.js").then(({refreshBootstrapData:r})=>r(n,e,{renderedClientData:t})).then(()=>{},(r)=>c(r));return Xut(o),o}function Jin(n,e,t){return i(n,e,t)}function cMo(n){Nr().fetchesClientData=n}function pOr(){return Nr().fetchesClientData&&Pe()==="firstParty"}function Xut(n){let e=Dyr(),t=Nr().providerCache.clientDataFetches;if(e!==void 0&&!(t.get(e)instanceof Promise)){let o=Pde();t.set(e,n),n.finally(()=>{if(t.get(e)===n)if(Pde()===o)t.set(e,"over");else t.delete(e)})}}function dMo(n){let e=Nr().providerCache.clientDataFetches;for(let[t,o]of e)if(o===n)e.set(t,"over")}function uMo(n,e){let t=Dyr();if(t===void 0||!pOr()||TKe())return;let o=Nr().providerCache.clientDataFetches.get(t);if(o!==void 0)return o==="over"?void 0:o;return i(n,e,Hyr())}
export{Xin,Jin,cMo,pOr,Xut,dMo,uMo};
