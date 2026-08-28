// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{MH}from"./chunk-vbtj2k8h.js";import{g}from"./chunk-yhctzac5.js";import{Mt}from"./chunk-cgwm6n4d.js";import{o,t,SJ}from"./chunk-167xpx5m.js";import{q2}from"./chunk-56nrp9ge.js";import{e}from"./chunk-azctepqx.js";import{ze,Zn,zE,E,N}from"./chunk-q0z49y3j.js";function G2(w){let a=g(10),{elapsedTimeSeconds:b,timeoutMs:l}=w;if(b===void 0&&!l){return null}let T;if(a[0]!==l)T=l?Mt(l,{hideTrailingZeros:!0}):void 0,a[0]=l,a[1]=T;else T=a[1];let x=T;if(b===void 0){const m=`(timeout ${x})`;let p;if(a[2]!==m)p=e(t,{dimColor:!0,children:m}),a[2]=m,a[3]=p;else p=a[3];return p}const m=b*1000;let p;if(a[4]!==m)p=Mt(m),a[4]=m,a[5]=p;else p=a[5];let v=p;if(x){const u=`(${v} \xB7 timeout ${x})`;let d;if(a[6]!==u)d=e(t,{dimColor:!0,children:u}),a[6]=u,a[7]=d;else d=a[7];return d}const u=`(${v})`;let d;if(a[8]!==u)d=e(t,{dimColor:!0,children:u}),a[8]=u,a[9]=d;else d=a[9];return d}N();function y(){let r=ze(q2),[n,i,s,f]=SJ(),c=f()??i.isVisible;return[n,c||r,s]}function Qg({children:r}){let n=ze(MH),[i,s,f]=y(),c=E(r),[,z]=zE((L)=>L+1,0),R=!s;if(!R)c.current=r;let C=n?.columns,V=n?.rows;return Zn(()=>{if(R&&f())z()},[C,V,R,f]),e(o,{ref:i,children:c.current})}function oNe(r){let[n,i]=y(),s=E(r);if(i)s.current=r;return[n,s.current]}
export{Qg,oNe,G2};
