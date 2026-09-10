// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{z,OBn}from"./chunk-6n7yk222.js";import{GPn,Pr,P1,JW,_Ie,Trt,WMn}from"./chunk-ce4ppmnp.js";import{sXe}from"./chunk-2byjyg85.js";function iut(o){if(OBn(),P1(),Pr().providerCache=GPn(),JW(),_Ie(),WMn(),o==="firstParty")Trt()}class n{#o=!1;get autoModeCheckRan(){return this.#o}claimAutoModeCheck(){if(this.#o)return!1;return this.#o=!0,!0}rearmAutoModeCheck(){this.#o=!1}reset(){this.#o=!1}}var a=new z(()=>new n);function eMe(o){return{key:"auto-mode-gate-notification",kind:"warning",text:o,color:"warning",priority:"high"}}async function tMe(o,l,d,c,r){if(!a.of(o).claimAutoModeCheck())return;let{updateContext:m,notification:e}=await sXe(l,c);if(d((t)=>{let s=m(t.toolPermissionContext),i=s===t.toolPermissionContext?t:{...t,toolPermissionContext:s};if(!e||r)return i;return{...i,notifications:{...i.notifications,queue:[...i.notifications.queue,eMe(e)]}}}),e&&r)r(eMe(e))}function aut(o){a.of(o).rearmAutoModeCheck()}
export{iut,eMe,tMe,aut};
