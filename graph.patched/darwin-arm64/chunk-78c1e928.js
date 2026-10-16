// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Fe,Ss}from"./chunk-3mdayxq0.js";import{Lr}from"./chunk-71kjn9x8.js";var S3t={};Lr(S3t,{booleanOfInput:()=>QVe,default:()=>S3t,isHeldTrue:()=>Tlr,numberInputHint:()=>y3t,numberOfInput:()=>_3t});var QVe=(n)=>Fe(n)?!0:Ss(n)?!1:void 0;var Tlr=(n)=>n===!0||n==="true";function y3t(n){return`It takes a number${n.min!==void 0||n.max!==void 0?` between ${n.min??"-\u221E"} and ${n.max??"\u221E"}`:""}.`}function _3t(n,e){let r=n.trim(),t=Number(r);return r!==""&&Number.isFinite(t)&&(e.min===void 0||t>=e.min)&&(e.max===void 0||t<=e.max)?t:void 0}export{QVe,Tlr,y3t,_3t,S3t};
