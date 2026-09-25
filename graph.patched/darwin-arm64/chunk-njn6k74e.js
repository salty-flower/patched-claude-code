// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{Oe,ko}from"./chunk-6cqmwr9m.js";import{hc}from"./chunk-4cwgnmh9.js";import{f}from"./chunk-1y7zyxh8.js";import{de,xNt}from"./chunk-ag423d0m.js";function o(n){let e=n?.trim();return e?e:void 0}function r(n){return n===void 0?void 0:String(n)}var d=f(()=>xNt(r,de().optional().transform(o))),s=f(()=>xNt(r,de().optional())),u=f(()=>xNt(r,de().optional().transform((n)=>Oe(n)))),m=f(()=>xNt(r,de().optional().transform((n)=>{if(Oe(n))return!0;if(ko(n))return!1;return}))),a=f(()=>t());function hRo(n){if(typeof n==="boolean")return n?"1":"0";return String(n)}var D={str:()=>d(),rawStr:()=>s(),bool:()=>u(),triBool:()=>m(),int:(n)=>n?t(n):a(),enum:(n)=>xNt(r,de().optional().transform((e)=>e!==void 0&&n.includes(e.trim())?e.trim():void 0))};function t(n){return xNt(r,de().optional().transform((e)=>{if(e===void 0)return;if(n?.digitsOnly&&!/^[+-]?\d+$/.test(e.trim()))return;let i=hc(e);if(!Number.isFinite(i))return;if(n?.min!==void 0&&i<n.min)return;if(n?.max!==void 0&&i>n.max)return;return i}))}
export{hRo,D};
