// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{BM,D2}from"./chunk-1z1j45h7.js";import{w}from"./chunk-2mxgft48.js";import{sdt,itn}from"./chunk-64ag51qf.js";import{s,n}from"./chunk-1r9zp6s1.js";import{Z,N}from"./chunk-kexg5hxg.js";import{ma}from"./chunk-z3f0m1q8.js";import{z}from"./chunk-0qkpwgr4.js";import{e,r}from"./chunk-d5st5fww.js";import{te}from"./chunk-04v7vxqn.js";import{b}from"./chunk-txt1tvjz.js";var S="cyan_FOR_SUBAGENTS_ONLY";function YP(a){if(!a)return S;if(D2(a))return BM[a];return`ansi:${a}`}N();var x={keyCase:"lower"};function Cee(a){let o=w(19),{displayName:f,qualifier:M,count:R,addMargin:h,fallbackLabel:c,body:t}=a,A=R===void 0?1:R,U=h===void 0?!0:h,u=ma("app:toggleTranscript","Global","ctrl+o"),P;if(o[0]!==f||o[1]!==c)P=sdt(f)||c,o[0]=f,o[1]=c,o[2]=P;else P=o[2];let g=P,q;if(o[3]!==t)q=t?itn(t):"",o[3]=t,o[4]=q;else q=o[4];let i=q;const y=U?1:0;let G;if(o[5]===b)G=r(n,{"aria-hidden":!0,children:[te.pointerSmall," "]}),o[5]=G;else G=o[5];const T=A===1?"Message":`${A} messages`,_=M?` (${M})`:"";let p;if(o[6]!==i)p=i?r(n,{italic:!0,children:[": ",i]}):"",o[6]=i,o[7]=p;else p=o[7];let l;if(o[8]!==u)l=e(z,{chord:u,action:"expand",parens:!0,format:x}),o[8]=u,o[9]=l;else l=o[9];let m;if(o[10]!==g||o[11]!==l||o[12]!==T||o[13]!==_||o[14]!==p)m=r(n,{dimColor:!0,children:[G,T," from @",g,_,p," ",l]}),o[10]=g,o[11]=l,o[12]=T,o[13]=_,o[14]=p,o[15]=m;else m=o[15];let v;if(o[16]!==m||o[17]!==y)v=e(s,{marginTop:y,children:m}),o[16]=m,o[17]=y,o[18]=v;else v=o[18];return v}
export{YP,Cee};
