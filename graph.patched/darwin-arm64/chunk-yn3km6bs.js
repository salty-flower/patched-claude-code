// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{xb}from"./chunk-qz36xf6q.js";var Sf=Symbol("untrustedArray.unreadable"),GY="<unreadable list>";function iw(e){let n;try{if(!Array.isArray(e))return;n=e.length}catch{return Sf}if(typeof n!=="number"||!Number.isSafeInteger(n)||n<0||n>xb)return Sf;let u=[];for(let r=0;r<n;r++){let t;try{t=e[r]}catch{t=void 0}u.push(t)}return u}function Mce(e){let n=iw(e);return n===Sf?void 0:n}
export{Sf,GY,iw,Mce};
