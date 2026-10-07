// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Le,rs}from"./chunk-918t5khf.js";import{Qr}from"./chunk-grvgfqgm.js";var sUe=(n)=>Le(n)?!0:rs(n)?!1:void 0;var Kqn=(n)=>n===!0||n==="true";function lLt(n){return`It takes a number${n.min!==void 0||n.max!==void 0?` between ${n.min??"-\u221E"} and ${n.max??"\u221E"}`:""}.`}function cLt(n,e){let r=n.trim(),t=Number(r);return r!==""&&Number.isFinite(t)&&(e.min===void 0||t>=e.min)&&(e.max===void 0||t<=e.max)?t:void 0}var dLt={};Qr(dLt,{booleanOfInput:()=>sUe,default:()=>dLt,isHeldTrue:()=>Kqn,numberInputHint:()=>lLt,numberOfInput:()=>cLt});
export{sUe,Kqn,lLt,cLt,dLt};
