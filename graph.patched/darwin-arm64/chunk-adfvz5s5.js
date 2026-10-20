// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{$e,Rs}from"./chunk-bjnpzyk4.js";import{Ir}from"./chunk-8xa87pyw.js";var s9t={};Ir(s9t,{booleanOfInput:()=>Qqe,default:()=>s9t,isHeldTrue:()=>$fr,numberInputHint:()=>r9t,numberOfInput:()=>o9t});var Qqe=(n)=>$e(n)?!0:Rs(n)?!1:void 0;var $fr=(n)=>n===!0||n==="true";function r9t(n){return`It takes a number${n.min!==void 0||n.max!==void 0?` between ${n.min??"-\u221E"} and ${n.max??"\u221E"}`:""}.`}function o9t(n,e){let r=n.trim(),t=Number(r);return r!==""&&Number.isFinite(t)&&(e.min===void 0||t>=e.min)&&(e.max===void 0||t<=e.max)?t:void 0}export{Qqe,$fr,r9t,o9t,s9t};
