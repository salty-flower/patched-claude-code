// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Fk}from"./chunk-8myrmvax.js";import{g}from"./chunk-8mr77ghb.js";import{Lt}from"./chunk-nw6r1618.js";import{o,t,CJ}from"./chunk-htcaw08y.js";import{KU}from"./chunk-a19q2hw9.js";import{e}from"./chunk-80eepr01.js";import{We,Zn,zT,T,N}from"./chunk-5752v0zq.js";function VU(w){let a=g(10),{elapsedTimeSeconds:b,timeoutMs:l}=w;if(b===void 0&&!l){return null}let v;if(a[0]!==l)v=l?Lt(l,{hideTrailingZeros:!0}):void 0,a[0]=l,a[1]=v;else v=a[1];let x=v;if(b===void 0){const m=`(timeout ${x})`;let p;if(a[2]!==m)p=e(t,{dimColor:!0,children:m}),a[2]=m,a[3]=p;else p=a[3];return p}const m=b*1000;let p;if(a[4]!==m)p=Lt(m),a[4]=m,a[5]=p;else p=a[5];let O=p;if(x){const u=`(${O} \xB7 timeout ${x})`;let d;if(a[6]!==u)d=e(t,{dimColor:!0,children:u}),a[6]=u,a[7]=d;else d=a[7];return d}const u=`(${O})`;let d;if(a[8]!==u)d=e(t,{dimColor:!0,children:u}),a[8]=u,a[9]=d;else d=a[9];return d}N();function y(){let r=We(KU),[n,i,s,f]=CJ(),c=f()??i.isVisible;return[n,c||r,s]}function Zg({children:r}){let n=We(Fk),[i,s,f]=y(),c=T(r),[,z]=zT((L)=>L+1,0),R=!s;if(!R)c.current=r;let C=n?.columns,V=n?.rows;return Zn(()=>{if(R&&f())z()},[C,V,R,f]),e(o,{ref:i,children:c.current})}function bFe(r){let[n,i]=y(),s=T(r);if(i)s.current=r;return[n,s.current]}
export{Zg,bFe,VU};
