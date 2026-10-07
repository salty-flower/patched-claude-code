// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{N}from"./chunk-nqb0d8cm.js";class Oe extends Error{name="HooksError";telemetryMessage="function hooks error (message not reported: it may contain plugin details)";thrownName}function ieo(r){if(!(r instanceof Error))return;let o=r.cause;return typeof o==="string"?o:void 0}function mvt(r,o="aborted"){let{reason:e}=r;return e instanceof Error?e.message:e===void 0?o:String(e)}var D_s=(r)=>`the answer is not plain data: ${r}`;function w3t(r,o){if(!N(r))throw new Oe(`${o}: next() takes the event's argument: next(e) passes it on, next({ ...e, x }) rewrites it`);return r}var Rts=(r)=>typeof r==="object"&&r!==null&&("aborted"in r)&&typeof r.addEventListener==="function"&&typeof r.removeEventListener==="function";var Dxn=(r)=>`next() argument is not plain data: ${r}`;var Flr=(r,o)=>`${r}: arguments are not plain data: ${o}`;function n(){let r=new WeakMap;return{mark(o,e){if(typeof o==="object"&&o!==null&&e!==void 0)r.set(o,e);return o},of(o){return typeof o==="object"&&o!==null?r.get(o):void 0}}}var t=n();var vtt=(r,o)=>t.mark(r,o);var Fve=(r)=>new Oe(`${r}: its environment was unloaded`);var Lxn=(r,o,e)=>({plugin:r,op:o,message:e});function L_s(r,o){let e=Fve(r);return vtt(e,Lxn(r,o,e.message))}var Nxn=(r)=>t.of(r);export{mvt,D_s,Oe,w3t,ieo,Rts,Dxn,Flr,vtt,Fve,Lxn,L_s,Nxn};
