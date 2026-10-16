// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{w}from"./chunk-d6ktxc5j.js";import{n,st,Nr}from"./chunk-sm4gyzj8.js";import{tc}from"./chunk-hg5ry7jq.js";import{rtr,Mi,Ye}from"./chunk-cw382zbp.js";import{e}from"./chunk-esdbx0br.js";import{y,F}from"./chunk-57p87fb1.js";F();var jZn=500;function Lze(L=jZn){let r=tc();return Nr(L,r)}function ar(L){let a=w(32),{onConfirm:r,onCancel:o,confirmLabel:D,cancelLabel:P,cancelFirst:V,focus:X,hideIndexes:Y,refuseInput:M,openedAt:I,windowMs:W,armAfterMs:v}=L,s=D===void 0?"Yes":D,i=P===void 0?"No":P,x=V===void 0?!1:V,Z=X===void 0?"confirm":X,N=Y===void 0?!1:Y,[E]=y(Z),l=Lze(v??null)||v===void 0;if(st()){const c=W??v;let t;if(a[0]!==i||a[1]!==s||a[2]!==o||a[3]!==r||a[4]!==I||a[5]!==M||a[6]!==c)t=e(rtr,{confirmLabel:s,cancelLabel:i,onConfirm:r,onCancel:o,refuseInput:M,openedAt:I,windowMs:c}),a[0]=i,a[1]=s,a[2]=o,a[3]=r,a[4]=I,a[5]=M,a[6]=c,a[7]=t;else t=a[7];return t}let c;if(a[8]!==s||a[9]!==l)c=l?s:e(n,{dimColor:!0,children:s}),a[8]=s,a[9]=l,a[10]=c;else c=a[10];let t;if(a[11]!==c)t={label:c,value:"confirm"},a[11]=c,a[12]=t;else t=a[12];let m=t,f;if(a[13]!==i||a[14]!==l)f=l?i:e(n,{dimColor:!0,children:i}),a[13]=i,a[14]=l,a[15]=f;else f=a[15];let k;if(a[16]!==f)k={label:f,value:"cancel"},a[16]=f,a[17]=k;else k=a[17];let d=k,u;if(a[18]!==d||a[19]!==x||a[20]!==m)u=x?[d,m]:[m,d],a[18]=d,a[19]=x,a[20]=m,a[21]=u;else u=a[21];const S=!l;let b;if(a[22]!==o||a[23]!==r)b=(j)=>j==="confirm"?r():o(),a[22]=o,a[23]=r,a[24]=b;else b=a[24];let q;if(a[25]!==N||a[26]!==o||a[27]!==E||a[28]!==u||a[29]!==S||a[30]!==b)q=e(Ye,{options:u,selectedValue:Mi,hideIndexes:N,isDisabled:S,defaultFocusValue:E,onChange:b,onCancel:o}),a[25]=N,a[26]=o,a[27]=E,a[28]=u,a[29]=S,a[30]=b,a[31]=q;else q=a[31];return q}
export{jZn,Lze,ar};
