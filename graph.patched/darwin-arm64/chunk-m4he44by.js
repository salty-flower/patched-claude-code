// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Pe,ws}from"./chunk-5p4f0tx0.js";import{Ar}from"./chunk-fn3dzsec.js";var zMn={};Ar(zMn,{booleanOfInput:()=>lht,default:()=>zMn,isHeldTrue:()=>Yco,numberInputHint:()=>WMn,numberOfInput:()=>GMn});var lht=(n)=>Pe(n)?!0:ws(n)?!1:void 0;var Yco=(n)=>n===!0||n==="true";function WMn(n){return`It takes a number${n.min!==void 0||n.max!==void 0?` between ${n.min??"-\u221E"} and ${n.max??"\u221E"}`:""}.`}function GMn(n,e){let r=n.trim(),t=Number(r);return r!==""&&Number.isFinite(t)&&(e.min===void 0||t>=e.min)&&(e.max===void 0||t<=e.max)?t:void 0}export{lht,Yco,WMn,GMn,zMn};
