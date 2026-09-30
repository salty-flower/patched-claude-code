// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{mI,s$}from"./chunk-swv3mpcg.js";import{w}from"./chunk-naky2abr.js";import{EUt,AUt}from"./chunk-fh513ghb.js";import{s,n}from"./chunk-behv2vm9.js";import{Y,M}from"./chunk-757fgf90.js";import{cl}from"./chunk-8z5cnbhk.js";import{F}from"./chunk-xjc7gdgb.js";import{e,r}from"./chunk-ne6sbmea.js";import{Q}from"./chunk-0h8ysfnq.js";import{b}from"./chunk-pj3wn6z3.js";var S="cyan_FOR_SUBAGENTS_ONLY";function mk(a){if(!a)return S;if(s$(a))return mI[a];return`ansi:${a}`}M();var _={keyCase:"lower"};function m8(a){let o=w(19),{displayName:f,qualifier:k,count:R,addMargin:h,fallbackLabel:c,body:t}=a,A=R===void 0?1:R,D=h===void 0?!0:h,u=cl("app:toggleTranscript","Global","ctrl+o"),P;if(o[0]!==f||o[1]!==c)P=EUt(f)||c,o[0]=f,o[1]=c,o[2]=P;else P=o[2];let g=P,q;if(o[3]!==t)q=t?AUt(t):"",o[3]=t,o[4]=q;else q=o[4];let i=q;const y=D?1:0;let G;if(o[5]===b)G=r(n,{"aria-hidden":!0,children:[Q.pointerSmall," "]}),o[5]=G;else G=o[5];const T=A===1?"Message":`${A} messages`,N=k?` (${k})`:"";let p;if(o[6]!==i)p=i?r(n,{italic:!0,children:[": ",i]}):"",o[6]=i,o[7]=p;else p=o[7];let l;if(o[8]!==u)l=e(F,{chord:u,action:"expand",parens:!0,format:_}),o[8]=u,o[9]=l;else l=o[9];let m;if(o[10]!==g||o[11]!==l||o[12]!==T||o[13]!==N||o[14]!==p)m=r(n,{dimColor:!0,children:[G,T," from @",g,N,p," ",l]}),o[10]=g,o[11]=l,o[12]=T,o[13]=N,o[14]=p,o[15]=m;else m=o[15];let v;if(o[16]!==m||o[17]!==y)v=e(s,{marginTop:y,children:m}),o[16]=m,o[17]=y,o[18]=v;else v=o[18];return v}
export{mk,m8};
