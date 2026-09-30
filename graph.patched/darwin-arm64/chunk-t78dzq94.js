// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{N}from"./chunk-zpb414p7.js";class De extends Error{name="HooksError";telemetryMessage="function hooks error (message not reported: it may contain plugin details)";thrownName}function C1r(e){if(!(e instanceof Error))return;let t=e.cause;return typeof t==="string"?t:void 0}function vpt(e,t="aborted"){let{reason:o}=e;return o instanceof Error?o.message:o===void 0?t:String(o)}function GFt(e,t){if(!N(e))throw new De(`${t}: next() takes the event's argument: next(e) passes it on, next({ ...e, x }) rewrites it`);return e}var CLo=(e)=>typeof e==="object"&&e!==null&&("aborted"in e)&&typeof e.addEventListener==="function"&&typeof e.removeEventListener==="function";var $ke=(e)=>new De(`${e}: its environment was unloaded`);function Fs(){let e;return{set:(t)=>{e=t},get:()=>e}}var pKn=Fs();var zFt=()=>pKn.get();export{vpt,De,GFt,C1r,CLo,$ke,Fs,pKn,zFt};
