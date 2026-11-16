// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{_,te}from"./chunk-ray9kegj.js";var J1t=0,PMr=1,Zjn=262144,n=5,eWn=1048576,b4e=1e4;function tWn(r){let e=typeof r==="string"?Buffer.from(r,"utf8"):r,t=Buffer.allocUnsafe(n+e.length);return t.writeUInt32BE(e.length,0),t.writeUInt8(J1t,4),e.copy(t,n),t}function Pz(r){let e=Buffer.from(_(r),"utf8"),t=Buffer.allocUnsafe(n+e.length);return t.writeUInt32BE(e.length,0),t.writeUInt8(PMr,4),e.copy(t,n),t}function IMr(r,e){let t=Buffer.alloc(0),o=!1;return(l)=>{if(o)return;t=t.length===0?l:Buffer.concat([t,l]);while(t.length>=n){let f=t.readUInt32BE(0);if(f>eWn){o=!0,e(`frame too large (${f} > ${eWn})`);return}let u=n+f;if(t.length<u)return;let i=t.readUInt8(4),s=t.subarray(n,u);if(t=t.subarray(u),i===J1t)r({kind:J1t,payload:Buffer.from(s)});else if(i===PMr){let c;try{c=te(s.toString("utf8"))}catch{o=!0,e("bad ctrl json");return}r({kind:PMr,ctrl:c})}else{o=!0,e(`unknown frame kind ${i}`);return}}}}
export{J1t,PMr,Zjn,eWn,b4e,tWn,Pz,IMr};
