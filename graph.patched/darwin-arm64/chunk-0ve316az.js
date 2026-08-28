// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{De,To}from"./chunk-vpkz5m05.js";import{Oa}from"./chunk-j6bwf1es.js";import{h}from"./chunk-s0y4aasp.js";import{w}from"./chunk-j4c4fwny.js";function o(n){let e=n?.trim();return e?e:void 0}function r(n){return n===void 0?void 0:String(n)}var d=h(()=>w.preprocess(r,w.string().optional().transform(o))),s=h(()=>w.preprocess(r,w.string().optional())),u=h(()=>w.preprocess(r,w.string().optional().transform((n)=>De(n)))),f=h(()=>w.preprocess(r,w.string().optional().transform((n)=>{if(De(n))return!0;if(To(n))return!1;return}))),m=h(()=>t());function wer(n){if(typeof n==="boolean")return n?"1":"0";return String(n)}var R={str:()=>d(),rawStr:()=>s(),bool:()=>u(),triBool:()=>f(),int:(n)=>n?t(n):m(),enum:(n)=>w.preprocess(r,w.string().optional().transform((e)=>e!==void 0&&n.includes(e.trim())?e.trim():void 0))};function t(n){return w.preprocess(r,w.string().optional().transform((e)=>{if(e===void 0)return;if(n?.digitsOnly&&!/^[+-]?\d+$/.test(e.trim()))return;let i=Oa(e);if(!Number.isFinite(i))return;if(n?.min!==void 0&&i<n.min)return;if(n?.max!==void 0&&i>n.max)return;return i}))}
export{wer,R};
