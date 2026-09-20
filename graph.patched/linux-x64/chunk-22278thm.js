// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{ax}from"./chunk-jnhqj9rz.js";import{S}from"./chunk-6qjhsn35.js";import{Bt}from"./chunk-d6f1t6sb.js";import{s,n,OG}from"./chunk-g8n1e3fe.js";import{kG}from"./chunk-bvbq4x0n.js";import{e}from"./chunk-437ab22y.js";import{Ne,dn,CP,T,L}from"./chunk-cf8g1269.js";function X4(F){let a=S(10),{elapsedTimeSeconds:b,timeoutMs:l}=F;if(b===void 0&&!l){return null}let O;if(a[0]!==l)O=l?Bt(l,{hideTrailingZeros:!0}):void 0,a[0]=l,a[1]=O;else O=a[1];let x=O;if(b===void 0){const m=`(timeout ${x})`;let p;if(a[2]!==m)p=e(n,{dimColor:!0,children:m}),a[2]=m,a[3]=p;else p=a[3];return p}const m=b*1000;let p;if(a[4]!==m)p=Bt(m),a[4]=m,a[5]=p;else p=a[5];let E=p;if(x){const u=`(${E} \xB7 timeout ${x})`;let d;if(a[6]!==u)d=e(n,{dimColor:!0,children:u}),a[6]=u,a[7]=d;else d=a[7];return d}const u=`(${E})`;let d;if(a[8]!==u)d=e(n,{dimColor:!0,children:u}),a[8]=u,a[9]=d;else d=a[9];return d}L();function y(){let r=Ne(kG),[o,t,i,f]=OG(),c=f()??t.isVisible;return[o,c||r,i]}function US({children:r}){let o=Ne(ax),[t,i,f]=y(),c=T(r),[,z]=CP((v)=>v+1,0),R=!i;if(!R)c.current=r;let C=o?.columns,V=o?.rows;return dn(()=>{if(R&&f())z()},[C,V,R,f]),e(s,{ref:t,children:c.current})}function KXe(r){let[o,t]=y(),i=T(r);if(t)i.current=r;return[o,i.current]}
export{US,KXe,X4};
