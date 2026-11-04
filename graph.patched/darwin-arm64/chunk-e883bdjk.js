// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{De,Qo}from"./chunk-w5484khd.js";import{br}from"./chunk-tngcxdsg.js";var gyn={};br(gyn,{booleanOfInput:()=>Not,default:()=>gyn,isHeldTrue:()=>xVr,numberInputHint:()=>myn,numberOfInput:()=>hyn});var Not=(n)=>De(n)?!0:Qo(n)?!1:void 0;var xVr=(n)=>n===!0||n==="true";function myn(n){return`It takes a number${n.min!==void 0||n.max!==void 0?` between ${n.min??"-\u221E"} and ${n.max??"\u221E"}`:""}.`}function hyn(n,e){let r=n.trim(),t=Number(r);return r!==""&&Number.isFinite(t)&&(e.min===void 0||t>=e.min)&&(e.max===void 0||t<=e.max)?t:void 0}export{Not,xVr,myn,hyn,gyn};
