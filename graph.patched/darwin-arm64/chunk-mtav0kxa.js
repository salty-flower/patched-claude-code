// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Hre}from"./chunk-fk84qe1h.js";import{g}from"./chunk-8mr77ghb.js";import{t,it}from"./chunk-htcaw08y.js";import{Esn,Csn,uNt}from"./chunk-k7g7zf27.js";import{XU}from"./chunk-md5zfw0j.js";import{e,r}from"./chunk-80eepr01.js";import{rn}from"./chunk-t2kfemrk.js";function B(F){let{index:G}=F;return G!==-1}var O=[Csn,uNt,Esn].map((_)=>({url:_,marker:`learn more: ${_}`}));function a5(F){let d=g(33),{children:o,color:L,bold:i}=F,U=Hre(),E,n,a,s,c,N;if(d[0]!==i||d[1]!==o||d[2]!==L||d[3]!==U){N=rn;bb0:{let l;if(d[10]!==o)l=(R)=>{let{url:b,marker:k}=R;return{url:b,marker:k,index:o.indexOf(k)}},d[10]=o,d[11]=l;else l=d[11];n=O.map(l).find(B);if(!U||n===void 0){let R;if(d[12]!==i||d[13]!==o||d[14]!==L)R=e(XU,{color:L,bold:i,children:o}),d[12]=i,d[13]=o,d[14]=L,d[15]=R;else R=d[15];N=R;break bb0}E=t;a=L;s=i;c=o.slice(0,n.index)}d[0]=i,d[1]=o,d[2]=L,d[3]=U,d[4]=E,d[5]=n,d[6]=a,d[7]=s,d[8]=c,d[9]=N}else E=d[4],n=d[5],a=d[6],s=d[7],c=d[8],N=d[9];if(N!==rn)return N;let l;if(d[16]!==i||d[17]!==L)l=e(t,{color:L,bold:i,underline:!0,children:"learn more"}),d[16]=i,d[17]=L,d[18]=l;else l=d[18];let R;if(d[19]!==n.url||d[20]!==l)R=e(it,{url:n.url,children:l}),d[19]=n.url,d[20]=l,d[21]=R;else R=d[21];let x;if(d[22]!==o||d[23]!==n.index||d[24]!==n.marker.length)x=o.slice(n.index+n.marker.length),d[22]=o,d[23]=n.index,d[24]=n.marker.length,d[25]=x;else x=d[25];let u;if(d[26]!==E||d[27]!==a||d[28]!==s||d[29]!==c||d[30]!==R||d[31]!==x)u=r(E,{color:a,bold:s,children:[c,R,x]}),d[26]=E,d[27]=a,d[28]=s,d[29]=c,d[30]=R,d[31]=x,d[32]=u;else u=d[32];return u}
export{a5};
