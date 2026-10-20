// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{WL,tz}from"./chunk-2fjhf8xz.js";import{w}from"./chunk-mjaw4h5n.js";import{_St,nmn}from"./chunk-drp9p5tr.js";import{s,n}from"./chunk-t3eqa5fc.js";import{Ga}from"./chunk-7wrxkdvf.js";import{q}from"./chunk-z38r0bqh.js";import{e,r}from"./chunk-q4w894bt.js";import{ne}from"./chunk-vkrc4hjz.js";import{ee,B}from"./chunk-2txtxkxk.js";import{b}from"./chunk-8xa87pyw.js";var S="cyan_FOR_SUBAGENTS_ONLY";function NO(a){if(!a)return S;if(tz(a))return WL[a];return`ansi:${a}`}B();var _={keyCase:"lower"};function koe(a){let o=w(19),{displayName:f,qualifier:k,count:M,addMargin:R,fallbackLabel:c,body:t}=a,h=M===void 0?1:M,D=R===void 0?!0:R,u=Ga("app:toggleTranscript","Global","ctrl+o"),A;if(o[0]!==f||o[1]!==c)A=_St(f)||c,o[0]=f,o[1]=c,o[2]=A;else A=o[2];let g=A,P;if(o[3]!==t)P=t?nmn(t):"",o[3]=t,o[4]=P;else P=o[4];let i=P;const y=D?1:0;let G;if(o[5]===b)G=r(n,{"aria-hidden":!0,children:[ne.pointerSmall," "]}),o[5]=G;else G=o[5];const T=h===1?"Message":`${h} messages`,N=k?` (${k})`:"";let p;if(o[6]!==i)p=i?r(n,{italic:!0,children:[": ",i]}):"",o[6]=i,o[7]=p;else p=o[7];let l;if(o[8]!==u)l=e(q,{chord:u,action:"expand",parens:!0,format:_}),o[8]=u,o[9]=l;else l=o[9];let m;if(o[10]!==g||o[11]!==l||o[12]!==T||o[13]!==N||o[14]!==p)m=r(n,{dimColor:!0,children:[G,T," from @",g,N,p," ",l]}),o[10]=g,o[11]=l,o[12]=T,o[13]=N,o[14]=p,o[15]=m;else m=o[15];let v;if(o[16]!==m||o[17]!==y)v=e(s,{marginTop:y,children:m}),o[16]=m,o[17]=y,o[18]=v;else v=o[18];return v}
export{NO,koe};
