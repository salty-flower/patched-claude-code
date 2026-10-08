// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{L}from"./chunk-mfn0g94q.js";class Me extends Error{name="HooksError";telemetryMessage="function hooks error (message not reported: it may contain plugin details)";thrownName}function Uao(r){if(!(r instanceof Error))return;let o=r.cause;return typeof o==="string"?o:void 0}class Ile extends Me{}var Bao=(r,o)=>o===!0?new Ile(r):new Me(r);function Oot(r,o="aborted"){let{reason:e}=r;return e instanceof Error?e.message:e===void 0?o:String(e)}var UCs=(r)=>`the answer is not plain data: ${r}`;function EHn(r,o){if(!L(r))throw new Me(`${o}: next() takes the event's argument: next(e) passes it on, next({ ...e, x }) rewrites it`);return r}var xds=(r)=>typeof r==="object"&&r!==null&&("aborted"in r)&&typeof r.addEventListener==="function"&&typeof r.removeEventListener==="function";var kHn=(r)=>`next() argument is not plain data: ${r}`;var tgr=(r,o)=>`${r}: arguments are not plain data: ${o}`;var Pds=(r)=>r.reason instanceof Ile;var THn=(r)=>r.reason instanceof Ile?{isSettled:!0}:{};var BCs=(r)=>r instanceof Ile?new Me(r.message):r;function n(){let r=new WeakMap;return{mark(o,e){if(typeof o==="object"&&o!==null&&e!==void 0)r.set(o,e);return o},of(o){return typeof o==="object"&&o!==null?r.get(o):void 0}}}var t=n();var Mot=(r,o)=>t.mark(r,o);var HTe=(r)=>new Me(`${r}: its environment was unloaded`);var AHn=(r,o,e)=>({plugin:r,op:o,message:e});function jCs(r,o){let e=HTe(r);return Mot(e,AHn(r,o,e.message))}var CHn=(r)=>t.of(r);export{Oot,UCs,Me,EHn,Uao,xds,kHn,tgr,Ile,Pds,Bao,THn,BCs,Mot,HTe,AHn,jCs,CHn};
