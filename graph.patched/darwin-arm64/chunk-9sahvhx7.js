// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{bH}from"./chunk-npzr9fk5.js";import{y}from"./chunk-pqa42v56.js";import{Ft}from"./chunk-2fnmmmh0.js";import{o,n,Yee}from"./chunk-86a8apqx.js";import{g2}from"./chunk-zcgwmqje.js";import{e}from"./chunk-6ccz96s4.js";import{qe,Mn,xk,v,j}from"./chunk-8wk5q2vw.js";function g9(F){let a=y(10),{elapsedTimeSeconds:b,timeoutMs:l}=F;if(b===void 0&&!l){return null}let O;if(a[0]!==l)O=l?Ft(l,{hideTrailingZeros:!0}):void 0,a[0]=l,a[1]=O;else O=a[1];let x=O;if(b===void 0){const m=`(timeout ${x})`;let p;if(a[2]!==m)p=e(n,{dimColor:!0,children:m}),a[2]=m,a[3]=p;else p=a[3];return p}const m=b*1000;let p;if(a[4]!==m)p=Ft(m),a[4]=m,a[5]=p;else p=a[5];let E=p;if(x){const u=`(${E} \xB7 timeout ${x})`;let d;if(a[6]!==u)d=e(n,{dimColor:!0,children:u}),a[6]=u,a[7]=d;else d=a[7];return d}const u=`(${E})`;let d;if(a[8]!==u)d=e(n,{dimColor:!0,children:u}),a[8]=u,a[9]=d;else d=a[9];return d}j();function z(){let r=qe(g2),[t,i,s,f]=Yee(),c=f()??i.isVisible;return[t,c||r,s]}function qy({children:r}){let t=qe(bH),[i,s,f]=z(),c=v(r),[,C]=xk((T)=>T+1,0),R=!s;if(!R)c.current=r;let V=t?.columns,L=t?.rows;return Mn(()=>{if(R&&f())C()},[V,L,R,f]),e(o,{ref:i,children:c.current})}function y9e(r){let[t,i]=z(),s=v(r);if(i)s.current=r;return[t,s.current]}
export{qy,y9e,g9};
