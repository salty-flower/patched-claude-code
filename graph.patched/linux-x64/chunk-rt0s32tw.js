// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Jie}from"./chunk-w620wy1w.js";import{y}from"./chunk-a5ahs27a.js";import{t,ut}from"./chunk-snr8xejh.js";import{zdn,Gdn,rjt}from"./chunk-bbye6npr.js";import{Gz}from"./chunk-80z0v0mr.js";import{e,r}from"./chunk-ys8dsnqt.js";import{pn}from"./chunk-5nnrmmhw.js";function C(U){let{index:G}=U;return G!==-1}var P=[Gdn,rjt,zdn].map((_)=>({url:_,marker:`learn more: ${_}`}));function pK(U){let d=y(33),{children:o,color:L,bold:i}=U,N=Jie(),E,n,a,s,c,O;if(d[0]!==i||d[1]!==o||d[2]!==L||d[3]!==N){O=pn;bb0:{let l;if(d[10]!==o)l=(R)=>{let{url:g,marker:u}=R;return{url:g,marker:u,index:o.indexOf(u)}},d[10]=o,d[11]=l;else l=d[11];n=P.map(l).find(C);if(!N||n===void 0){let R;if(d[12]!==i||d[13]!==o||d[14]!==L)R=e(Gz,{color:L,bold:i,children:o}),d[12]=i,d[13]=o,d[14]=L,d[15]=R;else R=d[15];O=R;break bb0}E=t;a=L;s=i;c=o.slice(0,n.index)}d[0]=i,d[1]=o,d[2]=L,d[3]=N,d[4]=E,d[5]=n,d[6]=a,d[7]=s,d[8]=c,d[9]=O}else E=d[4],n=d[5],a=d[6],s=d[7],c=d[8],O=d[9];if(O!==pn)return O;let l;if(d[16]!==i||d[17]!==L)l=e(t,{color:L,bold:i,underline:!0,children:"learn more"}),d[16]=i,d[17]=L,d[18]=l;else l=d[18];let R;if(d[19]!==n.url||d[20]!==l)R=e(ut,{url:n.url,children:l}),d[19]=n.url,d[20]=l,d[21]=R;else R=d[21];let x;if(d[22]!==o||d[23]!==n.index||d[24]!==n.marker.length)x=o.slice(n.index+n.marker.length),d[22]=o,d[23]=n.index,d[24]=n.marker.length,d[25]=x;else x=d[25];let B;if(d[26]!==E||d[27]!==a||d[28]!==s||d[29]!==c||d[30]!==R||d[31]!==x)B=r(E,{color:a,bold:s,children:[c,R,x]}),d[26]=E,d[27]=a,d[28]=s,d[29]=c,d[30]=R,d[31]=x,d[32]=B;else B=d[32];return B}
export{pK};
