// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{y}from"./chunk-pqa42v56.js";import{y1}from"./chunk-vtwn1md5.js";import{o,n,ht}from"./chunk-86a8apqx.js";import{Pi}from"./chunk-rhb28qah.js";import{Vr}from"./chunk-13pew187.js";import{e,r}from"./chunk-6ccz96s4.js";import{C,p,j}from"./chunk-8wk5q2vw.js";import{f}from"./chunk-agfzafth.js";j();function T(h,N){let A=h.match(d);if(!A){return e(n,{dimColor:!0,children:h},N)}let S=A[0];let P=A.index??0;let H=h.slice(0,P);let J=h.slice(P+S.length);return r(n,{dimColor:!0,children:[H,e(ht,{url:S,children:S}),J]},N)}var d=/https?:\/\/\S+/;function aSe(){let i=y(10),I;if(i[0]===f)I=y1.getInstance().getStatus(),i[0]=I;else I=i[0];let[t,G]=p(I),B,D;if(i[1]===f)B=()=>y1.getInstance().subscribe(G),D=[],i[1]=B,i[2]=D;else B=i[1],D=i[2];if(C(B,D),!t.isAuthenticating&&!t.error&&t.output.length===0){return null}if(!t.isAuthenticating&&!t.error){return null}let a;if(i[3]!==t.output)a=t.output.length>0&&e(o,{flexDirection:"column",children:t.output.slice(-5).map(T)}),i[3]=t.output,i[4]=a;else a=i[4];let l;if(i[5]!==t.error)l=t.error&&e(Vr,{error:t.error}),i[5]=t.error,i[6]=l;else l=i[6];let L;if(i[7]!==a||i[8]!==l)L=e(o,{marginY:1,children:r(Pi,{color:"permission",title:"Authentication",children:[a,l]})}),i[7]=a,i[8]=l,i[9]=L;else L=i[9];return L}
export{aSe};
