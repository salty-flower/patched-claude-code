// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{yH}from"./chunk-z5w7grep.js";import{_}from"./chunk-0jrfbepr.js";import{$t}from"./chunk-h2gsgpx0.js";import{o,n,Ste}from"./chunk-t50adtrb.js";import{XB}from"./chunk-n3vt84pp.js";import{e}from"./chunk-v5r13aq1.js";import{Ge,Dn,yk,v,j}from"./chunk-xyxaqzpf.js";function GW(w){let a=_(10),{elapsedTimeSeconds:b,timeoutMs:l}=w;if(b===void 0&&!l){return null}let T;if(a[0]!==l)T=l?$t(l,{hideTrailingZeros:!0}):void 0,a[0]=l,a[1]=T;else T=a[1];let x=T;if(b===void 0){const m=`(timeout ${x})`;let p;if(a[2]!==m)p=e(n,{dimColor:!0,children:m}),a[2]=m,a[3]=p;else p=a[3];return p}const m=b*1000;let p;if(a[4]!==m)p=$t(m),a[4]=m,a[5]=p;else p=a[5];let O=p;if(x){const u=`(${O} \xB7 timeout ${x})`;let d;if(a[6]!==u)d=e(n,{dimColor:!0,children:u}),a[6]=u,a[7]=d;else d=a[7];return d}const u=`(${O})`;let d;if(a[8]!==u)d=e(n,{dimColor:!0,children:u}),a[8]=u,a[9]=d;else d=a[9];return d}j();function y(){let r=Ge(XB),[t,i,s,f]=Ste(),c=f()??i.isVisible;return[t,c||r,s]}function My({children:r}){let t=Ge(yH),[i,s,f]=y(),c=v(r),[,z]=yk((L)=>L+1,0),R=!s;if(!R)c.current=r;let C=t?.columns,V=t?.rows;return Dn(()=>{if(R&&f())z()},[C,V,R,f]),e(o,{ref:i,children:c.current})}function wje(r){let[t,i]=y(),s=v(r);if(i)s.current=r;return[t,s.current]}
export{My,wje,GW};
