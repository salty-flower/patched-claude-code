// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{_,ee}from"./chunk-5nh49npx.js";var wPt=0,jur=1,OAn=262144,n=5,IAn=1048576,WBe=1e4;function MAn(r){let e=typeof r==="string"?Buffer.from(r,"utf8"):r,t=Buffer.allocUnsafe(n+e.length);return t.writeUInt32BE(e.length,0),t.writeUInt8(wPt,4),e.copy(t,n),t}function zj(r){let e=Buffer.from(_(r),"utf8"),t=Buffer.allocUnsafe(n+e.length);return t.writeUInt32BE(e.length,0),t.writeUInt8(jur,4),e.copy(t,n),t}function Wur(r,e){let t=Buffer.alloc(0),o=!1;return(l)=>{if(o)return;t=t.length===0?l:Buffer.concat([t,l]);while(t.length>=n){let f=t.readUInt32BE(0);if(f>IAn){o=!0,e(`frame too large (${f} > ${IAn})`);return}let u=n+f;if(t.length<u)return;let i=t.readUInt8(4),s=t.subarray(n,u);if(t=t.subarray(u),i===wPt)r({kind:wPt,payload:Buffer.from(s)});else if(i===jur){let c;try{c=ee(s.toString("utf8"))}catch{o=!0,e("bad ctrl json");return}r({kind:jur,ctrl:c})}else{o=!0,e(`unknown frame kind ${i}`);return}}}}
export{wPt,jur,OAn,IAn,WBe,MAn,zj,Wur};
