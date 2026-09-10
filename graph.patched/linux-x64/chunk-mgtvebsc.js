// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{UM}from"./chunk-vzc7jamd.js";import{be}from"./chunk-rk2hsayw.js";import{y}from"./chunk-spjasdq6.js";import{te}from"./chunk-dz6vh6s7.js";import{n,Lr,xq}from"./chunk-q8bwyp41.js";import{e,r}from"./chunk-qs39f0kj.js";function el(J){let a=y(27),{width:K,color:t,char:N,padding:j,title:o,titleAlign:q}=J,i=N===void 0?UM:N,L=j===void 0?0:j,O=q===void 0?"center":q,{columns:Q}=be(),l=Math.max(0,(K??Q)-L),z;if(a[0]!==t||a[1]!==o)z=o?e(n,{color:t,dimColor:!t,children:e(Lr,{children:o})}):null,a[0]=t,a[1]=o,a[2]=z;else z=a[2];let C=z;if(o){let S=te(o)+2;let M=Math.max(0,l-S);let u=O==="start"?Math.min(4,M):Math.floor(M/2);let k=M-u;const d=!t;let m;if(a[3]!==i||a[4]!==u)m=i.repeat(u),a[3]=i,a[4]=u,a[5]=m;else m=a[5];let f;if(a[6]!==o)f=e(n,{dimColor:!0,children:e(Lr,{children:o})}),a[6]=o,a[7]=f;else f=a[7];let W;if(a[8]!==i||a[9]!==k)W=i.repeat(k),a[8]=i,a[9]=k,a[10]=W;else W=a[10];let g;if(a[11]!==t||a[12]!==d||a[13]!==m||a[14]!==f||a[15]!==W)g=r(n,{color:t,dimColor:d,children:[m," ",f," ",W]}),a[11]=t,a[12]=d,a[13]=m,a[14]=f,a[15]=W,a[16]=g;else g=a[16];let B;if(a[17]!==C||a[18]!==g)B=e(xq,{fallback:C,children:g}),a[17]=C,a[18]=g,a[19]=B;else B=a[19];return B}const d=!t;let m;if(a[20]!==i||a[21]!==l)m=i.repeat(l),a[20]=i,a[21]=l,a[22]=m;else m=a[22];let f;if(a[23]!==t||a[24]!==d||a[25]!==m)f=e(xq,{children:e(n,{color:t,dimColor:d,children:m})}),a[23]=t,a[24]=d,a[25]=m,a[26]=f;else f=a[26];return f}
export{el};
