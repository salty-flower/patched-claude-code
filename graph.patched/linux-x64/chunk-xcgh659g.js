// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{MI}from"./chunk-d4fzrbr9.js";import{y}from"./chunk-a5ahs27a.js";import{Ft}from"./chunk-j35pah18.js";import{o,t,qZ}from"./chunk-snr8xejh.js";import{jz}from"./chunk-1q4734qg.js";import{e}from"./chunk-ys8dsnqt.js";import{ze,Gn,ck,v,F}from"./chunk-v59pjxqq.js";function Uz(N){let a=y(10),{elapsedTimeSeconds:b,timeoutMs:l}=N;if(b===void 0&&!l){return null}let O;if(a[0]!==l)O=l?Ft(l,{hideTrailingZeros:!0}):void 0,a[0]=l,a[1]=O;else O=a[1];let x=O;if(b===void 0){const m=`(timeout ${x})`;let p;if(a[2]!==m)p=e(t,{dimColor:!0,children:m}),a[2]=m,a[3]=p;else p=a[3];return p}const m=b*1000;let p;if(a[4]!==m)p=Ft(m),a[4]=m,a[5]=p;else p=a[5];let E=p;if(x){const u=`(${E} \xB7 timeout ${x})`;let d;if(a[6]!==u)d=e(t,{dimColor:!0,children:u}),a[6]=u,a[7]=d;else d=a[7];return d}const u=`(${E})`;let d;if(a[8]!==u)d=e(t,{dimColor:!0,children:u}),a[8]=u,a[9]=d;else d=a[9];return d}F();function z(){let r=ze(jz),[n,i,s,f]=qZ(),c=f()??i.isVisible;return[n,c||r,s]}function Ny({children:r}){let n=ze(MI),[i,s,f]=z(),c=v(r),[,C]=ck((T)=>T+1,0),R=!s;if(!R)c.current=r;let V=n?.columns,L=n?.rows;return Gn(()=>{if(R&&f())C()},[V,L,R,f]),e(o,{ref:i,children:c.current})}function pUe(r){let[n,i]=z(),s=v(r);if(i)s.current=r;return[n,s.current]}
export{Ny,pUe,Uz};
