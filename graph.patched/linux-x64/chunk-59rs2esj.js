// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{vH,uj}from"./chunk-s80xexkt.js";import{w}from"./chunk-c74pxqn1.js";import{yit,GXt}from"./chunk-5pdrsybf.js";import{s,n}from"./chunk-13cxqtms.js";import{X,N}from"./chunk-y6zm4y48.js";import{qa}from"./chunk-n74xwe38.js";import{z}from"./chunk-7wr4a45y.js";import{e,r}from"./chunk-efrp9dmx.js";import{ee}from"./chunk-zj79z01y.js";import{S}from"./chunk-0y12vz6b.js";var v="cyan_FOR_SUBAGENTS_ONLY";function Mx(a){if(!a)return v;if(uj(a))return vH[a];return`ansi:${a}`}N();var _={keyCase:"lower"};function v7(a){let o=w(19),{displayName:f,qualifier:k,count:M,addMargin:R,fallbackLabel:c,body:t}=a,h=M===void 0?1:M,U=R===void 0?!0:R,b=qa("app:toggleTranscript","Global","ctrl+o"),A;if(o[0]!==f||o[1]!==c)A=yit(f)||c,o[0]=f,o[1]=c,o[2]=A;else A=o[2];let u=A,P;if(o[3]!==t)P=t?GXt(t):"",o[3]=t,o[4]=P;else P=o[4];let i=P;const g=U?1:0;let q;if(o[5]===S)q=r(n,{"aria-hidden":!0,children:[ee.pointerSmall," "]}),o[5]=q;else q=o[5];const y=h===1?"Message":`${h} messages`,T=k?` (${k})`:"";let p;if(o[6]!==i)p=i?r(n,{italic:!0,children:[": ",i]}):"",o[6]=i,o[7]=p;else p=o[7];let l;if(o[8]!==b)l=e(z,{chord:b,action:"expand",parens:!0,format:_}),o[8]=b,o[9]=l;else l=o[9];let m;if(o[10]!==u||o[11]!==l||o[12]!==y||o[13]!==T||o[14]!==p)m=r(n,{dimColor:!0,children:[q,y," from @",u,T,p," ",l]}),o[10]=u,o[11]=l,o[12]=y,o[13]=T,o[14]=p,o[15]=m;else m=o[15];let G;if(o[16]!==m||o[17]!==g)G=e(s,{marginTop:g,children:m}),o[16]=m,o[17]=g,o[18]=G;else G=o[18];return G}
export{Mx,v7};
