// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Ne,Es}from"./chunk-fdxhcr6b.js";import{Hr}from"./chunk-txt1tvjz.js";var kWe=(n)=>Ne(n)?!0:Es(n)?!1:void 0;var LJn=(n)=>n===!0||n==="true";function z2t(n){return`It takes a number${n.min!==void 0||n.max!==void 0?` between ${n.min??"-\u221E"} and ${n.max??"\u221E"}`:""}.`}function V2t(n,e){let r=n.trim(),t=Number(r);return r!==""&&Number.isFinite(t)&&(e.min===void 0||t>=e.min)&&(e.max===void 0||t<=e.max)?t:void 0}var q2t={};Hr(q2t,{booleanOfInput:()=>kWe,default:()=>q2t,isHeldTrue:()=>LJn,numberInputHint:()=>z2t,numberOfInput:()=>V2t});
export{kWe,LJn,z2t,V2t,q2t};
