// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{J,U0n}from"./chunk-38213y7h.js";import{gSn,Ac,h$,H6,Ire,M7e,Own}from"./chunk-bsdtxcdc.js";import{$4e}from"./chunk-fy12d89p.js";function Rtt(o){if(U0n(),h$(),Ac().providerCache=gSn(),H6(),Ire(),Own(),o==="firstParty")M7e()}class s{#o=!1;get autoModeCheckRan(){return this.#o}claimAutoModeCheck(){if(this.#o)return!1;return this.#o=!0,!0}rearmAutoModeCheck(){this.#o=!1}reset(){this.#o=!1}}var a=new J(()=>new s);function vRe(o){return{key:"auto-mode-gate-notification",kind:"warning",text:o,color:"warning",priority:"high"}}async function RRe(o,l,d,c,r){if(!a.of(o).claimAutoModeCheck())return;let{updateContext:m,notification:t}=await $4e(l,c);if(d((e)=>{let n=m(e.toolPermissionContext),i=n===e.toolPermissionContext?e:{...e,toolPermissionContext:n};if(!t||r)return i;return{...i,notifications:{...i.notifications,queue:[...i.notifications.queue,vRe(t)]}}}),t&&r)r(vRe(t))}function ktt(o){a.of(o).rearmAutoModeCheck()}
export{Rtt,vRe,RRe,ktt};
