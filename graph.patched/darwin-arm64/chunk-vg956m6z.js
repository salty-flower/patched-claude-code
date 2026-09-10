// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{j,OFn}from"./chunk-cet8na02.js";import{zxn,Or,yB,$W,hxe,snt,MIn}from"./chunk-vryy7b5x.js";import{z8e}from"./chunk-tavwd3sq.js";function Flt(o){if(OFn(),yB(),Or().providerCache=zxn(),$W(),hxe(),MIn(),o==="firstParty")snt()}class n{#o=!1;get autoModeCheckRan(){return this.#o}claimAutoModeCheck(){if(this.#o)return!1;return this.#o=!0,!0}rearmAutoModeCheck(){this.#o=!1}reset(){this.#o=!1}}var a=new j(()=>new n);function $Ie(o){return{key:"auto-mode-gate-notification",kind:"warning",text:o,color:"warning",priority:"high"}}async function UIe(o,l,d,c,r){if(!a.of(o).claimAutoModeCheck())return;let{updateContext:m,notification:e}=await z8e(l,c);if(d((t)=>{let s=m(t.toolPermissionContext),i=s===t.toolPermissionContext?t:{...t,toolPermissionContext:s};if(!e||r)return i;return{...i,notifications:{...i.notifications,queue:[...i.notifications.queue,$Ie(e)]}}}),e&&r)r($Ie(e))}function $lt(o){a.of(o).rearmAutoModeCheck()}
export{Flt,$Ie,UIe,$lt};
