// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{X,KPn}from"./chunk-hdbxv3pp.js";import{dEn,ho,_U,Lj,gie,cQe,GCn}from"./chunk-h6md7820.js";import{lKe}from"./chunk-darxmw8c.js";function Zot(o){if(KPn(),_U(),ho().providerCache=dEn(),Lj(),gie(),GCn(),o==="firstParty")cQe()}class s{#o=!1;get autoModeCheckRan(){return this.#o}claimAutoModeCheck(){if(this.#o)return!1;return this.#o=!0,!0}rearmAutoModeCheck(){this.#o=!1}reset(){this.#o=!1}}var a=new X(()=>new s);function yHe(o){return{key:"auto-mode-gate-notification",kind:"warning",text:o,color:"warning",priority:"high"}}async function SHe(o,l,d,c,r){if(!a.of(o).claimAutoModeCheck())return;let{updateContext:m,notification:t}=await lKe(l,c);if(d((e)=>{let n=m(e.toolPermissionContext),i=n===e.toolPermissionContext?e:{...e,toolPermissionContext:n};if(!t||r)return i;return{...i,notifications:{...i.notifications,queue:[...i.notifications.queue,yHe(t)]}}}),t&&r)r(yHe(t))}function eit(o){a.of(o).rearmAutoModeCheck()}
export{Zot,yHe,SHe,eit};
