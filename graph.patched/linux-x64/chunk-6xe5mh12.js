// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{y}from"./chunk-a5ahs27a.js";import{voe}from"./chunk-j35pah18.js";import{t}from"./chunk-snr8xejh.js";import{uu}from"./chunk-exk8kr77.js";import{O}from"./chunk-kzjewftw.js";import{jz}from"./chunk-1q4734qg.js";import{B,e,r}from"./chunk-ys8dsnqt.js";import{_n,ze,F}from"./chunk-v59pjxqq.js";import{d}from"./chunk-5nnrmmhw.js";F();F();var n=_n(!1);function GTe(S){let V=y(2),{children:m}=S,x;if(V[0]!==m)x=e(n.Provider,{value:!0,children:m}),V[0]=m,V[1]=x;else x=V[1];return x}function Wc(){let b=y(3),q=ze(n),w=ze(jz),l=uu("app:toggleTranscript","Global","ctrl+o");if(q||w){return null}let g;if(b[0]===d)g={keyCase:"lower"},b[0]=g;else g=b[0];let N;if(b[1]!==l)N=e(t,{dimColor:!0,children:e(O,{chord:l,action:"expand",parens:!0,format:g})}),b[1]=l,b[2]=N;else N=b[2];return N}function Xm(Q){let u=y(8),{count:c,unit:P,expandable:h}=Q,s=P===void 0?"line":P,R=h===void 0?!1:h;if(c<=0){return null}let p;if(u[0]!==c||u[1]!==s)p=voe(c,s),u[0]=c,u[1]=s,u[2]=p;else p=u[2];let f;if(u[3]!==R)f=R&&r(B,{children:[" ",e(Wc,{})]}),u[3]=R,u[4]=f;else f=u[4];let v;if(u[5]!==p||u[6]!==f)v=r(t,{dimColor:!0,children:[p,f]}),u[5]=p,u[6]=f,u[7]=v;else v=u[7];return v}
export{GTe,Wc,Xm};
