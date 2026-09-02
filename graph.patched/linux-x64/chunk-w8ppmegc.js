// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Me,So}from"./chunk-7s3c5qqq.js";import{ol}from"./chunk-sgsf5yd5.js";import{m}from"./chunk-asme1eq2.js";import{w}from"./chunk-gjdr5cm8.js";function o(n){let e=n?.trim();return e?e:void 0}function r(n){return n===void 0?void 0:String(n)}var d=m(()=>w.preprocess(r,w.string().optional().transform(o))),s=m(()=>w.preprocess(r,w.string().optional())),u=m(()=>w.preprocess(r,w.string().optional().transform((n)=>Me(n)))),f=m(()=>w.preprocess(r,w.string().optional().transform((n)=>{if(Me(n))return!0;if(So(n))return!1;return}))),a=m(()=>t());function Klr(n){if(typeof n==="boolean")return n?"1":"0";return String(n)}var R={str:()=>d(),rawStr:()=>s(),bool:()=>u(),triBool:()=>f(),int:(n)=>n?t(n):a(),enum:(n)=>w.preprocess(r,w.string().optional().transform((e)=>e!==void 0&&n.includes(e.trim())?e.trim():void 0))};function t(n){return w.preprocess(r,w.string().optional().transform((e)=>{if(e===void 0)return;if(n?.digitsOnly&&!/^[+-]?\d+$/.test(e.trim()))return;let i=ol(e);if(!Number.isFinite(i))return;if(n?.min!==void 0&&i<n.min)return;if(n?.max!==void 0&&i>n.max)return;return i}))}
export{Klr,R};
