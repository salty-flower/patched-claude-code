// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Fk,CP}from"./chunk-30yzdvqs.js";import{y}from"./chunk-spjasdq6.js";import{o0n,Hnt}from"./chunk-ce4ppmnp.js";import{o,n}from"./chunk-q8bwyp41.js";import{wc}from"./chunk-har75cv2.js";import{O}from"./chunk-tgbkem1t.js";import{e,r}from"./chunk-qs39f0kj.js";import{G,L}from"./chunk-kt4npzgg.js";import{D}from"./chunk-7d1jtnwx.js";import{p}from"./chunk-3anr60sp.js";var h="cyan_FOR_SUBAGENTS_ONLY";function Ew(t){if(!t)return h;if(CP(t))return Fk[t];return`ansi:${t}`}L();var N={keyCase:"lower"};function n2(Q){let i=y(18),{displayName:_,count:k,addMargin:S,fallbackLabel:x,body:a}=Q,B=k===void 0?1:k,V=S===void 0?!0:S,C=wc("app:toggleTranscript","Global","ctrl+o"),F;if(i[0]!==_||i[1]!==x)F=Hnt(_)||x,i[0]=_,i[1]=x,i[2]=F;else F=i[2];let E=F,H;if(i[3]!==a)H=a?o0n(a):"",i[3]=a,i[4]=H;else H=i[4];let m=H;const u=V?1:0;let U;if(i[5]===p)U=r(n,{"aria-hidden":!0,children:[D.pointerSmall," "]}),i[5]=U;else U=i[5];const R=B===1?"Message":`${B} messages`;let f;if(i[6]!==m)f=m?r(n,{italic:!0,children:[": ",m]}):"",i[6]=m,i[7]=f;else f=i[7];let c;if(i[8]!==C)c=e(O,{chord:C,action:"expand",parens:!0,format:N}),i[8]=C,i[9]=c;else c=i[9];let T;if(i[10]!==E||i[11]!==R||i[12]!==f||i[13]!==c)T=r(n,{dimColor:!0,children:[U,R," from @",E,f," ",c]}),i[10]=E,i[11]=R,i[12]=f,i[13]=c,i[14]=T;else T=i[14];let b;if(i[15]!==T||i[16]!==u)b=e(o,{marginTop:u,children:T}),i[15]=T,i[16]=u,i[17]=b;else b=i[17];return b}
export{Ew,n2};
