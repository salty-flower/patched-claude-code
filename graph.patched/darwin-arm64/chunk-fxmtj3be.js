// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Qle}from"./chunk-8mvda08c.js";import{Dr,rt,rro,fur,mur,U6e}from"./chunk-s46qgfx7.js";import{c}from"./chunk-qfs4y3ww.js";import{Me}from"./chunk-sac2pmqn.js";import{Smt}from"./chunk-y0b3kvx1.js";function Jnn(n){let e=Smt()?fur():void 0,t=rt();if(n(),e===void 0||rt()===t)return;return rro(e,{forContextWindow:!0}),e}function i(n,e,t){let o=import("./chunk-r4edq1fw.js").then(({refreshBootstrapData:r})=>r(n,e,{renderedClientData:t})).then(()=>{},(r)=>c(r));return Wlt(o),o}function Qnn(n,e,t){return i(n,e,t)}function Tko(n){Dr().fetchesClientData=n}function Pkr(){return Dr().fetchesClientData&&Me()==="firstParty"}function Wlt(n){let e=mur(),t=Dr().providerCache.clientDataFetches;if(e!==void 0&&!(t.get(e)instanceof Promise)){let o=Qle();t.set(e,n),n.finally(()=>{if(t.get(e)===n)if(Qle()===o)t.set(e,"over");else t.delete(e)})}}function Rko(n){let e=Dr().providerCache.clientDataFetches;for(let[t,o]of e)if(o===n)e.set(t,"over")}function xko(n,e){let t=mur();if(t===void 0||!Pkr()||U6e())return;let o=Dr().providerCache.clientDataFetches.get(t);if(o!==void 0)return o==="over"?void 0:o;return i(n,e,fur())}
export{Jnn,Qnn,Tko,Pkr,Wlt,Rko,xko};
