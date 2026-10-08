// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{AH,kj}from"./chunk-bcvk3m9b.js";import{w}from"./chunk-p3sxj9wz.js";import{Cit,a7t}from"./chunk-kbn00z3m.js";import{s,n}from"./chunk-8pkmgy8b.js";import{J,N}from"./chunk-f6geyac8.js";import{qa}from"./chunk-v2zdwgg1.js";import{G}from"./chunk-82zheyd6.js";import{e,r}from"./chunk-efrp9dmx.js";import{ee}from"./chunk-10cr42r7.js";import{b}from"./chunk-8drz5tx3.js";var B="cyan_FOR_SUBAGENTS_ONLY";function Lx(a){if(!a)return B;if(kj(a))return AH[a];return`ansi:${a}`}N();var x={keyCase:"lower"};function PQ(a){let o=w(19),{displayName:f,qualifier:M,count:R,addMargin:h,fallbackLabel:c,body:t}=a,A=R===void 0?1:R,D=h===void 0?!0:h,u=qa("app:toggleTranscript","Global","ctrl+o"),P;if(o[0]!==f||o[1]!==c)P=Cit(f)||c,o[0]=f,o[1]=c,o[2]=P;else P=o[2];let g=P,q;if(o[3]!==t)q=t?a7t(t):"",o[3]=t,o[4]=q;else q=o[4];let i=q;const y=D?1:0;let v;if(o[5]===b)v=r(n,{"aria-hidden":!0,children:[ee.pointerSmall," "]}),o[5]=v;else v=o[5];const T=A===1?"Message":`${A} messages`,_=M?` (${M})`:"";let p;if(o[6]!==i)p=i?r(n,{italic:!0,children:[": ",i]}):"",o[6]=i,o[7]=p;else p=o[7];let l;if(o[8]!==u)l=e(G,{chord:u,action:"expand",parens:!0,format:x}),o[8]=u,o[9]=l;else l=o[9];let m;if(o[10]!==g||o[11]!==l||o[12]!==T||o[13]!==_||o[14]!==p)m=r(n,{dimColor:!0,children:[v,T," from @",g,_,p," ",l]}),o[10]=g,o[11]=l,o[12]=T,o[13]=_,o[14]=p,o[15]=m;else m=o[15];let S;if(o[16]!==m||o[17]!==y)S=e(s,{marginTop:y,children:m}),o[16]=m,o[17]=y,o[18]=S;else S=o[18];return S}
export{Lx,PQ};
