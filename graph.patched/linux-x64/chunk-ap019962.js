// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{G,fLn}from"./chunk-bj7g1p32.js";import{xwn,Rr,xB,z2,Boe,w7e,pvn}from"./chunk-3e93vkg3.js";import{W9e}from"./chunk-y3swhsrk.js";function pot(o){if(fLn(),xB(),Rr().providerCache=xwn(),z2(),Boe(),pvn(),o==="firstParty")w7e()}class n{#o=!1;get autoModeCheckRan(){return this.#o}claimAutoModeCheck(){if(this.#o)return!1;return this.#o=!0,!0}rearmAutoModeCheck(){this.#o=!1}reset(){this.#o=!1}}var a=new G(()=>new n);function LIe(o){return{key:"auto-mode-gate-notification",kind:"warning",text:o,color:"warning",priority:"high"}}async function PIe(o,l,d,c,r){if(!a.of(o).claimAutoModeCheck())return;let{updateContext:m,notification:e}=await W9e(l,c);if(d((t)=>{let s=m(t.toolPermissionContext),i=s===t.toolPermissionContext?t:{...t,toolPermissionContext:s};if(!e||r)return i;return{...i,notifications:{...i.notifications,queue:[...i.notifications.queue,LIe(e)]}}}),e&&r)r(LIe(e))}function mot(o){a.of(o).rearmAutoModeCheck()}
export{pot,LIe,PIe,mot};
