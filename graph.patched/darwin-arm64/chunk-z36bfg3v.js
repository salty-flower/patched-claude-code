// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{Ne,as}from"./chunk-9s1z8ttt.js";import{Fr}from"./chunk-meds60nn.js";var BQt={};Fr(BQt,{booleanOfInput:()=>m8e,default:()=>BQt,isHeldTrue:()=>Svr,numberInputHint:()=>$Qt,numberOfInput:()=>UQt});var m8e=(n)=>Ne(n)?!0:as(n)?!1:void 0;var Svr=(n)=>n===!0||n==="true";function $Qt(n){return`It takes a number${n.min!==void 0||n.max!==void 0?` between ${n.min??"-\u221E"} and ${n.max??"\u221E"}`:""}.`}function UQt(n,e){let r=n.trim(),t=Number(r);return r!==""&&Number.isFinite(t)&&(e.min===void 0||t>=e.min)&&(e.max===void 0||t<=e.max)?t:void 0}export{m8e,Svr,$Qt,UQt,BQt};
