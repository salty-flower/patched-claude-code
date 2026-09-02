// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{ese}from"./chunk-31qd7kbw.js";import{_}from"./chunk-rykc5fv4.js";import{t,ut}from"./chunk-hm4dvvtr.js";import{$dn,Udn,t2t}from"./chunk-yx9c8yaw.js";import{Vj}from"./chunk-eww4x99a.js";import{e,r}from"./chunk-wk3xnwvn.js";import{fn}from"./chunk-rqyyny1n.js";function C(U){let{index:G}=U;return G!==-1}var P=[Udn,t2t,$dn].map((d)=>({url:d,marker:`learn more: ${d}`}));function hq(U){let l=_(33),{children:o,color:L,bold:i}=U,N=ese(),a,n,s,c,x,O;if(l[0]!==i||l[1]!==o||l[2]!==L||l[3]!==N){O=fn;bb0:{let p;if(l[10]!==o)p=(R)=>{let{url:g,marker:u}=R;return{url:g,marker:u,index:o.indexOf(u)}},l[10]=o,l[11]=p;else p=l[11];n=P.map(p).find(C);if(!N||n===void 0){let R;if(l[12]!==i||l[13]!==o||l[14]!==L)R=e(Vj,{color:L,bold:i,children:o}),l[12]=i,l[13]=o,l[14]=L,l[15]=R;else R=l[15];O=R;break bb0}a=t;s=L;c=i;x=o.slice(0,n.index)}l[0]=i,l[1]=o,l[2]=L,l[3]=N,l[4]=a,l[5]=n,l[6]=s,l[7]=c,l[8]=x,l[9]=O}else a=l[4],n=l[5],s=l[6],c=l[7],x=l[8],O=l[9];if(O!==fn)return O;let p;if(l[16]!==i||l[17]!==L)p=e(t,{color:L,bold:i,underline:!0,children:"learn more"}),l[16]=i,l[17]=L,l[18]=p;else p=l[18];let R;if(l[19]!==n.url||l[20]!==p)R=e(ut,{url:n.url,children:p}),l[19]=n.url,l[20]=p,l[21]=R;else R=l[21];let y;if(l[22]!==o||l[23]!==n.index||l[24]!==n.marker.length)y=o.slice(n.index+n.marker.length),l[22]=o,l[23]=n.index,l[24]=n.marker.length,l[25]=y;else y=l[25];let B;if(l[26]!==a||l[27]!==s||l[28]!==c||l[29]!==x||l[30]!==R||l[31]!==y)B=r(a,{color:s,bold:c,children:[x,R,y]}),l[26]=a,l[27]=s,l[28]=c,l[29]=x,l[30]=R,l[31]=y,l[32]=B;else B=l[32];return B}
export{hq};
