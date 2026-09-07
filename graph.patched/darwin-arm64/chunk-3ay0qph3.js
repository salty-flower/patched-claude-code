// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{$x}from"./chunk-9m8t8c8c.js";import{_}from"./chunk-c8ey99v5.js";import{Ot}from"./chunk-qs8h438x.js";import{o,n,CZ}from"./chunk-hrm5smjv.js";import{pB}from"./chunk-4ph8yvk2.js";import{e}from"./chunk-smtaex5n.js";import{De,vn,nk,C,N}from"./chunk-jegfnmzv.js";function xW(w){let a=_(10),{elapsedTimeSeconds:b,timeoutMs:l}=w;if(b===void 0&&!l){return null}let v;if(a[0]!==l)v=l?Ot(l,{hideTrailingZeros:!0}):void 0,a[0]=l,a[1]=v;else v=a[1];let x=v;if(b===void 0){const m=`(timeout ${x})`;let p;if(a[2]!==m)p=e(n,{dimColor:!0,children:m}),a[2]=m,a[3]=p;else p=a[3];return p}const m=b*1000;let p;if(a[4]!==m)p=Ot(m),a[4]=m,a[5]=p;else p=a[5];let O=p;if(x){const u=`(${O} \xB7 timeout ${x})`;let d;if(a[6]!==u)d=e(n,{dimColor:!0,children:u}),a[6]=u,a[7]=d;else d=a[7];return d}const u=`(${O})`;let d;if(a[8]!==u)d=e(n,{dimColor:!0,children:u}),a[8]=u,a[9]=d;else d=a[9];return d}N();function y(){let r=De(pB),[t,i,s,f]=CZ(),c=f()??i.isVisible;return[t,c||r,s]}function uy({children:r}){let t=De($x),[i,s,f]=y(),c=C(r),[,z]=nk((T)=>T+1,0),R=!s;if(!R)c.current=r;let V=t?.columns,L=t?.rows;return vn(()=>{if(R&&f())z()},[V,L,R,f]),e(o,{ref:i,children:c.current})}function X6e(r){let[t,i]=y(),s=C(r);if(i)s.current=r;return[t,s.current]}
export{uy,X6e,xW};
