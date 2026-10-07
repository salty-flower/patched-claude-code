// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{G0,bB}from"./chunk-wrwcn2zn.js";import{w}from"./chunk-k8a9av7b.js";import{lrt,i9t}from"./chunk-590ye0ab.js";import{s,n}from"./chunk-0x4ch5gg.js";import{J,L}from"./chunk-bkksmm2y.js";import{_l}from"./chunk-2hyeckhw.js";import{W}from"./chunk-vtb8s4aa.js";import{e,r}from"./chunk-mq8eg5v4.js";import{Z}from"./chunk-4javhxsa.js";import{b}from"./chunk-rnxw3wwn.js";var S="cyan_FOR_SUBAGENTS_ONLY";function fx(a){if(!a)return S;if(bB(a))return G0[a];return`ansi:${a}`}L();var _={keyCase:"lower"};function tJ(a){let o=w(19),{displayName:f,qualifier:M,count:R,addMargin:h,fallbackLabel:c,body:t}=a,A=R===void 0?1:R,U=h===void 0?!0:h,u=_l("app:toggleTranscript","Global","ctrl+o"),P;if(o[0]!==f||o[1]!==c)P=lrt(f)||c,o[0]=f,o[1]=c,o[2]=P;else P=o[2];let g=P,q;if(o[3]!==t)q=t?i9t(t):"",o[3]=t,o[4]=q;else q=o[4];let i=q;const y=U?1:0;let G;if(o[5]===b)G=r(n,{"aria-hidden":!0,children:[Z.pointerSmall," "]}),o[5]=G;else G=o[5];const T=A===1?"Message":`${A} messages`,N=M?` (${M})`:"";let p;if(o[6]!==i)p=i?r(n,{italic:!0,children:[": ",i]}):"",o[6]=i,o[7]=p;else p=o[7];let l;if(o[8]!==u)l=e(W,{chord:u,action:"expand",parens:!0,format:_}),o[8]=u,o[9]=l;else l=o[9];let m;if(o[10]!==g||o[11]!==l||o[12]!==T||o[13]!==N||o[14]!==p)m=r(n,{dimColor:!0,children:[G,T," from @",g,N,p," ",l]}),o[10]=g,o[11]=l,o[12]=T,o[13]=N,o[14]=p,o[15]=m;else m=o[15];let v;if(o[16]!==m||o[17]!==y)v=e(s,{marginTop:y,children:m}),o[16]=m,o[17]=y,o[18]=v;else v=o[18];return v}
export{fx,tJ};
