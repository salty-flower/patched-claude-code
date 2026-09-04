// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{De,yo}from"./chunk-h4q6j5r2.js";import{al}from"./chunk-ty218y69.js";import{m}from"./chunk-55w4bsdv.js";import{T}from"./chunk-k206sd5g.js";function o(n){let e=n?.trim();return e?e:void 0}function r(n){return n===void 0?void 0:String(n)}var d=m(()=>T.preprocess(r,T.string().optional().transform(o))),s=m(()=>T.preprocess(r,T.string().optional())),u=m(()=>T.preprocess(r,T.string().optional().transform((n)=>De(n)))),f=m(()=>T.preprocess(r,T.string().optional().transform((n)=>{if(De(n))return!0;if(yo(n))return!1;return}))),a=m(()=>t());function agr(n){if(typeof n==="boolean")return n?"1":"0";return String(n)}var I={str:()=>d(),rawStr:()=>s(),bool:()=>u(),triBool:()=>f(),int:(n)=>n?t(n):a(),enum:(n)=>T.preprocess(r,T.string().optional().transform((e)=>e!==void 0&&n.includes(e.trim())?e.trim():void 0))};function t(n){return T.preprocess(r,T.string().optional().transform((e)=>{if(e===void 0)return;if(n?.digitsOnly&&!/^[+-]?\d+$/.test(e.trim()))return;let i=al(e);if(!Number.isFinite(i))return;if(n?.min!==void 0&&i<n.min)return;if(n?.max!==void 0&&i>n.max)return;return i}))}
export{agr,I};
