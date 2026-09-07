// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{RE,lR}from"./chunk-grcazzk3.js";import{y}from"./chunk-wdpeygc3.js";import{jEn,PJe}from"./chunk-3e93vkg3.js";import{o,n}from"./chunk-bkvzfc5q.js";import{oc}from"./chunk-4mje1r4k.js";import{D}from"./chunk-ymd1zt21.js";import{e,r}from"./chunk-smtaex5n.js";import{z,N}from"./chunk-vm1tjjym.js";import{M}from"./chunk-axc6wfft.js";import{p}from"./chunk-55pqc2de.js";var h="cyan_FOR_SUBAGENTS_ONLY";function TS(t){if(!t)return h;if(lR(t))return RE[t];return`ansi:${t}`}N();var R={keyCase:"lower"};function tU(Q){let i=y(18),{displayName:_,count:G,addMargin:k,fallbackLabel:O,body:a}=Q,S=G===void 0?1:G,V=k===void 0?!0:k,x=oc("app:toggleTranscript","Global","ctrl+o"),B;if(i[0]!==_||i[1]!==O)B=PJe(_)||O,i[0]=_,i[1]=O,i[2]=B;else B=i[2];let C=B,F;if(i[3]!==a)F=a?jEn(a):"",i[3]=a,i[4]=F;else F=i[4];let m=F;const E=V?1:0;let H;if(i[5]===p)H=r(n,{"aria-hidden":!0,children:[M.pointerSmall," "]}),i[5]=H;else H=i[5];const u=S===1?"Message":`${S} messages`;let f;if(i[6]!==m)f=m?r(n,{italic:!0,children:[": ",m]}):"",i[6]=m,i[7]=f;else f=i[7];let c;if(i[8]!==x)c=e(D,{chord:x,action:"expand",parens:!0,format:R}),i[8]=x,i[9]=c;else c=i[9];let T;if(i[10]!==C||i[11]!==u||i[12]!==f||i[13]!==c)T=r(n,{dimColor:!0,children:[H,u," from @",C,f," ",c]}),i[10]=C,i[11]=u,i[12]=f,i[13]=c,i[14]=T;else T=i[14];let U;if(i[15]!==T||i[16]!==E)U=e(o,{marginTop:E,children:T}),i[15]=T,i[16]=E,i[17]=U;else U=i[17];return U}
export{TS,tU};
