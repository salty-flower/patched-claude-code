// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Ohe}from"./chunk-eqmywwjn.js";import{et,yMo,Sln,e0r,eJe}from"./chunk-k16gymf7.js";import{l}from"./chunk-9pt2nr7j.js";import{Wr,xe}from"./chunk-kmgwwaz2.js";import{bRt}from"./chunk-38nf1dnm.js";function Iwn(n){let e=bRt()?Sln():void 0,t=et();if(n(),e===void 0||et()===t)return;return yMo(e,{forContextWindow:!0}),e}function i(n,e,t){let o=import("./chunk-zmm63x03.js").then(({refreshBootstrapData:r})=>r(n,e,{renderedClientData:t})).then(()=>{},(r)=>l(r));return Ivt(o),o}function Own(n,e,t){return i(n,e,t)}function g8o(n){Wr().fetchesClientData=n}function Aqr(){return Wr().fetchesClientData&&xe()==="firstParty"}function Ivt(n){let e=e0r(),t=Wr().providerCache.clientDataFetches;if(e!==void 0&&!(t.get(e)instanceof Promise)){let o=Ohe();t.set(e,n),n.finally(()=>{if(t.get(e)===n)if(Ohe()===o)t.set(e,"over");else t.delete(e)})}}function h8o(n){let e=Wr().providerCache.clientDataFetches;for(let[t,o]of e)if(o===n)e.set(t,"over")}function y8o(n,e){let t=e0r();if(t===void 0||!Aqr()||eJe())return;let o=Wr().providerCache.clientDataFetches.get(t);if(o!==void 0)return o==="over"?void 0:o;return i(n,e,Sln())}
export{Iwn,Own,g8o,Aqr,Ivt,h8o,y8o};
