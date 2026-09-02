// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Me,bo}from"./chunk-5b2g0bc6.js";import{ol}from"./chunk-4j4893mq.js";import{m}from"./chunk-asme1eq2.js";import{T}from"./chunk-qanfvnpc.js";function o(n){let e=n?.trim();return e?e:void 0}function r(n){return n===void 0?void 0:String(n)}var d=m(()=>T.preprocess(r,T.string().optional().transform(o))),s=m(()=>T.preprocess(r,T.string().optional())),u=m(()=>T.preprocess(r,T.string().optional().transform((n)=>Me(n)))),f=m(()=>T.preprocess(r,T.string().optional().transform((n)=>{if(Me(n))return!0;if(bo(n))return!1;return}))),a=m(()=>t());function clr(n){if(typeof n==="boolean")return n?"1":"0";return String(n)}var x={str:()=>d(),rawStr:()=>s(),bool:()=>u(),triBool:()=>f(),int:(n)=>n?t(n):a(),enum:(n)=>T.preprocess(r,T.string().optional().transform((e)=>e!==void 0&&n.includes(e.trim())?e.trim():void 0))};function t(n){return T.preprocess(r,T.string().optional().transform((e)=>{if(e===void 0)return;if(n?.digitsOnly&&!/^[+-]?\d+$/.test(e.trim()))return;let i=ol(e);if(!Number.isFinite(i))return;if(n?.min!==void 0&&i<n.min)return;if(n?.max!==void 0&&i>n.max)return;return i}))}
export{clr,x};
