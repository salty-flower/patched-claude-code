// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{L}from"./chunk-mfn0g94q.js";class He extends Error{name="HooksError";telemetryMessage="function hooks error (message not reported: it may contain plugin details)";thrownName}function mlo(r){if(!(r instanceof Error))return;let o=r.cause;return typeof o==="string"?o:void 0}class Fle extends He{}var glo=(r,o)=>o===!0?new Fle(r):new He(r);function Uot(r,o="aborted"){let{reason:e}=r;return e instanceof Error?e.message:e===void 0?o:String(e)}var vRs=(r)=>`the answer is not plain data: ${r}`;function BHn(r,o){if(!L(r))throw new He(`${o}: next() takes the event's argument: next(e) passes it on, next({ ...e, x }) rewrites it`);return r}var fus=(r)=>typeof r==="object"&&r!==null&&("aborted"in r)&&typeof r.addEventListener==="function"&&typeof r.removeEventListener==="function";var jHn=(r)=>`next() argument is not plain data: ${r}`;var Egr=(r,o)=>`${r}: arguments are not plain data: ${o}`;var mus=(r)=>r.reason instanceof Fle;var WHn=(r)=>r.reason instanceof Fle?{isSettled:!0}:{};var kRs=(r)=>r instanceof Fle?new He(r.message):r;function n(){let r=new WeakMap;return{mark(o,e){if(typeof o==="object"&&o!==null&&e!==void 0)r.set(o,e);return o},of(o){return typeof o==="object"&&o!==null?r.get(o):void 0}}}var t=n();var Bot=(r,o)=>t.mark(r,o);var BCe=(r)=>new He(`${r}: its environment was unloaded`);var GHn=(r,o,e)=>({plugin:r,op:o,message:e});function CRs(r,o){let e=BCe(r);return Bot(e,GHn(r,o,e.message))}var zHn=(r)=>t.of(r);export{Uot,vRs,He,BHn,mlo,fus,jHn,Egr,Fle,mus,glo,WHn,kRs,Bot,BCe,GHn,CRs,zHn};
