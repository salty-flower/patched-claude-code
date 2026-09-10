// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{W,sBn}from"./chunk-sgyvc67j.js";import{SPn,Pr,BB,az,THe,Brt,_Dn}from"./chunk-e02s7cks.js";import{S7e}from"./chunk-e55d0yhx.js";function but(o){if(sBn(),BB(),Pr().providerCache=SPn(),az(),THe(),_Dn(),o==="firstParty")Brt()}class n{#o=!1;get autoModeCheckRan(){return this.#o}claimAutoModeCheck(){if(this.#o)return!1;return this.#o=!0,!0}rearmAutoModeCheck(){this.#o=!1}reset(){this.#o=!1}}var a=new W(()=>new n);function cOe(o){return{key:"auto-mode-gate-notification",kind:"warning",text:o,color:"warning",priority:"high"}}async function uOe(o,l,d,c,r){if(!a.of(o).claimAutoModeCheck())return;let{updateContext:m,notification:e}=await S7e(l,c);if(d((t)=>{let s=m(t.toolPermissionContext),i=s===t.toolPermissionContext?t:{...t,toolPermissionContext:s};if(!e||r)return i;return{...i,notifications:{...i.notifications,queue:[...i.notifications.queue,cOe(e)]}}}),e&&r)r(cOe(e))}function wut(o){a.of(o).rearmAutoModeCheck()}
export{but,cOe,uOe,wut};
