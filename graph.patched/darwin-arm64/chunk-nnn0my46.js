// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{ih}from"./chunk-wd6qtxhm.js";import{w}from"./chunk-k8a9av7b.js";import{tn}from"./chunk-1jrtnqew.js";import{s,n,oK}from"./chunk-0x4ch5gg.js";import{ke,Qt,Dg,A,L}from"./chunk-bkksmm2y.js";import{t2}from"./chunk-hng0jbg3.js";import{e}from"./chunk-mq8eg5v4.js";function Xne(i){let o=w(10),{elapsedTimeSeconds:r,timeoutMs:t}=i;if(r===void 0&&!t){return null}let l;if(o[0]!==t)l=t?tn(t,{hideTrailingZeros:!0}):void 0,o[0]=t,o[1]=l;else l=o[1];let f=l;if(r===void 0){const m=`(timeout ${f})`;let u;if(o[2]!==m)u=e(n,{dimColor:!0,children:m}),o[2]=m,o[3]=u;else u=o[3];return u}const m=r*1000;let u;if(o[4]!==m)u=tn(m),o[4]=m,o[5]=u;else u=o[5];let a=u;if(f){const c=`(${a} \xB7 timeout ${f})`;let d;if(o[6]!==c)d=e(n,{dimColor:!0,children:c}),o[6]=c,o[7]=d;else d=o[7];return d}const c=`(${a})`;let d;if(o[8]!==c)d=e(n,{dimColor:!0,children:c}),o[8]=c,o[9]=d;else d=o[9];return d}L();function M(){let i=ke(t2),[r,t,o,l]=oK(),f=l()??t.isVisible;return[r,f||i,o]}function ik({children:i}){let r=ke(ih),[t,o,l]=M(),f=A(i),[,m]=Dg((d)=>d+1,0),u=!o;if(!u)f.current=i;let a=r?.columns,c=r?.rows;return Qt(()=>{if(u&&l())m()},[a,c,u,l]),e(s,{ref:t,children:f.current})}function vce(i){let[r,t]=M(),o=A(i);if(t)o.current=i;return[r,o.current]}
export{ik,vce,Xne};
