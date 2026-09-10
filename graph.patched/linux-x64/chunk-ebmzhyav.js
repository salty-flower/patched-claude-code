// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{qI}from"./chunk-13mcxq6s.js";import{y}from"./chunk-spjasdq6.js";import{$t}from"./chunk-dz6vh6s7.js";import{o,n,Xte}from"./chunk-q8bwyp41.js";import{o2}from"./chunk-8zdgb2y3.js";import{e}from"./chunk-qs39f0kj.js";import{De,un,VR,k,L}from"./chunk-kt4npzgg.js";function kq(F){let a=y(10),{elapsedTimeSeconds:b,timeoutMs:l}=F;if(b===void 0&&!l){return null}let O;if(a[0]!==l)O=l?$t(l,{hideTrailingZeros:!0}):void 0,a[0]=l,a[1]=O;else O=a[1];let x=O;if(b===void 0){const m=`(timeout ${x})`;let p;if(a[2]!==m)p=e(n,{dimColor:!0,children:m}),a[2]=m,a[3]=p;else p=a[3];return p}const m=b*1000;let p;if(a[4]!==m)p=$t(m),a[4]=m,a[5]=p;else p=a[5];let E=p;if(x){const u=`(${E} \xB7 timeout ${x})`;let d;if(a[6]!==u)d=e(n,{dimColor:!0,children:u}),a[6]=u,a[7]=d;else d=a[7];return d}const u=`(${E})`;let d;if(a[8]!==u)d=e(n,{dimColor:!0,children:u}),a[8]=u,a[9]=d;else d=a[9];return d}L();function z(){let r=De(o2),[t,i,s,f]=Xte(),c=f()??i.isVisible;return[t,c||r,s]}function ob({children:r}){let t=De(qI),[i,s,f]=z(),c=k(r),[,C]=VR((v)=>v+1,0),R=!s;if(!R)c.current=r;let V=t?.columns,T=t?.rows;return un(()=>{if(R&&f())C()},[V,T,R,f]),e(o,{ref:i,children:c.current})}function fKe(r){let[t,i]=z(),s=k(r);if(i)s.current=r;return[t,s.current]}
export{ob,fKe,kq};
