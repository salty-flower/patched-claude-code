// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{AR}from"./chunk-k0x60ftn.js";var qf=Symbol("untrustedArray.unreadable"),tG="<unreadable list>";function Kv(e){let n;try{if(!Array.isArray(e))return;n=e.length}catch{return qf}if(typeof n!=="number"||!Number.isSafeInteger(n)||n<0||n>AR)return qf;let u=[];for(let r=0;r<n;r++){let t;try{t=e[r]}catch{t=void 0}u.push(t)}return u}function yOe(e){let n=Kv(e);return n===qf?void 0:n}
export{qf,tG,Kv,yOe};
