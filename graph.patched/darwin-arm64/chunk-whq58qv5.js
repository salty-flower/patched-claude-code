// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{z,XLn}from"./chunk-yhfssb7x.js";import{rvn,mo,NU,nW,cse,$Ze,qkn}from"./chunk-vtwn1md5.js";import{q5e}from"./chunk-5e9qk3ys.js";function Pst(o){if(XLn(),NU(),mo().providerCache=rvn(),nW(),cse(),qkn(),o==="firstParty")$Ze()}class s{#o=!1;get autoModeCheckRan(){return this.#o}claimAutoModeCheck(){if(this.#o)return!1;return this.#o=!0,!0}rearmAutoModeCheck(){this.#o=!1}reset(){this.#o=!1}}var a=new z(()=>new s);function U0e(o){return{key:"auto-mode-gate-notification",kind:"warning",text:o,color:"warning",priority:"high"}}async function B0e(o,l,d,c,r){if(!a.of(o).claimAutoModeCheck())return;let{updateContext:m,notification:t}=await q5e(l,c);if(d((e)=>{let n=m(e.toolPermissionContext),i=n===e.toolPermissionContext?e:{...e,toolPermissionContext:n};if(!t||r)return i;return{...i,notifications:{...i.notifications,queue:[...i.notifications.queue,U0e(t)]}}}),t&&r)r(U0e(t))}function Ost(o){a.of(o).rearmAutoModeCheck()}
export{Pst,U0e,B0e,Ost};
