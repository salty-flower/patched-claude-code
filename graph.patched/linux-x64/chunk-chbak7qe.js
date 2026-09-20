// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{S}from"./chunk-6qjhsn35.js";import{nW}from"./chunk-30p0nwys.js";import{s,n,ft}from"./chunk-g8n1e3fe.js";import{Ws}from"./chunk-45kjg7ez.js";import{Xr}from"./chunk-fnn6m21e.js";import{e,r}from"./chunk-437ab22y.js";import{k,d,L}from"./chunk-cf8g1269.js";import{y}from"./chunk-bbmh8g33.js";L();function Y(f,P){let g=f.match(A);if(!g){return e(n,{dimColor:!0,children:f},P)}let b=g[0];let T=g.index??0;let J=f.slice(0,T);let K=f.slice(T+b.length);return r(n,{dimColor:!0,children:[J,e(ft,{url:b,children:b}),K]},P)}var A=/https?:\/\/\S+/;function iRe(){let i=S(10),I;if(i[0]===y)I=nW.getInstance().getStatus(),i[0]=I;else I=i[0];let[t,H]=d(I),B,D;if(i[1]===y)B=()=>nW.getInstance().subscribe(H),D=[],i[1]=B,i[2]=D;else B=i[1],D=i[2];if(k(B,D),!t.isAuthenticating&&!t.error&&t.output.length===0){return null}if(!t.isAuthenticating&&!t.error){return null}let a;if(i[3]!==t.output)a=t.output.length>0&&e(s,{flexDirection:"column",children:t.output.slice(-5).map(Y)}),i[3]=t.output,i[4]=a;else a=i[4];let l;if(i[5]!==t.error)l=t.error&&e(Xr,{error:t.error}),i[5]=t.error,i[6]=l;else l=i[6];let N;if(i[7]!==a||i[8]!==l)N=e(s,{marginY:1,children:r(Ws,{color:"permission",title:"Authentication",children:[a,l]})}),i[7]=a,i[8]=l,i[9]=N;else N=i[9];return N}
export{iRe};
