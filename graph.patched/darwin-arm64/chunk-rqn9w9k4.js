// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{UG}from"./chunk-nqb0d8cm.js";import{Ce}from"./chunk-2nwpk7v6.js";import{w}from"./chunk-k8a9av7b.js";import{ae}from"./chunk-1jrtnqew.js";import{n,_o,ZD}from"./chunk-0x4ch5gg.js";import{e,r}from"./chunk-mq8eg5v4.js";function dl(E){let d=w(27),{width:F,color:t,char:C,padding:M,title:i,titleAlign:x}=E,o=C===void 0?UG:C,G=M===void 0?0:M,H=x===void 0?"center":x,{columns:I}=Ce(),f=Math.max(0,(F??I)-G),D;if(d[0]!==t||d[1]!==i)D=i?e(n,{color:t,dimColor:!t,children:e(_o,{children:i})}):null,d[0]=t,d[1]=i,d[2]=D;else D=d[2];let v=D;if(i){let J=ae(i)+2;let b=Math.max(0,f-J);let s=H==="start"?Math.min(4,b):Math.floor(b/2);let k=b-s;const c=!t;let l;if(d[3]!==o||d[4]!==s)l=o.repeat(s),d[3]=o,d[4]=s,d[5]=l;else l=d[5];let h;if(d[6]!==i)h=e(n,{dimColor:!0,children:e(_o,{children:i})}),d[6]=i,d[7]=h;else h=d[7];let p;if(d[8]!==o||d[9]!==k)p=o.repeat(k),d[8]=o,d[9]=k,d[10]=p;else p=d[10];let W;if(d[11]!==t||d[12]!==c||d[13]!==l||d[14]!==h||d[15]!==p)W=r(n,{color:t,dimColor:c,children:[l," ",h," ",p]}),d[11]=t,d[12]=c,d[13]=l,d[14]=h,d[15]=p,d[16]=W;else W=d[16];let R;if(d[17]!==v||d[18]!==W)R=e(ZD,{fallback:v,children:W}),d[17]=v,d[18]=W,d[19]=R;else R=d[19];return R}const c=!t;let l;if(d[20]!==o||d[21]!==f)l=o.repeat(f),d[20]=o,d[21]=f,d[22]=l;else l=d[22];let h;if(d[23]!==t||d[24]!==c||d[25]!==l)h=e(ZD,{children:e(n,{color:t,dimColor:c,children:l})}),d[23]=t,d[24]=c,d[25]=l,d[26]=h;else h=d[26];return h}
export{dl};
