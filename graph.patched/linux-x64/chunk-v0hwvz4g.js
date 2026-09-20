// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{G,ber}from"./chunk-txfrkyzp.js";import{X4n,Ar,oF,U6n,CK,pNe,Omt}from"./chunk-30p0nwys.js";import{ost}from"./chunk-v4zgc4qd.js";function hwt(o){if(ber(),oF(),Ar().providerCache=X4n(),CK(),pNe(),U6n(),o==="firstParty")Omt()}class n{#o=!1;get autoModeCheckRan(){return this.#o}claimAutoModeCheck(){if(this.#o)return!1;return this.#o=!0,!0}rearmAutoModeCheck(){this.#o=!1}reset(){this.#o=!1}}var a=new G(()=>new n);function F1e(o){return{key:"auto-mode-gate-notification",kind:"warning",text:o,color:"warning",priority:"high"}}async function U1e(o,d,l,c,r){if(!a.of(o).claimAutoModeCheck())return;let{updateContext:m,notification:e}=await ost(d,c);if(l((t)=>{let s=m(t.toolPermissionContext),i=s===t.toolPermissionContext?t:{...t,toolPermissionContext:s};if(!e||r)return i;return{...i,notifications:{...i.notifications,queue:[...i.notifications.queue,F1e(e)]}}}),e&&r)r(F1e(e))}function ywt(o){a.of(o).rearmAutoModeCheck()}
export{hwt,F1e,U1e,ywt};
