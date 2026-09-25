// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{Iq}from"./chunk-twxt3h9y.js";import{w}from"./chunk-1qj92kzv.js";import{s,n,St}from"./chunk-hkhfvq8c.js";import{ql}from"./chunk-tnnerrr1.js";import{po}from"./chunk-y1hag1h4.js";import{e,r}from"./chunk-srmsc891.js";import{k,g,L}from"./chunk-1cnhgfv0.js";import{_}from"./chunk-q9zds4dm.js";L();function P(c,C){let p=c.match(b);if(!p){return e(n,{dimColor:!0,children:c},C)}let h=p[0];let I=p.index??0;let Y=c.slice(0,I);let q=c.slice(I+h.length);return r(n,{dimColor:!0,children:[Y,e(St,{url:h,children:h}),q]},C)}var b=/https?:\/\/\S+/;function a$e(){let u=w(10),S;if(u[0]===_)S=Iq.getInstance().getStatus(),u[0]=S;else S=u[0];let[t,T]=g(S),y,A;if(u[1]===_)y=()=>Iq.getInstance().subscribe(T),A=[],u[1]=y,u[2]=A;else y=u[1],A=u[2];if(k(y,A),!t.isAuthenticating&&!t.error&&t.output.length===0){return null}if(!t.isAuthenticating&&!t.error){return null}let a;if(u[3]!==t.output)a=t.output.length>0&&e(s,{flexDirection:"column",children:t.output.slice(-5).map(P)}),u[3]=t.output,u[4]=a;else a=u[4];let l;if(u[5]!==t.error)l=t.error&&e(po,{error:t.error}),u[5]=t.error,u[6]=l;else l=u[6];let R;if(u[7]!==a||u[8]!==l)R=e(s,{marginY:1,children:r(ql,{color:"permission",title:"Authentication",children:[a,l]})}),u[7]=a,u[8]=l,u[9]=R;else R=u[9];return R}
export{a$e};
