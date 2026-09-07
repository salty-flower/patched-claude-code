// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{_}from"./chunk-c8ey99v5.js";import{n}from"./chunk-hrm5smjv.js";import{Ct}from"./chunk-v6grt0bs.js";import{F,e,r}from"./chunk-smtaex5n.js";import{$w,Hl,Sy,re,E,Ir,C,N}from"./chunk-jegfnmzv.js";import{Zt}from"./chunk-te942vjn.js";N();N();function y(I){return I!==""}function D(R,v){Sy(R)?R.key??v:v;return r(F,{children:[v>0&&e(n,{dimColor:!0,children:" \xB7 "}),R]})}function ue(B){let k=_(5),{children:m}=B,i,p;if(k[0]!==m){p=Zt;bb0:{let T=$w.toArray(m).filter(y);if(T.length===0){p=null;break bb0}i=T.map(D)}k[0]=m,k[1]=i,k[2]=p}else i=k[1],p=k[2];if(p!==Zt)return p;let b;if(k[3]!==i)b=e(F,{children:i}),k[3]=i,k[4]=b;else b=k[4];return b}N();var P=800;function U0(o,u,t,c=P){let a=Ct(),l=C(0),s=C(void 0),S=Ir(()=>o(!1)),f=re(()=>{if(s.current)s.current(),s.current=void 0},[]);return E(()=>()=>{if(s.current)f(),S()},[f]),re(()=>{let d=Date.now();if(d-l.current<=c&&s.current!==void 0)f(),o(!1),u();else t?.(),o(!0),f(),s.current=a.setTimeout(()=>{o(!1),s.current=void 0},c);l.current=d},[o,u,t,f,a,c])}
export{ue,U0};
