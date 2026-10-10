// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Qpe}from"./chunk-4bw62nzm.js";import{tt,dSo,ien,fkr,J4e}from"./chunk-bk5ct2gw.js";import{c}from"./chunk-gsnbskq4.js";import{Dr,Ie}from"./chunk-kvz2ymff.js";import{Owt}from"./chunk-sfn1dbxq.js";function Npn(n){let e=Owt()?ien():void 0,t=tt();if(n(),e===void 0||tt()===t)return;return dSo(e,{forContextWindow:!0}),e}function i(n,e,t){let o=import("./chunk-p0bvqrc5.js").then(({refreshBootstrapData:r})=>r(n,e,{renderedClientData:t})).then(()=>{},(r)=>c(r));return Kgt(o),o}function Fpn(n,e,t){return i(n,e,t)}function L1o(n){Dr().fetchesClientData=n}function wFr(){return Dr().fetchesClientData&&Ie()==="firstParty"}function Kgt(n){let e=fkr(),t=Dr().providerCache.clientDataFetches;if(e!==void 0&&!(t.get(e)instanceof Promise)){let o=Qpe();t.set(e,n),n.finally(()=>{if(t.get(e)===n)if(Qpe()===o)t.set(e,"over");else t.delete(e)})}}function N1o(n){let e=Dr().providerCache.clientDataFetches;for(let[t,o]of e)if(o===n)e.set(t,"over")}function F1o(n,e){let t=fkr();if(t===void 0||!wFr()||J4e())return;let o=Dr().providerCache.clientDataFetches.get(t);if(o!==void 0)return o==="over"?void 0:o;return i(n,e,ien())}
export{Npn,Fpn,L1o,wFr,Kgt,N1o,F1o};
