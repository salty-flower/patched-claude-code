// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{$0}from"./chunk-3mehx43h.js";import{_}from"./chunk-rykc5fv4.js";import{$t}from"./chunk-870sakbg.js";import{o,t,YZ}from"./chunk-hm4dvvtr.js";import{Gj}from"./chunk-f91bk8sv.js";import{e}from"./chunk-wk3xnwvn.js";import{We,qn,dv,C,F}from"./chunk-w6mhhrt2.js";function qj(w){let a=_(10),{elapsedTimeSeconds:b,timeoutMs:l}=w;if(b===void 0&&!l){return null}let v;if(a[0]!==l)v=l?$t(l,{hideTrailingZeros:!0}):void 0,a[0]=l,a[1]=v;else v=a[1];let x=v;if(b===void 0){const m=`(timeout ${x})`;let p;if(a[2]!==m)p=e(t,{dimColor:!0,children:m}),a[2]=m,a[3]=p;else p=a[3];return p}const m=b*1000;let p;if(a[4]!==m)p=$t(m),a[4]=m,a[5]=p;else p=a[5];let O=p;if(x){const u=`(${O} \xB7 timeout ${x})`;let d;if(a[6]!==u)d=e(t,{dimColor:!0,children:u}),a[6]=u,a[7]=d;else d=a[7];return d}const u=`(${O})`;let d;if(a[8]!==u)d=e(t,{dimColor:!0,children:u}),a[8]=u,a[9]=d;else d=a[9];return d}F();function y(){let r=We(Gj),[n,i,s,f]=YZ(),c=f()??i.isVisible;return[n,c||r,s]}function $_({children:r}){let n=We($0),[i,s,f]=y(),c=C(r),[,z]=dv((T)=>T+1,0),R=!s;if(!R)c.current=r;let V=n?.columns,L=n?.rows;return qn(()=>{if(R&&f())z()},[V,L,R,f]),e(o,{ref:i,children:c.current})}function yBe(r){let[n,i]=y(),s=C(r);if(i)s.current=r;return[n,s.current]}
export{$_,yBe,qj};
