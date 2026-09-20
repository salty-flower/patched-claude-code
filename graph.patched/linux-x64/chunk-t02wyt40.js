// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{ne}from"./chunk-h4q23q42.js";class De extends Error{name="HooksError";thrownName}function UYn(e){if(!(e instanceof Error))return;let t=e.cause;return typeof t==="string"?t:void 0}function sht(e,t="aborted"){let{reason:o}=e;return o instanceof Error?o.message:o===void 0?t:String(o)}function U2t(e,t){if(!ne(e))throw new De(`${t}: next() takes the event's argument: next(e) passes it on, next({ ...e, x }) rewrites it`);return e}var vUr=(e)=>typeof e==="object"&&e!==null&&("aborted"in e)&&typeof e.addEventListener==="function"&&typeof e.removeEventListener==="function";var Tme=(e)=>new De(`${e}: its environment was unloaded`);function pu(){let e;return{set:(t)=>{e=t},get:()=>e}}var Tgn=pu();var iht=()=>Tgn.get();export{sht,De,U2t,UYn,vUr,Tme,pu,Tgn,iht};
