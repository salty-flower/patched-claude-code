// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{sI}from"./chunk-t5dpzsbb.js";var of=Symbol("untrustedArray.unreadable"),f4="<unreadable list>";function Pw(e){let n;try{if(!Array.isArray(e))return;n=e.length}catch{return of}if(typeof n!=="number"||!Number.isSafeInteger(n)||n<0||n>sI)return of;let u=[];for(let r=0;r<n;r++){let t;try{t=e[r]}catch{t=void 0}u.push(t)}return u}function aoe(e){let n=Pw(e);return n===of?void 0:n}
export{of,f4,Pw,aoe};
