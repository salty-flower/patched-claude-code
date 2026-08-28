// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{g}from"./chunk-yhctzac5.js";import{IM}from"./chunk-ns0ekkj0.js";import{o,t,it}from"./chunk-167xpx5m.js";import{vi}from"./chunk-15153kqw.js";import{Ir}from"./chunk-s837m44b.js";import{e,r}from"./chunk-azctepqx.js";import{A,u,N}from"./chunk-q0z49y3j.js";import{p}from"./chunk-by569dsf.js";N();function Y(h,P){let S=h.match(k);if(!S){return e(t,{dimColor:!0,children:h},P)}let d=S[0];let T=S.index??0;let J=h.slice(0,T);let K=h.slice(T+d.length);return r(t,{dimColor:!0,children:[J,e(it,{url:d,children:d}),K]},P)}var k=/https?:\/\/\S+/;function _ke(){let c=g(10),I;if(c[0]===p)I=IM.getInstance().getStatus(),c[0]=I;else I=c[0];let[n,H]=u(I),B,D;if(c[1]===p)B=()=>IM.getInstance().subscribe(H),D=[],c[1]=B,c[2]=D;else B=c[1],D=c[2];if(A(B,D),!n.isAuthenticating&&!n.error&&n.output.length===0){return null}if(!n.isAuthenticating&&!n.error){return null}let l;if(c[3]!==n.output)l=n.output.length>0&&e(o,{flexDirection:"column",children:n.output.slice(-5).map(Y)}),c[3]=n.output,c[4]=l;else l=c[4];let f;if(c[5]!==n.error)f=n.error&&e(Ir,{error:n.error}),c[5]=n.error,c[6]=f;else f=c[6];let L;if(c[7]!==l||c[8]!==f)L=e(o,{marginY:1,children:r(vi,{color:"permission",title:"Authentication",children:[l,f]})}),c[7]=l,c[8]=f,c[9]=L;else L=c[9];return L}
export{_ke};
