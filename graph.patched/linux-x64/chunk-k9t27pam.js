// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{y}from"./chunk-a5ahs27a.js";import{oO}from"./chunk-1e5y3pjf.js";import{o,t,ut}from"./chunk-snr8xejh.js";import{Hi}from"./chunk-8e2vctjv.js";import{Ur}from"./chunk-540nc038.js";import{e,r}from"./chunk-ys8dsnqt.js";import{A,u,F}from"./chunk-v59pjxqq.js";import{d}from"./chunk-5nnrmmhw.js";F();function T(p,N){let b=p.match(k);if(!b){return e(t,{dimColor:!0,children:p},N)}let S=b[0];let P=b.index??0;let J=p.slice(0,P);let K=p.slice(P+S.length);return r(t,{dimColor:!0,children:[J,e(ut,{url:S,children:S}),K]},N)}var k=/https?:\/\/\S+/;function fge(){let c=y(10),I;if(c[0]===d)I=oO.getInstance().getStatus(),c[0]=I;else I=c[0];let[n,H]=u(I),B,D;if(c[1]===d)B=()=>oO.getInstance().subscribe(H),D=[],c[1]=B,c[2]=D;else B=c[1],D=c[2];if(A(B,D),!n.isAuthenticating&&!n.error&&n.output.length===0){return null}if(!n.isAuthenticating&&!n.error){return null}let l;if(c[3]!==n.output)l=n.output.length>0&&e(o,{flexDirection:"column",children:n.output.slice(-5).map(T)}),c[3]=n.output,c[4]=l;else l=c[4];let f;if(c[5]!==n.error)f=n.error&&e(Ur,{error:n.error}),c[5]=n.error,c[6]=f;else f=c[6];let L;if(c[7]!==l||c[8]!==f)L=e(o,{marginY:1,children:r(Hi,{color:"permission",title:"Authentication",children:[l,f]})}),c[7]=l,c[8]=f,c[9]=L;else L=c[9];return L}
export{fge};
