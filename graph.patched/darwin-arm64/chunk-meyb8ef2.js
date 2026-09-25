// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{V,hMr}from"./chunk-s8xs8s76.js";import{okr,Nr,O1,$8,P3e,hLe}from"./chunk-twxt3h9y.js";import{Wvr}from"./chunk-z3kvjkzc.js";import{xxe}from"./chunk-wnf49mj5.js";function O1t(o){if(hMr(),O1(),Nr().providerCache=okr(),$8(),P3e(),Wvr(),o==="firstParty")hLe()}class n{#o=!1;get autoModeCheckRan(){return this.#o}claimAutoModeCheck(){if(this.#o)return!1;return this.#o=!0,!0}rearmAutoModeCheck(){this.#o=!1}reset(){this.#o=!1}}var a=new V(()=>new n);function u9e(o){return{key:"auto-mode-gate-notification",kind:"warning",text:o,color:"warning",priority:"high"}}async function p9e(o,l,d,c,r){if(!a.of(o).claimAutoModeCheck())return;let{updateContext:m,notification:e}=await xxe(l,c);if(d((t)=>{let s=m(t.toolPermissionContext),i=s===t.toolPermissionContext?t:{...t,toolPermissionContext:s};if(!e||r)return i;return{...i,notifications:{...i.notifications,queue:[...i.notifications.queue,u9e(e)]}}}),e&&r)r(u9e(e))}function D1t(o){a.of(o).rearmAutoModeCheck()}
export{O1t,u9e,p9e,D1t};
