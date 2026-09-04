// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{TA,i0}from"./chunk-x9bmv596.js";import{y}from"./chunk-pqa42v56.js";import{SRn,JQe}from"./chunk-vtwn1md5.js";import{o,n}from"./chunk-86a8apqx.js";import{cp}from"./chunk-1xrs8jfw.js";import{F}from"./chunk-fhvktrb2.js";import{e,r}from"./chunk-6ccz96s4.js";import{K,j}from"./chunk-8wk5q2vw.js";import{N}from"./chunk-4c39ep6f.js";import{f}from"./chunk-agfzafth.js";var P="cyan_FOR_SUBAGENTS_ONLY";function nw(t){if(!t)return P;if(i0(t))return TA[t];return`ansi:${t}`}j();var R={keyCase:"lower"};function f2(Q){let i=y(18),{displayName:_,count:h,addMargin:G,fallbackLabel:O,body:a}=Q,k=h===void 0?1:h,V=G===void 0?!0:G,x=cp("app:toggleTranscript","Global","ctrl+o"),S;if(i[0]!==_||i[1]!==O)S=JQe(_)||O,i[0]=_,i[1]=O,i[2]=S;else S=i[2];let C=S,B;if(i[3]!==a)B=a?SRn(a):"",i[3]=a,i[4]=B;else B=i[4];let p=B;const E=V?1:0;let H;if(i[5]===f)H=r(n,{"aria-hidden":!0,children:[N.pointerSmall," "]}),i[5]=H;else H=i[5];const u=k===1?"Message":`${k} messages`;let m;if(i[6]!==p)m=p?r(n,{italic:!0,children:[": ",p]}):"",i[6]=p,i[7]=m;else m=i[7];let c;if(i[8]!==x)c=e(F,{chord:x,action:"expand",parens:!0,format:R}),i[8]=x,i[9]=c;else c=i[9];let T;if(i[10]!==C||i[11]!==u||i[12]!==m||i[13]!==c)T=r(n,{dimColor:!0,children:[H,u," from @",C,m," ",c]}),i[10]=C,i[11]=u,i[12]=m,i[13]=c,i[14]=T;else T=i[14];let U;if(i[15]!==T||i[16]!==E)U=e(o,{marginTop:E,children:T}),i[15]=T,i[16]=E,i[17]=U;else U=i[17];return U}
export{nw,f2};
