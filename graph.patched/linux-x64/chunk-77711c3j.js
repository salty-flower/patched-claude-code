// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Fe,Rs}from"./chunk-8nra9hkj.js";import{Ir}from"./chunk-ye9f1kvm.js";var X5t={};Ir(X5t,{booleanOfInput:()=>z4e,default:()=>X5t,isHeldTrue:()=>wfr,numberInputHint:()=>q5t,numberOfInput:()=>Y5t});var z4e=(n)=>Fe(n)?!0:Rs(n)?!1:void 0;var wfr=(n)=>n===!0||n==="true";function q5t(n){return`It takes a number${n.min!==void 0||n.max!==void 0?` between ${n.min??"-\u221E"} and ${n.max??"\u221E"}`:""}.`}function Y5t(n,e){let r=n.trim(),t=Number(r);return r!==""&&Number.isFinite(t)&&(e.min===void 0||t>=e.min)&&(e.max===void 0||t<=e.max)?t:void 0}export{z4e,wfr,q5t,Y5t,X5t};
