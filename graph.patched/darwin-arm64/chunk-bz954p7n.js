// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Le,ps}from"./chunk-63vja5td.js";import{Hr}from"./chunk-8drz5tx3.js";var RBe=(n)=>Le(n)?!0:ps(n)?!1:void 0;var K5n=(n)=>n===!0||n==="true";function r1t(n){return`It takes a number${n.min!==void 0||n.max!==void 0?` between ${n.min??"-\u221E"} and ${n.max??"\u221E"}`:""}.`}function o1t(n,e){let r=n.trim(),t=Number(r);return r!==""&&Number.isFinite(t)&&(e.min===void 0||t>=e.min)&&(e.max===void 0||t<=e.max)?t:void 0}var s1t={};Hr(s1t,{booleanOfInput:()=>RBe,default:()=>s1t,isHeldTrue:()=>K5n,numberInputHint:()=>r1t,numberOfInput:()=>o1t});
export{RBe,K5n,r1t,o1t,s1t};
