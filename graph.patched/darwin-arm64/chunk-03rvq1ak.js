// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{YP}from"./chunk-5b4s2jqq.js";import{we}from"./chunk-zvbtt3p1.js";import{_}from"./chunk-0jrfbepr.js";import{n,Kr,C9}from"./chunk-t50adtrb.js";import{e,r}from"./chunk-v5r13aq1.js";import{se}from"./chunk-z7cyba28.js";function wl(I){let a=_(27),{width:J,color:t,char:w,padding:N,title:o,titleAlign:j}=I,i=w===void 0?YP:w,K=N===void 0?0:N,L=j===void 0?"center":j,{columns:O}=we(),l=Math.max(0,(J??O)-K),q;if(a[0]!==t||a[1]!==o)q=o?e(n,{color:t,dimColor:!t,children:e(Kr,{children:o})}):null,a[0]=t,a[1]=o,a[2]=q;else q=a[2];let y=q;if(o){let Q=se(o)+2;let C=Math.max(0,l-Q);let u=L==="start"?Math.min(4,C):Math.floor(C/2);let M=C-u;const d=!t;let m;if(a[3]!==i||a[4]!==u)m=i.repeat(u),a[3]=i,a[4]=u,a[5]=m;else m=a[5];let f;if(a[6]!==o)f=e(n,{dimColor:!0,children:e(Kr,{children:o})}),a[6]=o,a[7]=f;else f=a[7];let W;if(a[8]!==i||a[9]!==M)W=i.repeat(M),a[8]=i,a[9]=M,a[10]=W;else W=a[10];let g;if(a[11]!==t||a[12]!==d||a[13]!==m||a[14]!==f||a[15]!==W)g=r(n,{color:t,dimColor:d,children:[m," ",f," ",W]}),a[11]=t,a[12]=d,a[13]=m,a[14]=f,a[15]=W,a[16]=g;else g=a[16];let z;if(a[17]!==y||a[18]!==g)z=e(C9,{fallback:y,children:g}),a[17]=y,a[18]=g,a[19]=z;else z=a[19];return z}const d=!t;let m;if(a[20]!==i||a[21]!==l)m=i.repeat(l),a[20]=i,a[21]=l,a[22]=m;else m=a[22];let f;if(a[23]!==t||a[24]!==d||a[25]!==m)f=e(C9,{children:e(n,{color:t,dimColor:d,children:m})}),a[23]=t,a[24]=d,a[25]=m,a[26]=f;else f=a[26];return f}
export{wl};
