// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Nhe}from"./chunk-xzypj06m.js";import{et,V0o,Lln,EDr,a7e}from"./chunk-1901fdh6.js";import{l}from"./chunk-e666gr8q.js";import{Wr,Pe}from"./chunk-nvk7bh0e.js";import{PRt}from"./chunk-996thspe.js";function Kwn(n){let e=PRt()?Lln():void 0,t=et();if(n(),e===void 0||et()===t)return;return V0o(e,{forContextWindow:!0}),e}function i(n,e,t){let o=import("./chunk-gz5emtq3.js").then(({refreshBootstrapData:r})=>r(n,e,{renderedClientData:t})).then(()=>{},(r)=>l(r));return UEt(o),o}function Ywn(n,e,t){return i(n,e,t)}function q8o(n){Wr().fetchesClientData=n}function tKr(){return Wr().fetchesClientData&&Pe()==="firstParty"}function UEt(n){let e=EDr(),t=Wr().providerCache.clientDataFetches;if(e!==void 0&&!(t.get(e)instanceof Promise)){let o=Nhe();t.set(e,n),n.finally(()=>{if(t.get(e)===n)if(Nhe()===o)t.set(e,"over");else t.delete(e)})}}function K8o(n){let e=Wr().providerCache.clientDataFetches;for(let[t,o]of e)if(o===n)e.set(t,"over")}function Y8o(n,e){let t=EDr();if(t===void 0||!tKr()||a7e())return;let o=Wr().providerCache.clientDataFetches.get(t);if(o!==void 0)return o==="over"?void 0:o;return i(n,e,Lln())}
export{Kwn,Ywn,q8o,tKr,UEt,K8o,Y8o};
