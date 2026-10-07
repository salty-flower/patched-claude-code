// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{N}from"./chunk-p72qafcy.js";class Oe extends Error{name="HooksError";telemetryMessage="function hooks error (message not reported: it may contain plugin details)";thrownName}function OZr(r){if(!(r instanceof Error))return;let o=r.cause;return typeof o==="string"?o:void 0}function rEt(r,o="aborted"){let{reason:e}=r;return e instanceof Error?e.message:e===void 0?o:String(e)}var Qys=(r)=>`the answer is not plain data: ${r}`;function s3t(r,o){if(!N(r))throw new Oe(`${o}: next() takes the event's argument: next(e) passes it on, next({ ...e, x }) rewrites it`);return r}var zes=(r)=>typeof r==="object"&&r!==null&&("aborted"in r)&&typeof r.addEventListener==="function"&&typeof r.removeEventListener==="function";var yxn=(r)=>`next() argument is not plain data: ${r}`;var ylr=(r,o)=>`${r}: arguments are not plain data: ${o}`;function n(){let r=new WeakMap;return{mark(o,e){if(typeof o==="object"&&o!==null&&e!==void 0)r.set(o,e);return o},of(o){return typeof o==="object"&&o!==null?r.get(o):void 0}}}var t=n();var gtt=(r,o)=>t.mark(r,o);var OEe=(r)=>new Oe(`${r}: its environment was unloaded`);var _xn=(r,o,e)=>({plugin:r,op:o,message:e});function Zys(r,o){let e=OEe(r);return gtt(e,_xn(r,o,e.message))}var bxn=(r)=>t.of(r);export{rEt,Qys,Oe,s3t,OZr,zes,yxn,ylr,gtt,OEe,_xn,Zys,bxn};
