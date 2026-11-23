// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Le}from"./chunk-732yb76j.js";import{Wq}from"./chunk-ajg671se.js";var a=50;function _Qe(){let i=Le(),e=[],u=0;return{publish(t,r,s){let n=s===void 0?{line:t,level:r}:{line:t,level:r,notice:s};if(u===0){e=[...e,n].slice(-a);return}i.emit(n)},takeBacklog(){let t=e;return e=[],t},subscribe(t){u+=1;let r=i.subscribe(t);return()=>{u-=1,r()}}}}var o=Buffer.from([0]);function FZt(i,{sessionUuid:e,boundDeviceUuid:u,issuedAtMs:t,fixed:r,strings:s}){if(s.some((n)=>n.includes("\x00")))throw Error("framedPreimage: NUL in a signed field");return Buffer.concat([i,o,Wq(e),Wq(u),gms(t),...r,...s.flatMap((n)=>[Buffer.from(n,"utf8"),o])])}function gms(i){let e=Buffer.alloc(8);return e.writeBigUInt64BE(BigInt(i)),e}
export{_Qe,FZt,gms};
