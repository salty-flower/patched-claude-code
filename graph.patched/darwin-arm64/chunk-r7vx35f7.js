// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Xw}from"./chunk-989ss8d7.js";var Gm=Symbol("untrustedArray.unreadable"),Uoe="<unreadable list>";function yv(e){let n;try{if(!Array.isArray(e))return;n=e.length}catch{return Gm}if(typeof n!=="number"||!Number.isSafeInteger(n)||n<0||n>Xw)return Gm;let u=[];for(let r=0;r<n;r++){let t;try{t=e[r]}catch{t=void 0}u.push(t)}return u}function Ace(e){let n=yv(e);return n===Gm?void 0:n}
export{Gm,Uoe,yv,Ace};
