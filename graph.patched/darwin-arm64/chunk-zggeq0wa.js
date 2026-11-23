// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{_,te}from"./chunk-bdfv2ky4.js";var oBt=0,iMr=1,bjn=262144,n=5,wjn=1048576,k3e=1e4;function Ejn(r){let e=typeof r==="string"?Buffer.from(r,"utf8"):r,t=Buffer.allocUnsafe(n+e.length);return t.writeUInt32BE(e.length,0),t.writeUInt8(oBt,4),e.copy(t,n),t}function IG(r){let e=Buffer.from(_(r),"utf8"),t=Buffer.allocUnsafe(n+e.length);return t.writeUInt32BE(e.length,0),t.writeUInt8(iMr,4),e.copy(t,n),t}function aMr(r,e){let t=Buffer.alloc(0),o=!1;return(l)=>{if(o)return;t=t.length===0?l:Buffer.concat([t,l]);while(t.length>=n){let f=t.readUInt32BE(0);if(f>wjn){o=!0,e(`frame too large (${f} > ${wjn})`);return}let u=n+f;if(t.length<u)return;let i=t.readUInt8(4),s=t.subarray(n,u);if(t=t.subarray(u),i===oBt)r({kind:oBt,payload:Buffer.from(s)});else if(i===iMr){let c;try{c=te(s.toString("utf8"))}catch{o=!0,e("bad ctrl json");return}r({kind:iMr,ctrl:c})}else{o=!0,e(`unknown frame kind ${i}`);return}}}}
export{oBt,iMr,bjn,wjn,k3e,Ejn,IG,aMr};
