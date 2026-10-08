// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Hm}from"./chunk-sp36y8cp.js";import{w}from"./chunk-p3sxj9wz.js";import{Zt}from"./chunk-d9jpb7es.js";import{s,n,f3}from"./chunk-8pkmgy8b.js";import{Ce,Qt,Xg,T,N}from"./chunk-f6geyac8.js";import{dW}from"./chunk-c0d2fcpk.js";import{e}from"./chunk-efrp9dmx.js";function Aoe(i){let o=w(10),{elapsedTimeSeconds:r,timeoutMs:t}=i;if(r===void 0&&!t){return null}let l;if(o[0]!==t)l=t?Zt(t,{hideTrailingZeros:!0}):void 0,o[0]=t,o[1]=l;else l=o[1];let f=l;if(r===void 0){const m=`(timeout ${f})`;let u;if(o[2]!==m)u=e(n,{dimColor:!0,children:m}),o[2]=m,o[3]=u;else u=o[3];return u}const m=r*1000;let u;if(o[4]!==m)u=Zt(m),o[4]=m,o[5]=u;else u=o[5];let a=u;if(f){const c=`(${a} \xB7 timeout ${f})`;let d;if(o[6]!==c)d=e(n,{dimColor:!0,children:c}),o[6]=c,o[7]=d;else d=o[7];return d}const c=`(${a})`;let d;if(o[8]!==c)d=e(n,{dimColor:!0,children:c}),o[8]=c,o[9]=d;else d=o[9];return d}N();function x(){let i=Ce(dW),[r,t,o,l]=f3(),f=l()??t.isVisible;return[r,f||i,o]}function CC({children:i}){let r=Ce(Hm),[t,o,l]=x(),f=T(i),[,m]=Xg((d)=>d+1,0),u=!o;if(!u)f.current=i;let a=r?.columns,c=r?.rows;return Qt(()=>{if(u&&l())m()},[a,c,u,l]),e(s,{ref:t,children:f.current})}function lue(i){let[r,t]=x(),o=T(i);if(t)o.current=i;return[r,o.current]}
export{CC,lue,Aoe};
