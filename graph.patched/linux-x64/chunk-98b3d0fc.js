// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{J,PIn}from"./chunk-30zk17wm.js";import{mbn,Ac,mB,k2,Cre,DYe,PHn}from"./chunk-1e5y3pjf.js";import{Oqe}from"./chunk-h6btyxas.js";function Att(o){if(PIn(),mB(),Ac().providerCache=mbn(),k2(),Cre(),PHn(),o==="firstParty")DYe()}class s{#o=!1;get autoModeCheckRan(){return this.#o}claimAutoModeCheck(){if(this.#o)return!1;return this.#o=!0,!0}rearmAutoModeCheck(){this.#o=!1}reset(){this.#o=!1}}var a=new J(()=>new s);function ATe(o){return{key:"auto-mode-gate-notification",kind:"warning",text:o,color:"warning",priority:"high"}}async function vTe(o,l,d,c,r){if(!a.of(o).claimAutoModeCheck())return;let{updateContext:m,notification:t}=await Oqe(l,c);if(d((e)=>{let n=m(e.toolPermissionContext),i=n===e.toolPermissionContext?e:{...e,toolPermissionContext:n};if(!t||r)return i;return{...i,notifications:{...i.notifications,queue:[...i.notifications.queue,ATe(t)]}}}),t&&r)r(ATe(t))}function vtt(o){a.of(o).rearmAutoModeCheck()}
export{Att,ATe,vTe,vtt};
