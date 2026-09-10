// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Uv,N0}from"./chunk-d6mvvjc5.js";import{y}from"./chunk-jy8hazaz.js";import{IIn,qnt}from"./chunk-e02s7cks.js";import{o,n}from"./chunk-ykvaeqdn.js";import{Ec}from"./chunk-tpv397gc.js";import{D}from"./chunk-1j0zv4y6.js";import{e,r}from"./chunk-qs39f0kj.js";import{G,M}from"./chunk-xgsrj7pc.js";import{L}from"./chunk-j227jy4h.js";import{p}from"./chunk-bkhfcpjc.js";var h="cyan_FOR_SUBAGENTS_ONLY";function vw(t){if(!t)return h;if(N0(t))return Uv[t];return`ansi:${t}`}M();var R={keyCase:"lower"};function fj(Q){let i=y(18),{displayName:_,count:k,addMargin:S,fallbackLabel:O,body:a}=Q,B=k===void 0?1:k,V=S===void 0?!0:S,x=Ec("app:toggleTranscript","Global","ctrl+o"),F;if(i[0]!==_||i[1]!==O)F=qnt(_)||O,i[0]=_,i[1]=O,i[2]=F;else F=i[2];let C=F,H;if(i[3]!==a)H=a?IIn(a):"",i[3]=a,i[4]=H;else H=i[4];let m=H;const E=V?1:0;let U;if(i[5]===p)U=r(n,{"aria-hidden":!0,children:[L.pointerSmall," "]}),i[5]=U;else U=i[5];const u=B===1?"Message":`${B} messages`;let f;if(i[6]!==m)f=m?r(n,{italic:!0,children:[": ",m]}):"",i[6]=m,i[7]=f;else f=i[7];let c;if(i[8]!==x)c=e(D,{chord:x,action:"expand",parens:!0,format:R}),i[8]=x,i[9]=c;else c=i[9];let T;if(i[10]!==C||i[11]!==u||i[12]!==f||i[13]!==c)T=r(n,{dimColor:!0,children:[U,u," from @",C,f," ",c]}),i[10]=C,i[11]=u,i[12]=f,i[13]=c,i[14]=T;else T=i[14];let b;if(i[15]!==T||i[16]!==E)b=e(o,{marginTop:E,children:T}),i[15]=T,i[16]=E,i[17]=b;else b=i[17];return b}
export{vw,fj};
