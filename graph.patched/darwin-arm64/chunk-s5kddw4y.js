// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Le}from"./chunk-5p4f0tx0.js";import{VV}from"./chunk-m9a0pm4p.js";var a=50;function CQe(){let i=Le(),e=[],u=0;return{publish(t,r,s){let n=s===void 0?{line:t,level:r}:{line:t,level:r,notice:s};if(u===0){e=[...e,n].slice(-a);return}i.emit(n)},takeBacklog(){let t=e;return e=[],t},subscribe(t){u+=1;let r=i.subscribe(t);return()=>{u-=1,r()}}}}var o=Buffer.from([0]);function YZt(i,{sessionUuid:e,boundDeviceUuid:u,issuedAtMs:t,fixed:r,strings:s}){if(s.some((n)=>n.includes("\x00")))throw Error("framedPreimage: NUL in a signed field");return Buffer.concat([i,o,VV(e),VV(u),Qms(t),...r,...s.flatMap((n)=>[Buffer.from(n,"utf8"),o])])}function Qms(i){let e=Buffer.alloc(8);return e.writeBigUInt64BE(BigInt(i)),e}
export{CQe,YZt,Qms};
