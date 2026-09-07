// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{y}from"./chunk-wdpeygc3.js";import{n}from"./chunk-bkvzfc5q.js";import{vt}from"./chunk-6wv5bpfy.js";import{F,e,r}from"./chunk-smtaex5n.js";import{NH,Rl,__,re,E,xr,v,N}from"./chunk-vm1tjjym.js";import{Zt}from"./chunk-55pqc2de.js";N();N();function P(q){return q!==""}function L(R,S){__(R)?R.key??S:S;return r(F,{children:[S>0&&e(n,{dimColor:!0,children:" \xB7 "}),R]})}function ue(I){let T=y(5),{children:m}=I,i,p;if(T[0]!==m){p=Zt;bb0:{let b=NH.toArray(m).filter(P);if(b.length===0){p=null;break bb0}i=b.map(L)}T[0]=m,T[1]=i,T[2]=p}else i=T[1],p=T[2];if(p!==Zt)return p;let D;if(T[3]!==i)D=e(F,{children:i}),T[3]=i,T[4]=D;else D=T[4];return D}N();var _=800;function Tx(o,u,t,c=_){let a=vt(),l=v(0),s=v(void 0),k=xr(()=>o(!1)),f=re(()=>{if(s.current)s.current(),s.current=void 0},[]);return E(()=>()=>{if(s.current)f(),k()},[f]),re(()=>{let d=Date.now();if(d-l.current<=c&&s.current!==void 0)f(),o(!1),u();else t?.(),o(!0),f(),s.current=a.setTimeout(()=>{o(!1),s.current=void 0},c);l.current=d},[o,u,t,f,a,c])}
export{ue,Tx};
