// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Pe,ws}from"./chunk-732yb76j.js";import{Cr}from"./chunk-jxn7cbw7.js";var x0n={};Cr(x0n,{booleanOfInput:()=>nht,default:()=>x0n,isHeldTrue:()=>Rco,numberInputHint:()=>C0n,numberOfInput:()=>R0n});var nht=(n)=>Pe(n)?!0:ws(n)?!1:void 0;var Rco=(n)=>n===!0||n==="true";function C0n(n){return`It takes a number${n.min!==void 0||n.max!==void 0?` between ${n.min??"-\u221E"} and ${n.max??"\u221E"}`:""}.`}function R0n(n,e){let r=n.trim(),t=Number(r);return r!==""&&Number.isFinite(t)&&(e.min===void 0||t>=e.min)&&(e.max===void 0||t<=e.max)?t:void 0}export{nht,Rco,C0n,R0n,x0n};
