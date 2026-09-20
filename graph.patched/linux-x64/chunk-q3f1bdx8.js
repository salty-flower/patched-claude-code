// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Oe,Ao}from"./chunk-gj513b2z.js";import{Dl}from"./chunk-k4wnp212.js";import{f}from"./chunk-67jj8qay.js";import{le,kbt}from"./chunk-qnggsk0b.js";function o(n){let e=n?.trim();return e?e:void 0}function r(n){return n===void 0?void 0:String(n)}var d=f(()=>kbt(r,le().optional().transform(o))),s=f(()=>kbt(r,le().optional())),u=f(()=>kbt(r,le().optional().transform((n)=>Oe(n)))),m=f(()=>kbt(r,le().optional().transform((n)=>{if(Oe(n))return!0;if(Ao(n))return!1;return}))),a=f(()=>t());function pzr(n){if(typeof n==="boolean")return n?"1":"0";return String(n)}var O={str:()=>d(),rawStr:()=>s(),bool:()=>u(),triBool:()=>m(),int:(n)=>n?t(n):a(),enum:(n)=>kbt(r,le().optional().transform((e)=>e!==void 0&&n.includes(e.trim())?e.trim():void 0))};function t(n){return kbt(r,le().optional().transform((e)=>{if(e===void 0)return;if(n?.digitsOnly&&!/^[+-]?\d+$/.test(e.trim()))return;let i=Dl(e);if(!Number.isFinite(i))return;if(n?.min!==void 0&&i<n.min)return;if(n?.max!==void 0&&i>n.max)return;return i}))}
export{pzr,O};
