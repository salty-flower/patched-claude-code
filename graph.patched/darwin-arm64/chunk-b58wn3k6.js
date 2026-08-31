// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{_}from"./chunk-rykc5fv4.js";import{iN}from"./chunk-bsdtxcdc.js";import{o,t,ut}from"./chunk-hm4dvvtr.js";import{wi}from"./chunk-x19dwg0t.js";import{Br}from"./chunk-tm1qm6mf.js";import{e,r}from"./chunk-wk3xnwvn.js";import{A,u,F}from"./chunk-w6mhhrt2.js";import{d}from"./chunk-rqyyny1n.js";F();function P(p,L){let b=p.match(S);if(!b){return e(t,{dimColor:!0,children:p},L)}let y=b[0];let N=b.index??0;let H=p.slice(0,N);let J=p.slice(N+y.length);return r(t,{dimColor:!0,children:[H,e(ut,{url:y,children:y}),J]},L)}var S=/https?:\/\/\S+/;function _ge(){let c=_(10),C;if(c[0]===d)C=iN.getInstance().getStatus(),c[0]=C;else C=c[0];let[n,G]=u(C),I,B;if(c[1]===d)I=()=>iN.getInstance().subscribe(G),B=[],c[1]=I,c[2]=B;else I=c[1],B=c[2];if(A(I,B),!n.isAuthenticating&&!n.error&&n.output.length===0){return null}if(!n.isAuthenticating&&!n.error){return null}let l;if(c[3]!==n.output)l=n.output.length>0&&e(o,{flexDirection:"column",children:n.output.slice(-5).map(P)}),c[3]=n.output,c[4]=l;else l=c[4];let f;if(c[5]!==n.error)f=n.error&&e(Br,{error:n.error}),c[5]=n.error,c[6]=f;else f=c[6];let D;if(c[7]!==l||c[8]!==f)D=e(o,{marginY:1,children:r(wi,{color:"permission",title:"Authentication",children:[l,f]})}),c[7]=l,c[8]=f,c[9]=D;else D=c[9];return D}
export{_ge};
