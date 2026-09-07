// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{j,qIn}from"./chunk-zhtwayh2.js";import{rEn,Hr,U$,tj,Voe,MJe,$Cn}from"./chunk-n495pc0t.js";import{oVe}from"./chunk-1692k4g5.js";function Eot(o){if(qIn(),U$(),Hr().providerCache=rEn(),tj(),Voe(),$Cn(),o==="firstParty")MJe()}class n{#o=!1;get autoModeCheckRan(){return this.#o}claimAutoModeCheck(){if(this.#o)return!1;return this.#o=!0,!0}rearmAutoModeCheck(){this.#o=!1}reset(){this.#o=!1}}var a=new j(()=>new n);function Bxe(o){return{key:"auto-mode-gate-notification",kind:"warning",text:o,color:"warning",priority:"high"}}async function jxe(o,l,d,c,r){if(!a.of(o).claimAutoModeCheck())return;let{updateContext:m,notification:e}=await oVe(l,c);if(d((t)=>{let s=m(t.toolPermissionContext),i=s===t.toolPermissionContext?t:{...t,toolPermissionContext:s};if(!e||r)return i;return{...i,notifications:{...i.notifications,queue:[...i.notifications.queue,Bxe(e)]}}}),e&&r)r(Bxe(e))}function Aot(o){a.of(o).rearmAutoModeCheck()}
export{Eot,Bxe,jxe,Aot};
