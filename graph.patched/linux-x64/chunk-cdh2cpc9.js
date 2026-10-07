// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{qle}from"./chunk-aywwjcwq.js";import{Dr,rt,xno,qdr,Vdr,M2e}from"./chunk-m0sj7y8g.js";import{c}from"./chunk-z9b8syjk.js";import{He}from"./chunk-9dnqpecd.js";import{lmt}from"./chunk-9wqh5j7s.js";function Onn(n){let e=lmt()?qdr():void 0,t=rt();if(n(),e===void 0||rt()===t)return;return xno(e,{forContextWindow:!0}),e}function i(n,e,t){let o=import("./chunk-mqrx5vjh.js").then(({refreshBootstrapData:r})=>r(n,e,{renderedClientData:t})).then(()=>{},(r)=>c(r));return Llt(o),o}function Mnn(n,e,t){return i(n,e,t)}function qko(n){Dr().fetchesClientData=n}function Zkr(){return Dr().fetchesClientData&&He()==="firstParty"}function Llt(n){let e=Vdr(),t=Dr().providerCache.clientDataFetches;if(e!==void 0&&!(t.get(e)instanceof Promise)){let o=qle();t.set(e,n),n.finally(()=>{if(t.get(e)===n)if(qle()===o)t.set(e,"over");else t.delete(e)})}}function Vko(n){let e=Dr().providerCache.clientDataFetches;for(let[t,o]of e)if(o===n)e.set(t,"over")}function Kko(n,e){let t=Vdr();if(t===void 0||!Zkr()||M2e())return;let o=Dr().providerCache.clientDataFetches.get(t);if(o!==void 0)return o==="over"?void 0:o;return i(n,e,qdr())}
export{Onn,Mnn,qko,Zkr,Llt,Vko,Kko};
