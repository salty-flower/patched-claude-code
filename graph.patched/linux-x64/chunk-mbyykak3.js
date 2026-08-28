// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{g}from"./chunk-yhctzac5.js";import{ine}from"./chunk-cgwm6n4d.js";import{t}from"./chunk-167xpx5m.js";import{au}from"./chunk-qt6d5tcj.js";import{P}from"./chunk-xe1bmz2a.js";import{q2}from"./chunk-56nrp9ge.js";import{O,e,r}from"./chunk-azctepqx.js";import{fn,ze,N}from"./chunk-q0z49y3j.js";import{p}from"./chunk-by569dsf.js";N();N();var n=fn(!1);function rke(q){let w=g(2),{children:l}=q,x;if(w[0]!==l)x=e(n.Provider,{value:!0,children:l}),w[0]=l,w[1]=x;else x=w[1];return x}function hc(){let b=g(3),z=ze(n),B=ze(q2),d=au("app:toggleTranscript","Global","ctrl+o");if(z||B){return null}let h;if(b[0]===p)h={keyCase:"lower"},b[0]=h;else h=b[0];let v;if(b[1]!==d)v=e(t,{dimColor:!0,children:e(P,{chord:d,action:"expand",parens:!0,format:h})}),b[1]=d,b[2]=v;else v=b[2];return v}function vm(Q){let u=g(8),{count:c,unit:y,expandable:C}=Q,s=y===void 0?"line":y,R=C===void 0?!1:C;if(c<=0){return null}let f;if(u[0]!==c||u[1]!==s)f=ine(c,s),u[0]=c,u[1]=s,u[2]=f;else f=u[2];let m;if(u[3]!==R)m=R&&r(O,{children:[" ",e(hc,{})]}),u[3]=R,u[4]=m;else m=u[4];let T;if(u[5]!==f||u[6]!==m)T=r(t,{dimColor:!0,children:[f,m]}),u[5]=f,u[6]=m,u[7]=T;else T=u[7];return T}
export{rke,hc,vm};
