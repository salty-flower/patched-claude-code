// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{K}from"./chunk-g4zaymy2.js";import{K4e}from"./chunk-j5h9ds58.js";class r{#t=!1;get autoModeCheckRan(){return this.#t}claimAutoModeCheck(){if(this.#t)return!1;return this.#t=!0,!0}rearmAutoModeCheck(){this.#t=!1}reset(){this.#t=!1}}var a=new K(()=>new r);async function DEe(i,c,f,u,n){if(!a.of(i).claimAutoModeCheck())return;let{updateContext:m,notification:t}=await K4e(c,u);if(f((o)=>{let s=m(o.toolPermissionContext),e=s===o.toolPermissionContext?o:{...o,toolPermissionContext:s};if(!t||n)return e;return{...e,notifications:{...e.notifications,queue:[...e.notifications.queue,{key:"auto-mode-gate-notification",text:t,color:"warning",priority:"high"}]}}}),t&&n)n({key:"auto-mode-gate-notification",text:t,color:"warning",priority:"high"})}function iQe(i){a.of(i).rearmAutoModeCheck()}
export{DEe,iQe};
