// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{dx}from"./chunk-2k39abte.js";import{b}from"./chunk-mvpw0rjp.js";import{Bt}from"./chunk-gyqjm99t.js";import{s,n,Wz}from"./chunk-cskdt2sa.js";import{Dz}from"./chunk-e5fy0jq1.js";import{e}from"./chunk-437ab22y.js";import{Ne,dn,LH,T,M}from"./chunk-ncc6kxz8.js";function iq(F){let a=b(10),{elapsedTimeSeconds:x,timeoutMs:l}=F;if(x===void 0&&!l){return null}let O;if(a[0]!==l)O=l?Bt(l,{hideTrailingZeros:!0}):void 0,a[0]=l,a[1]=O;else O=a[1];let y=O;if(x===void 0){const m=`(timeout ${y})`;let p;if(a[2]!==m)p=e(n,{dimColor:!0,children:m}),a[2]=m,a[3]=p;else p=a[3];return p}const m=x*1000;let p;if(a[4]!==m)p=Bt(m),a[4]=m,a[5]=p;else p=a[5];let E=p;if(y){const u=`(${E} \xB7 timeout ${y})`;let d;if(a[6]!==u)d=e(n,{dimColor:!0,children:u}),a[6]=u,a[7]=d;else d=a[7];return d}const u=`(${E})`;let d;if(a[8]!==u)d=e(n,{dimColor:!0,children:u}),a[8]=u,a[9]=d;else d=a[9];return d}M();function z(){let r=Ne(Dz),[o,t,i,f]=Wz(),c=f()??t.isVisible;return[o,c||r,i]}function Bb({children:r}){let o=Ne(dx),[t,i,f]=z(),c=T(r),[,C]=LH((v)=>v+1,0),R=!i;if(!R)c.current=r;let V=o?.columns,L=o?.rows;return dn(()=>{if(R&&f())C()},[V,L,R,f]),e(s,{ref:t,children:c.current})}function _Xe(r){let[o,t]=z(),i=T(r);if(t)i.current=r;return[o,i.current]}
export{Bb,_Xe,iq};
