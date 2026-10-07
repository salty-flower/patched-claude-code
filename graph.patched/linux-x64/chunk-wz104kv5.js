// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{UM,a1}from"./chunk-aj0rppsq.js";import{w}from"./chunk-fetrqmkr.js";import{ert,zYt}from"./chunk-hdjzp1hc.js";import{s,n}from"./chunk-c66e3zm1.js";import{X,L}from"./chunk-1mwacejt.js";import{yl}from"./chunk-k0agq3w8.js";import{W}from"./chunk-032j5f79.js";import{e,r}from"./chunk-mq8eg5v4.js";import{Z}from"./chunk-3yjjts62.js";import{S}from"./chunk-grvgfqgm.js";var v="cyan_FOR_SUBAGENTS_ONLY";function dx(a){if(!a)return v;if(a1(a))return UM[a];return`ansi:${a}`}L();var N={keyCase:"lower"};function XJ(a){let o=w(19),{displayName:f,qualifier:k,count:M,addMargin:R,fallbackLabel:c,body:t}=a,h=M===void 0?1:M,U=R===void 0?!0:R,b=yl("app:toggleTranscript","Global","ctrl+o"),A;if(o[0]!==f||o[1]!==c)A=ert(f)||c,o[0]=f,o[1]=c,o[2]=A;else A=o[2];let u=A,P;if(o[3]!==t)P=t?zYt(t):"",o[3]=t,o[4]=P;else P=o[4];let i=P;const g=U?1:0;let q;if(o[5]===S)q=r(n,{"aria-hidden":!0,children:[Z.pointerSmall," "]}),o[5]=q;else q=o[5];const y=h===1?"Message":`${h} messages`,T=k?` (${k})`:"";let p;if(o[6]!==i)p=i?r(n,{italic:!0,children:[": ",i]}):"",o[6]=i,o[7]=p;else p=o[7];let l;if(o[8]!==b)l=e(W,{chord:b,action:"expand",parens:!0,format:N}),o[8]=b,o[9]=l;else l=o[9];let m;if(o[10]!==u||o[11]!==l||o[12]!==y||o[13]!==T||o[14]!==p)m=r(n,{dimColor:!0,children:[q,y," from @",u,T,p," ",l]}),o[10]=u,o[11]=l,o[12]=y,o[13]=T,o[14]=p,o[15]=m;else m=o[15];let G;if(o[16]!==m||o[17]!==g)G=e(s,{marginTop:g,children:m}),o[16]=m,o[17]=g,o[18]=G;else G=o[18];return G}
export{dx,XJ};
