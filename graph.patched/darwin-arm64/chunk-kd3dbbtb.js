// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{L}from"./chunk-6q0v3ahc.js";class He extends Error{name="HooksError";telemetryMessage="function hooks error (message not reported: it may contain plugin details)";thrownName}function fho(r){if(!(r instanceof Error))return;let o=r.cause;return typeof o==="string"?o:void 0}class Gde extends He{}var mho=(r,o)=>o===!0?new Gde(r):new He(r);function wlt(r,o="aborted"){let{reason:e}=r;return e instanceof Error?e.message:e===void 0?o:String(e)}var GFs=(r)=>`the answer is not plain data: ${r}`;function cUn(r,o){if(!L(r))throw new He(`${o}: next() takes the event's argument: next(e) passes it on, next({ ...e, x }) rewrites it`);return r}var cEs=(r)=>typeof r==="object"&&r!==null&&("aborted"in r)&&typeof r.addEventListener==="function"&&typeof r.removeEventListener==="function";var dUn=(r)=>`next() argument is not plain data: ${r}`;var xwr=(r,o)=>`${r}: arguments are not plain data: ${o}`;var dEs=(r)=>r.reason instanceof Gde;var uUn=(r)=>r.reason instanceof Gde?{isSettled:!0}:{};var zFs=(r)=>r instanceof Gde?new He(r.message):r;function n(){let r=new WeakMap;return{mark(o,e){if(typeof o==="object"&&o!==null&&e!==void 0)r.set(o,e);return o},of(o){return typeof o==="object"&&o!==null?r.get(o):void 0}}}var t=n();var Elt=(r,o)=>t.mark(r,o);var aRe=(r)=>new He(`${r}: its environment was unloaded`);var pUn=(r,o,e)=>({plugin:r,op:o,message:e});function VFs(r,o){let e=aRe(r);return Elt(e,pUn(r,o,e.message))}var fUn=(r)=>t.of(r);export{wlt,GFs,He,cUn,fho,cEs,dUn,xwr,Gde,dEs,mho,uUn,zFs,Elt,aRe,pUn,VFs,fUn};
