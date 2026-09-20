// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{b}from"./chunk-mvpw0rjp.js";import{uW}from"./chunk-g4c6ggz4.js";import{s,n,ft}from"./chunk-cskdt2sa.js";import{zs}from"./chunk-qjsjfgps.js";import{Xr}from"./chunk-s07brp27.js";import{e,r}from"./chunk-437ab22y.js";import{A,d,M}from"./chunk-ncc6kxz8.js";import{y}from"./chunk-y8wd7we8.js";M();function T(f,N){let g=f.match(k);if(!g){return e(n,{dimColor:!0,children:f},N)}let S=g[0];let P=g.index??0;let H=f.slice(0,P);let J=f.slice(P+S.length);return r(n,{dimColor:!0,children:[H,e(ft,{url:S,children:S}),J]},N)}var k=/https?:\/\/\S+/;function wRe(){let i=b(10),I;if(i[0]===y)I=uW.getInstance().getStatus(),i[0]=I;else I=i[0];let[t,G]=d(I),B,D;if(i[1]===y)B=()=>uW.getInstance().subscribe(G),D=[],i[1]=B,i[2]=D;else B=i[1],D=i[2];if(A(B,D),!t.isAuthenticating&&!t.error&&t.output.length===0){return null}if(!t.isAuthenticating&&!t.error){return null}let a;if(i[3]!==t.output)a=t.output.length>0&&e(s,{flexDirection:"column",children:t.output.slice(-5).map(T)}),i[3]=t.output,i[4]=a;else a=i[4];let l;if(i[5]!==t.error)l=t.error&&e(Xr,{error:t.error}),i[5]=t.error,i[6]=l;else l=i[6];let L;if(i[7]!==a||i[8]!==l)L=e(s,{marginY:1,children:r(zs,{color:"permission",title:"Authentication",children:[a,l]})}),i[7]=a,i[8]=l,i[9]=L;else L=i[9];return L}
export{wRe};
