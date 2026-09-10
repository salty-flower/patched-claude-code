// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{y}from"./chunk-jy8hazaz.js";import{XB}from"./chunk-e02s7cks.js";import{o,n,ut}from"./chunk-ykvaeqdn.js";import{ws}from"./chunk-wbv4628x.js";import{jr}from"./chunk-4tjgkfnk.js";import{e,r}from"./chunk-qs39f0kj.js";import{E,d,M}from"./chunk-xgsrj7pc.js";import{p}from"./chunk-bkhfcpjc.js";M();function P(f,L){let b=f.match(S);if(!b){return e(n,{dimColor:!0,children:f},L)}let A=b[0];let N=b.index??0;let H=f.slice(0,N);let J=f.slice(N+A.length);return r(n,{dimColor:!0,children:[H,e(ut,{url:A,children:A}),J]},L)}var S=/https?:\/\/\S+/;function fwe(){let i=y(10),C;if(i[0]===p)C=XB.getInstance().getStatus(),i[0]=C;else C=i[0];let[t,G]=d(C),I,B;if(i[1]===p)I=()=>XB.getInstance().subscribe(G),B=[],i[1]=I,i[2]=B;else I=i[1],B=i[2];if(E(I,B),!t.isAuthenticating&&!t.error&&t.output.length===0){return null}if(!t.isAuthenticating&&!t.error){return null}let a;if(i[3]!==t.output)a=t.output.length>0&&e(o,{flexDirection:"column",children:t.output.slice(-5).map(P)}),i[3]=t.output,i[4]=a;else a=i[4];let l;if(i[5]!==t.error)l=t.error&&e(jr,{error:t.error}),i[5]=t.error,i[6]=l;else l=i[6];let D;if(i[7]!==a||i[8]!==l)D=e(o,{marginY:1,children:r(ws,{color:"permission",title:"Authentication",children:[a,l]})}),i[7]=a,i[8]=l,i[9]=D;else D=i[9];return D}
export{fwe};
